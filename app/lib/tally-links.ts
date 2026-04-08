/**
 * Role normalization and Tally evaluation form URL mapping.
 *
 * Public-facing job titles → internal role keys → Tally form URLs.
 *
 * IMPORTANT: The Tally URL always carries the normalized role_key (e.g. "recruiter"),
 * never the display label (e.g. "Talent & Operations Coordinator").
 * This ensures Apps Script receives a consistent, machine-readable role value.
 */

// ─── Role keys ───────────────────────────────────────────────────

export type RoleKey =
  | "recruiter"
  | "proxy_interviewer"
  | "developer"
  | "headhunter"
  | "social_marketer"
  | "reverse_recruiter"
  | "normal_job_bidder"
  | "tailored_job_bidder";

// ─── Display label → role key ────────────────────────────────────

const TITLE_TO_ROLE_KEY: Record<string, RoleKey> = {
  "Talent & Operations Coordinator": "recruiter",
  "Client-Facing Technical Lead": "proxy_interviewer",
  "Full-Stack Web Developer": "developer",
  "Software Engineer": "developer",
  "Frontend Engineer": "developer",
  "Backend Engineer": "developer",
  "Technical Interview Specialist": "proxy_interviewer",
  "Recruiter / Talent Sourcer": "headhunter",
  "Social Media / Outreach Marketer": "social_marketer",
  "Delivery Coordinator": "recruiter",
  "Other / Future Role": "normal_job_bidder",
};

/**
 * Resolve a public job title to a normalized internal role key.
 * Falls back to "normal_job_bidder" for unknown titles.
 */
export function resolveRoleKey(jobTitle: string): RoleKey {
  return TITLE_TO_ROLE_KEY[jobTitle] ?? "normal_job_bidder";
}

// ─── Role key → Tally base URL ───────────────────────────────────

function getTallyBaseUrl(roleKey: RoleKey): string | null {
  const map: Record<RoleKey, string | undefined> = {
    recruiter: process.env.TALLY_RECRUITER_URL,
    proxy_interviewer: process.env.TALLY_PROXY_INTERVIEWER_URL,
    developer: process.env.TALLY_DEVELOPER_URL,
    headhunter: process.env.TALLY_HEADHUNTER_URL,
    social_marketer: process.env.TALLY_SOCIAL_MARKETER_URL,
    reverse_recruiter: process.env.TALLY_REVERSE_RECRUITER_URL,
    normal_job_bidder: process.env.TALLY_NORMAL_JOB_BIDDER_URL,
    tailored_job_bidder: process.env.TALLY_TAILORED_JOB_BIDDER_URL,
  };
  return map[roleKey] || null;
}

// ─── Build full Tally URL with hidden prefill params ─────────────

/**
 * Build a Tally evaluation URL with hidden tracking fields.
 *
 * The `role` param is always the normalized role_key (e.g. "developer"),
 * not the display label. This is what Apps Script expects.
 *
 * Returns null if no Tally form is configured for the role.
 */
export function getTallyLinkByRole(
  roleKey: RoleKey,
  params: {
    application_id: string;
    full_name: string;
    email: string;
  }
): string | null {
  const baseUrl = getTallyBaseUrl(roleKey);
  if (!baseUrl) return null;

  const url = new URL(baseUrl);
  url.searchParams.set("application_id", params.application_id);
  url.searchParams.set("full_name", params.full_name);
  url.searchParams.set("email", params.email);
  url.searchParams.set("role", roleKey); // normalized key, not display label
  url.searchParams.set("source", "website");

  return url.toString();
}
