/**
 * HTML email templates for the hiring pipeline.
 *
 * Three templates:
 *   1. Manager notification — new application received
 *   2. Candidate auto-reply — evaluation link
 *   3. Approved candidate invite — onboarding / Slack
 */

export interface ApplicationData {
  application_id: string;
  full_name: string;
  email: string;
  phone: string;
  role: string;       // display label (e.g. "Talent & Operations Coordinator")
  role_key: string;   // normalized key (e.g. "recruiter")
  portfolio: string;
  linkedin: string;
  github: string;
  country: string;
  timezone: string;
  message: string;
  submitted_at: string;
}

// ─── Shared styles ───────────────────────────────────────────────

const WRAPPER = `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;`;
const HEADER_BG = `background: #0f172a; padding: 24px 32px; border-radius: 12px 12px 0 0;`;
const BODY_BG = `background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none;`;
const FOOTER_BG = `background: #f8fafc; padding: 16px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;`;
const ROW_LABEL = `padding: 10px 0; color: #64748b; width: 140px; vertical-align: top; font-size: 14px;`;
const ROW_VALUE = `padding: 10px 0; font-size: 14px;`;
const LINK = `color: #2563eb; text-decoration: none;`;
const BUTTON = `display: inline-block; background: #2563eb; color: #ffffff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;`;

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="${ROW_LABEL}">${label}</td><td style="${ROW_VALUE}">${value}</td></tr>`;
}

function linkCell(label: string, url: string, text?: string): string {
  if (!url) return "";
  return row(label, `<a href="${url}" style="${LINK}">${text || url}</a>`);
}

// ─── 1. Manager notification ─────────────────────────────────────

export function managerNotificationHtml(data: ApplicationData): string {
  return `
<div style="${WRAPPER}">
  <div style="${HEADER_BG}">
    <h1 style="color: #ffffff; font-size: 18px; margin: 0;">New Application — ${data.role}</h1>
    <p style="color: #94a3b8; font-size: 12px; margin: 8px 0 0;">${data.application_id}</p>
  </div>
  <div style="${BODY_BG}">
    <table style="width: 100%; border-collapse: collapse;">
      ${row("Application ID", `<code style="font-size: 13px;">${data.application_id}</code>`)}
      ${row("Name", `<strong>${data.full_name}</strong>`)}
      ${row("Email", `<a href="mailto:${data.email}" style="${LINK}">${data.email}</a>`)}
      ${row("Phone", data.phone || "Not provided")}
      ${row("Role", `<strong>${data.role}</strong>`)}
      ${row("Role Key", data.role_key)}
      ${row("Country", data.country || "Not provided")}
      ${row("Timezone", data.timezone || "Not provided")}
      ${linkCell("LinkedIn", data.linkedin)}
      ${linkCell("GitHub", data.github)}
      ${linkCell("Portfolio", data.portfolio)}
    </table>
    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
      <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Message</p>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">
${data.message}
      </div>
    </div>
  </div>
  <div style="${FOOTER_BG}">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">
      Submitted ${data.submitted_at} · Reply to <a href="mailto:${data.email}" style="${LINK}">${data.email}</a>
    </p>
  </div>
</div>`;
}

export function managerNotificationText(data: ApplicationData): string {
  return `New Application — ${data.role}

Application ID: ${data.application_id}
Name: ${data.full_name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Role: ${data.role} (${data.role_key})
Country: ${data.country || "—"}
Timezone: ${data.timezone || "—"}
LinkedIn: ${data.linkedin || "—"}
GitHub: ${data.github || "—"}
Portfolio: ${data.portfolio || "—"}

Message:
${data.message}

Submitted: ${data.submitted_at}`;
}

// ─── 2. Candidate auto-reply with evaluation link ────────────────

export function candidateEvaluationHtml(
  data: ApplicationData,
  tallyUrl: string | null
): string {
  const evaluationBlock = tallyUrl
    ? `
    <div style="margin-top: 24px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 24px; text-align: center;">
      <h2 style="font-size: 16px; margin: 0 0 8px; color: #1e293b;">Next step: Complete your evaluation</h2>
      <p style="font-size: 13px; color: #475569; margin: 0 0 20px; line-height: 1.6;">
        To move forward, please complete a short role-specific evaluation. It takes 10–15 minutes and helps us understand how you think and work.
      </p>
      <a href="${tallyUrl}" style="${BUTTON}">Start Evaluation</a>
      <p style="font-size: 11px; color: #94a3b8; margin: 16px 0 0;">
        Your evaluation must be completed before we can proceed with your application.
      </p>
    </div>`
    : `
    <div style="margin-top: 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
      <p style="font-size: 13px; color: #475569; margin: 0; line-height: 1.6;">
        We will follow up with next steps within one week. If we need additional information or an evaluation, we will send it separately.
      </p>
    </div>`;

  return `
<div style="${WRAPPER}">
  <div style="${HEADER_BG}">
    <h1 style="color: #ffffff; font-size: 18px; margin: 0;">Thanks for applying, ${data.full_name.split(" ")[0]}.</h1>
    <p style="color: #94a3b8; font-size: 13px; margin: 8px 0 0;">AxionvexTech · ${data.role}</p>
  </div>
  <div style="${BODY_BG}">
    <p style="font-size: 14px; line-height: 1.7; color: #334155; margin: 0 0 16px;">
      We received your application for <strong>${data.role}</strong>. Every application is reviewed by a real person on our team — not filtered by software.
    </p>
    <p style="font-size: 14px; line-height: 1.7; color: #334155; margin: 0 0 4px;">
      Here is what happens from here:
    </p>
    <ol style="font-size: 13px; color: #475569; line-height: 1.8; padding-left: 20px; margin: 8px 0 0;">
      ${tallyUrl ? `<li><strong>Evaluation</strong> — Complete the short role-specific evaluation linked below.</li>` : ""}
      <li><strong>Review</strong> — We review your application within one week.</li>
      <li><strong>Screening</strong> — If there is a potential fit, we schedule a short intro call.</li>
      <li><strong>Interview</strong> — A focused conversation about real work and how you think.</li>
      <li><strong>Decision</strong> — You hear back either way. We do not ghost candidates.</li>
    </ol>
    ${evaluationBlock}
  </div>
  <div style="${FOOTER_BG}">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">
      AxionvexTech · <a href="https://axionvextech.com" style="${LINK}">axionvextech.com</a> · <a href="mailto:manager@axionvextech.com" style="${LINK}">manager@axionvextech.com</a>
    </p>
  </div>
</div>`;
}

export function candidateEvaluationText(
  data: ApplicationData,
  tallyUrl: string | null
): string {
  return `Thanks for applying, ${data.full_name.split(" ")[0]}.

We received your application for ${data.role}.

${tallyUrl ? `NEXT STEP: Complete your evaluation\n${tallyUrl}\n\nYour evaluation must be completed before we can proceed.\n` : "We will follow up with next steps within one week.\n"}
What happens next:
${tallyUrl ? "1. Complete the evaluation linked above\n" : ""}${tallyUrl ? "2" : "1"}. We review your application within one week
${tallyUrl ? "3" : "2"}. If there is a fit, we schedule a short screening call
${tallyUrl ? "4" : "3"}. Focused technical conversation
${tallyUrl ? "5" : "4"}. You hear back either way

— AxionvexTech
axionvextech.com`;
}

// ─── 3. Approved candidate invite ────────────────────────────────

export interface ApprovedCandidateData {
  application_id: string;
  full_name: string;
  email: string;
  role: string;
  invite_channel: string;
  slack_invite_url: string;
}

export function approvedCandidateHtml(data: ApprovedCandidateData): string {
  return `
<div style="${WRAPPER}">
  <div style="background: #064e3b; padding: 24px 32px; border-radius: 12px 12px 0 0;">
    <h1 style="color: #ffffff; font-size: 18px; margin: 0;">Welcome to AxionvexTech, ${data.full_name.split(" ")[0]}.</h1>
    <p style="color: #6ee7b7; font-size: 13px; margin: 8px 0 0;">You have been approved for: ${data.role}</p>
  </div>
  <div style="${BODY_BG}">
    <p style="font-size: 14px; line-height: 1.7; color: #334155; margin: 0 0 16px;">
      After reviewing your application and evaluation, we are confident you are a strong fit for this role. Here is what happens now:
    </p>

    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h2 style="font-size: 15px; margin: 0 0 12px; color: #166534;">Your next steps</h2>
      <ol style="font-size: 13px; color: #475569; line-height: 2; padding-left: 20px; margin: 0;">
        <li>Join the team workspace: <strong>${data.invite_channel}</strong></li>
        <li>Introduce yourself in <code>#introductions</code></li>
        <li>Your onboarding lead will reach out within 24 hours with your first assignment</li>
      </ol>
      ${data.slack_invite_url ? `
      <div style="margin-top: 16px; text-align: center;">
        <a href="${data.slack_invite_url}" style="${BUTTON}; background: #4A154B;">Join Slack Workspace</a>
      </div>` : `
      <p style="font-size: 12px; color: #64748b; margin: 12px 0 0;">
        A Slack workspace invite will be sent separately to <strong>${data.email}</strong>.
      </p>`}
    </div>

    <p style="font-size: 14px; line-height: 1.7; color: #334155; margin: 0 0 8px;">
      We move fast. You will have real context, real access, and real work within your first week. No training videos.
    </p>
    <p style="font-size: 13px; color: #64748b; margin: 0;">
      Application ID: <code>${data.application_id}</code>
    </p>
  </div>
  <div style="${FOOTER_BG}">
    <p style="color: #94a3b8; font-size: 12px; margin: 0;">
      AxionvexTech · <a href="https://axionvextech.com" style="${LINK}">axionvextech.com</a> · <a href="mailto:manager@axionvextech.com" style="${LINK}">manager@axionvextech.com</a>
    </p>
  </div>
</div>`;
}

export function approvedCandidateText(data: ApprovedCandidateData): string {
  return `Welcome to AxionvexTech, ${data.full_name.split(" ")[0]}.

You have been approved for: ${data.role}

Your next steps:
1. Join the team workspace: ${data.invite_channel}${data.slack_invite_url ? `\n   Join here: ${data.slack_invite_url}` : `\n   A Slack invite will be sent separately to ${data.email}`}
2. Introduce yourself in #introductions
3. Your onboarding lead will reach out within 24 hours

Application ID: ${data.application_id}

— AxionvexTech
axionvextech.com`;
}
