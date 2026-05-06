import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSecret } from "../../../lib/security";
import { getResendClient, FROM_ADDRESS } from "../../../lib/resend";
import {
  type ApprovedCandidateData,
  approvedCandidateHtml,
  approvedCandidateText,
} from "../../../lib/email-templates";
import { getSupabaseAdmin, isSupabaseConfigured } from "../../../lib/supabase/admin";
import { logActivity } from "../../../lib/audit";

/* ────────────────────────────────────────────
   POST /api/hiring/approved-candidate

   Called by Google Apps Script after manual final review.
   Sends the onboarding / Slack invite email to the approved candidate.

   Auth: x-axionvex-secret header must match WEBHOOK_SHARED_SECRET.
   Fallback: "secret" field in the JSON body.

   Flow (from Apps Script perspective):
   1. Apps Script sends POST with candidate data + secret
   2. This endpoint verifies secret
   3. Sends onboarding email via Resend
   4. Returns { ok: true, invite_sent: true, sent_at: "..." }
   5. Apps Script marks website_notified=yes, slack_invite_sent=yes
   ──────────────────────────────────────────── */

interface ApprovalPayload {
  application_id: string;
  full_name: string;
  email: string;
  role: string;
  invite_channel: string;
  slack_invite_url: string;
  // Optional metadata from Apps Script (logged, not required)
  source?: string;
  score_total?: number;
  score_band?: string;
  shortlist_status?: string;
  final_review_status?: string;
}

function validate(body: unknown): ApprovalPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;

  const application_id = typeof b.application_id === "string" ? b.application_id.trim() : "";
  const full_name = typeof b.full_name === "string" ? b.full_name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const role = typeof b.role === "string" ? b.role.trim() : "";
  const invite_channel = typeof b.invite_channel === "string" ? b.invite_channel.trim() : "";
  const slack_invite_url = typeof b.slack_invite_url === "string" ? b.slack_invite_url.trim() : "";

  if (!application_id || !full_name || !email || !role || !invite_channel) {
    return null;
  }

  return {
    application_id,
    full_name,
    email,
    role,
    invite_channel,
    slack_invite_url,
    source: typeof b.source === "string" ? b.source : undefined,
    score_total: typeof b.score_total === "number" ? b.score_total : undefined,
    score_band: typeof b.score_band === "string" ? b.score_band : undefined,
    shortlist_status: typeof b.shortlist_status === "string" ? b.shortlist_status : undefined,
    final_review_status: typeof b.final_review_status === "string" ? b.final_review_status : undefined,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = validate(body);

    if (!data) {
      console.warn("[hiring/approved] Invalid payload received");
      return NextResponse.json(
        { ok: false, error: "Invalid request body. Missing required fields." },
        { status: 400 }
      );
    }

    // Auth: prefer header, fall back to body field
    const secret =
      request.headers.get("x-axionvex-secret") ||
      (typeof (body as Record<string, unknown>).secret === "string"
        ? (body as Record<string, unknown>).secret
        : "");

    if (!verifyWebhookSecret(secret)) {
      console.warn(`[hiring/approved] Unauthorized attempt for ${data.application_id}`);
      return NextResponse.json(
        { ok: false, error: "Unauthorized." },
        { status: 401 }
      );
    }

    console.log(
      `[hiring/approved] Processing: ${data.application_id} | ${data.role} | ${data.email}` +
        (data.score_total != null ? ` | score=${data.score_total}` : "") +
        (data.score_band ? ` | band=${data.score_band}` : "")
    );

    // Mirror into Supabase (non-fatal).
    if (isSupabaseConfigured()) {
      try {
        const admin = getSupabaseAdmin();
        const { data: appRow } = await admin
          .from("applications")
          .select("id")
          .eq("application_id", data.application_id)
          .maybeSingle();

        if (appRow) {
          await admin
            .from("applications")
            .update({ status: "approved" })
            .eq("id", appRow.id);

          if (data.score_total != null || data.score_band || data.shortlist_status) {
            await admin.from("screening_results").insert({
              application_id: appRow.id,
              score_total: data.score_total ?? null,
              score_band:
                (data.score_band as "strong" | "borderline" | "weak" | undefined) ?? null,
              shortlist_status:
                (data.shortlist_status as
                  | "auto_shortlisted"
                  | "manual_review"
                  | "rejected"
                  | undefined) ?? null,
              raw_payload: body as Record<string, unknown>,
            });
          }

          await logActivity({
            action: "application.approved",
            target_type: "applications",
            target_id: appRow.id,
            metadata: {
              application_id: data.application_id,
              role: data.role,
              source: data.source,
            },
          });
        } else {
          console.warn(
            `[hiring/approved] No matching application row for ${data.application_id} — webhook arrived before DB insert?`
          );
        }
      } catch (dbErr) {
        console.warn(`[hiring/approved] DB mirror failed for ${data.application_id}:`, dbErr);
      }
    }

    // Send onboarding / Slack invite email
    const resend = getResendClient();
    const candidateData: ApprovedCandidateData = {
      application_id: data.application_id,
      full_name: data.full_name,
      email: data.email,
      role: data.role,
      invite_channel: data.invite_channel,
      slack_invite_url: data.slack_invite_url,
    };

    const { error: sendErr } = await resend.emails.send({
      from: `AxionvexTech <${FROM_ADDRESS}>`,
      to: [data.email],
      subject: `Welcome to AxionvexTech — You're In`,
      html: approvedCandidateHtml(candidateData),
      text: approvedCandidateText(candidateData),
    });

    if (sendErr) {
      console.error(`[hiring/approved] Email failed for ${data.application_id}:`, sendErr);
      return NextResponse.json(
        { ok: false, error: "Failed to send invite email.", application_id: data.application_id },
        { status: 500 }
      );
    }

    const sent_at = new Date().toISOString();
    console.log(`[hiring/approved] Invite sent: ${data.application_id} at ${sent_at}`);

    return NextResponse.json({
      ok: true,
      invite_sent: true,
      application_id: data.application_id,
      sent_at,
    });
  } catch (err) {
    console.error("[hiring/approved] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
