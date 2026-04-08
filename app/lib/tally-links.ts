/**
 * Role → Tally evaluation form URL mapping.
 *
 * Each public-facing job title maps to an internal role key,
 * which maps to a Tally form URL from environment variables.
 *
 * Tally URLs include hidden prefill fields via query params:
 *   application_id, full_name, email, role, source
 */

// Internal role keys used for Tally form routing
export type RoleKey =
  | "recruiter"
  | "proxy_interviewer"
  | "developer"
  | "headhunter"
  | "social_marketer"
  | "reverse_recruiter"
  | "normal_job_bidder"
  | "tailored_job_bidder";

// Map public job titles (from the form) to internal role keys
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

// Map each role key to the env var name that holds its Tally URL
const ROLE_KEY_ENV: Record<RoleKey, string> = {
  recruiter: "TALLY_RECRUITER_URL",
  proxy_interviewer: "TALLY_PROXY_INTERVIEWER_URL",
  developer: "TALLY_DEVELOPER_URL",
  headhunter: "TALLY_HEADHUNTER_URL",
  social_marketer: "TALLY_SOCIAL_MARKETER_URL",
  reverse_recruiter: "TALLY_REVERSE_RECRUITER_URL",
  normal_job_bidder: "TALLY_NORMAL_JOB_BIDDER_URL",
  tailored_job_bidder: "TALLY_TAILORED_JOB_BIDDER_URL",
};

/**
 * Resolve a public job title to an internal role key.
 * Falls back to "normal_job_bidder" for unknown titles.
 */
export function resolveRoleKey(jobTitle: string): RoleKey {
  return TITLE_TO_ROLE_KEY[jobTitle] ?? "normal_job_bidder";
}

/**
 * Get the base Tally form URL for a role key.
 * Returns null if the env var is not set.
 */
function getBaseTallyUrl(roleKey: RoleKey): string | null {
  const envVar = ROLE_KEY_ENV[roleKey];
  return process.env[envVar] || null;
}

/**
 * Build a full Tally evaluation URL with hidden tracking fields.
 * Returns null if no Tally form is configured for the role.
 */
export function getTallyLinkByRole(
  roleKey: RoleKey,
  params: {
    application_id: string;
    full_name: string;
    email: string;
    role: string; // original job title from the form
  }
): string | null {
  const baseUrl = getBaseTallyUrl(roleKey);
  if (!baseUrl) return null;

  const query = new URLSearchParams({
    application_id: params.application_id,
    full_name: params.full_name,
    email: params.email,
    role: params.role,
    source: "website",
  });

  // Tally URLs may already have query params; use correct separator
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${query.toString()}`;
}
