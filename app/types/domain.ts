/**
 * Domain types — hand-written to match the Supabase schema in
 * /supabase/migrations/0001_init.sql. If you regenerate types via
 * the Supabase CLI, put them in `./db.ts` and keep this file for
 * app-level shapes.
 */

export type SystemRole = "applicant" | "worker" | "manager" | "admin";
export type UserStatus = "invited" | "active" | "suspended" | "offboarded";

export type BusinessRole =
  | "recruiter"
  | "proxy_interviewer"
  | "account_supplier"
  | "social_marketer"
  | "reverse_recruiter"
  | "job_bidder"
  | "developer";

export type RoleKey =
  | "recruiter"
  | "proxy_interviewer"
  | "developer"
  | "headhunter"
  | "social_marketer"
  | "reverse_recruiter"
  | "normal_job_bidder"
  | "tailored_job_bidder";

export type ApplicationStatus =
  | "received"
  | "tally_sent"
  | "tally_completed"
  | "screening"
  | "shortlisted"
  | "approved"
  | "rejected"
  | "withdrawn";

export type ScoreBand = "strong" | "borderline" | "weak";
export type ShortlistStatus = "auto_shortlisted" | "manual_review" | "rejected";

export type CandidateStage =
  | "new"
  | "sourced"
  | "contacted"
  | "screening"
  | "interview"
  | "shortlisted"
  | "submitted_to_client"
  | "placed"
  | "dropped";

export type SubmissionStatus = "pending" | "approved" | "rejected" | "needs_changes";
export type TaskStatus = "open" | "in_progress" | "blocked" | "done" | "cancelled";
export type TaskType = "sourcing" | "interview" | "account_setup" | "outreach" | "other";
export type SupplierStatus = "available" | "in_use" | "flagged" | "retired";

export interface User {
  id: string;
  email: string;
  full_name: string | null;
  system_role: SystemRole;
  status: UserStatus;
  invited_by: string | null;
  invited_at: string | null;
  activated_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface WorkerProfile {
  user_id: string;
  business_role: BusinessRole;
  secondary_roles: BusinessRole[];
  timezone: string | null;
  country: string | null;
  availability_hours_per_week: number | null;
  notes: string | null;
  onboarded_at: string | null;
}

export interface Application {
  id: string;
  application_id: string;
  full_name: string;
  email: string;
  phone: string | null;
  country: string | null;
  timezone: string | null;
  message: string | null;
  role_key: RoleKey;
  role_display_label: string | null;
  portfolio: string | null;
  linkedin: string | null;
  github: string | null;
  status: ApplicationStatus;
  tally_url: string | null;
  tally_completed_at: string | null;
  source: string;
  converted_user_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ScreeningResult {
  id: string;
  application_id: string;
  score_total: number | null;
  score_band: ScoreBand | null;
  shortlist_status: ShortlistStatus | null;
  raw_payload: Record<string, unknown> | null;
  reviewed_by: string | null;
  reviewer_decision: string | null;
  reviewer_notes: string | null;
  created_at: string;
}

export interface CandidateRecord {
  id: string;
  sourced_by: string;
  client_account_id: string | null;
  full_name: string;
  email: string | null;
  phone: string | null;
  linkedin: string | null;
  target_role: string | null;
  current_stage: CandidateStage;
  notes: string | null;
  created_at: string;
}

export interface Submission {
  id: string;
  candidate_id: string;
  submitted_by: string;
  reviewed_by: string | null;
  status: SubmissionStatus;
  manager_notes: string | null;
  submitted_at: string;
  decided_at: string | null;
}

export interface AuthedUser {
  id: string;
  email: string;
  system_role: SystemRole;
  business_role?: BusinessRole;
}
