import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSecret } from "../../../lib/security";
import { getResendClient, FROM_ADDRESS } from "../../../lib/resend";
import {
  type ApprovedCandidateData,
  approvedCandidateHtml,
  approvedCandidateText,
} from "../../../lib/email-templates";

/* ────────────────────────────────────────────
   Validation
   ──────────────────────────────────────────── */

interface ApprovalPayload {
  application_id: string;
  full_name: string;
  email: string;
  role: string;
  invite_channel: string;
  secret: string;
  // Optional fields from Apps Script (logged but not required)
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
  const secret = typeof b.secret === "string" ? b.secret : "";

  if (!application_id || !full_name || !email || !role || !invite_channel || !secret) {
    return null;
  }

  return {
    application_id,
    full_name,
    email,
    role,
    invite_channel,
    secret,
    source: typeof b.source === "string" ? b.source : undefined,
    score_total: typeof b.score_total === "number" ? b.score_total : undefined,
    score_band: typeof b.score_band === "string" ? b.score_band : undefined,
    shortlist_status: typeof b.shortlist_status === "string" ? b.shortlist_status : undefined,
    final_review_status: typeof b.final_review_status === "string" ? b.final_review_status : undefined,
  };
}

/* ────────────────────────────────────────────
   POST /api/candidates/approved
   ──────────────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = validate(body);

    if (!data) {
      console.warn("[approved] Invalid payload received");
      return NextResponse.json(
        { success: false, error: "Invalid request body. Missing required fields." },
        { status: 400 }
      );
    }

    // Verify shared secret
    if (!verifyWebhookSecret(data.secret)) {
      console.warn(`[approved] Invalid secret for ${data.application_id}`);
      return NextResponse.json(
        { success: false, error: "Unauthorized." },
        { status: 401 }
      );
    }

    console.log(
      `[approved] Processing approval: ${data.application_id} | ${data.role} | ${data.email}` +
      (data.score_total != null ? ` | score=${data.score_total}` : "") +
      (data.score_band ? ` | band=${data.score_band}` : "")
    );

    // Send onboarding / Slack invite email
    const resend = getResendClient();
    const candidateData: ApprovedCandidateData = {
      application_id: data.application_id,
      full_name: data.full_name,
      email: data.email,
      role: data.role,
      invite_channel: data.invite_channel,
    };

    const { error: sendErr } = await resend.emails.send({
      from: `AxionvexTech <${FROM_ADDRESS}>`,
      to: [data.email],
      subject: `Welcome to AxionvexTech — You're In`,
      html: approvedCandidateHtml(candidateData),
      text: approvedCandidateText(candidateData),
    });

    if (sendErr) {
      console.error(`[approved] Email failed for ${data.application_id}:`, sendErr);
      return NextResponse.json(
        { success: false, error: "Failed to send invite email.", application_id: data.application_id },
        { status: 500 }
      );
    }

    const sent_at = new Date().toISOString();
    console.log(`[approved] Invite sent: ${data.application_id} at ${sent_at}`);

    return NextResponse.json({
      success: true,
      invite_sent: true,
      application_id: data.application_id,
      sent_at,
    });
  } catch (err) {
    console.error("[approved] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
