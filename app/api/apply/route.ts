import { NextRequest, NextResponse } from "next/server";
import { generateApplicationId } from "../../lib/application-id";
import { resolveRoleKey, getTallyLinkByRole } from "../../lib/tally-links";
import { getResendClient, FROM_ADDRESS, MANAGER_EMAIL } from "../../lib/resend";
import {
  type ApplicationData,
  managerNotificationHtml,
  managerNotificationText,
  candidateEvaluationHtml,
  candidateEvaluationText,
} from "../../lib/email-templates";

/* ────────────────────────────────────────────
   Validation
   ──────────────────────────────────────────── */

interface RawPayload {
  full_name: string;
  email: string;
  phone: string;
  role: string;
  portfolio: string;
  linkedin: string;
  github: string;
  country: string;
  timezone: string;
  message: string;
}

function validate(body: unknown): RawPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;

  const full_name = typeof b.full_name === "string" ? b.full_name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const role = typeof b.role === "string" ? b.role.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (full_name.length < 2) return null;
  if (!email.includes("@") || email.length < 5) return null;
  if (role.length === 0) return null;
  if (message.length < 10) return null;

  return {
    full_name,
    email,
    phone: typeof b.phone === "string" ? b.phone.trim() : "",
    role,
    portfolio: typeof b.portfolio === "string" ? b.portfolio.trim() : "",
    linkedin: typeof b.linkedin === "string" ? b.linkedin.trim() : "",
    github: typeof b.github === "string" ? b.github.trim() : "",
    country: typeof b.country === "string" ? b.country.trim() : "",
    timezone: typeof b.timezone === "string" ? b.timezone.trim() : "",
    message,
  };
}

/* ────────────────────────────────────────────
   POST /api/apply

   This is the primary application entry point.
   The website handles the first step — NOT Apps Script.

   Flow:
   1. Validate input
   2. Generate application_id
   3. Resolve role key from display label
   4. Build Tally evaluation URL with role_key (not display label)
   5. Send manager notification email via Resend
   6. Send candidate auto-reply with Tally link via Resend
   7. Return success JSON
   ──────────────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = validate(body);

    if (!data) {
      return NextResponse.json(
        { error: "Invalid application data. Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Generate application ID and timestamp
    const application_id = generateApplicationId();
    const submitted_at = new Date().toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/New_York",
    });

    // Resolve display label → normalized role key
    const role_key = resolveRoleKey(data.role);

    // Build Tally evaluation URL (uses role_key, not display label)
    const tallyUrl = getTallyLinkByRole(role_key, {
      application_id,
      full_name: data.full_name,
      email: data.email,
    });

    const appData: ApplicationData = {
      application_id,
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      role: data.role,       // display label for emails
      role_key,              // normalized key for logging/tracking
      portfolio: data.portfolio,
      linkedin: data.linkedin,
      github: data.github,
      country: data.country,
      timezone: data.timezone,
      message: data.message,
      submitted_at,
    };

    console.log(`[apply] New application: ${application_id} | ${data.role} -> ${role_key} | ${data.email}`);

    // ── DB: persist application record here if database is connected ──
    // Example:
    //   await db.applications.create({ ...appData, tally_url: tallyUrl });
    // ──────────────────────────────────────────────────────────────────

    // Send emails via Resend
    const resend = getResendClient();

    // 1. Manager notification
    const { error: managerErr } = await resend.emails.send({
      from: `AxionvexTech Applications <${FROM_ADDRESS}>`,
      to: [MANAGER_EMAIL],
      replyTo: data.email,
      subject: `New Application — ${data.role} [${application_id}]`,
      html: managerNotificationHtml(appData),
      text: managerNotificationText(appData),
    });

    if (managerErr) {
      console.error("[apply] Manager email failed:", managerErr);
      return NextResponse.json(
        { error: "Failed to send application. Please email manager@axionvextech.com directly." },
        { status: 500 }
      );
    }

    // 2. Candidate auto-reply with role-based Tally evaluation link
    const { error: candidateErr } = await resend.emails.send({
      from: `AxionvexTech <${FROM_ADDRESS}>`,
      to: [data.email],
      subject: tallyUrl
        ? "Application received — please complete your evaluation"
        : `Application received — ${data.role}`,
      html: candidateEvaluationHtml(appData, tallyUrl),
      text: candidateEvaluationText(appData, tallyUrl),
    });

    if (candidateErr) {
      // Log but don't fail — manager already received the application
      console.error("[apply] Candidate email failed:", candidateErr);
    }

    console.log(`[apply] Emails sent for ${application_id} | tally=${tallyUrl ? "yes" : "no"}`);

    return NextResponse.json({
      success: true,
      application_id,
      evaluation_sent: !!tallyUrl,
    });
  } catch (err) {
    console.error("[apply] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email manager@axionvextech.com directly." },
      { status: 500 }
    );
  }
}
