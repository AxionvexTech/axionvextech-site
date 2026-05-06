-- ════════════════════════════════════════════════════════════════
--  AxionvexTech Ops Portal — Initial Schema
--  Apply via: Supabase Dashboard → SQL Editor → paste + run
--  Or via CLI: supabase db push
-- ════════════════════════════════════════════════════════════════

create extension if not exists "pgcrypto";

-- ─── Enums ──────────────────────────────────────────────────────
do $$ begin
  create type system_role as enum ('applicant','worker','manager','admin');
exception when duplicate_object then null; end $$;

do $$ begin
  create type user_status as enum ('invited','active','suspended','offboarded');
exception when duplicate_object then null; end $$;

do $$ begin
  create type business_role as enum (
    'recruiter','proxy_interviewer','account_supplier',
    'social_marketer','reverse_recruiter','job_bidder','developer'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type role_key as enum (
    'recruiter','proxy_interviewer','developer','headhunter',
    'social_marketer','reverse_recruiter','normal_job_bidder','tailored_job_bidder'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type application_status as enum (
    'received','tally_sent','tally_completed','screening',
    'shortlisted','approved','rejected','withdrawn'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type score_band as enum ('strong','borderline','weak');
exception when duplicate_object then null; end $$;

do $$ begin
  create type shortlist_status as enum ('auto_shortlisted','manual_review','rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type task_type as enum ('sourcing','interview','account_setup','outreach','other');
exception when duplicate_object then null; end $$;

do $$ begin
  create type task_status as enum ('open','in_progress','blocked','done','cancelled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type candidate_stage as enum (
    'new','sourced','contacted','screening','interview',
    'shortlisted','submitted_to_client','placed','dropped'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type submission_status as enum ('pending','approved','rejected','needs_changes');
exception when duplicate_object then null; end $$;

do $$ begin
  create type supplier_status as enum ('available','in_use','flagged','retired');
exception when duplicate_object then null; end $$;

do $$ begin
  create type notification_kind as enum (
    'invite','task_assigned','submission_decision','application_update','system'
  );
exception when duplicate_object then null; end $$;

-- ─── updated_at trigger helper ──────────────────────────────────
create or replace function touch_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

-- ─── users (mirrors auth.users with app-level columns) ──────────
create table if not exists users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  system_role system_role not null default 'applicant',
  status user_status not null default 'invited',
  invited_by uuid references users(id),
  invited_at timestamptz,
  activated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists users_role_status_idx on users(system_role, status);
drop trigger if exists users_touch on users;
create trigger users_touch before update on users
  for each row execute function touch_updated_at();

-- ─── worker_profiles ────────────────────────────────────────────
create table if not exists worker_profiles (
  user_id uuid primary key references users(id) on delete cascade,
  business_role business_role not null,
  secondary_roles business_role[] default '{}',
  timezone text,
  country text,
  availability_hours_per_week int,
  notes text,
  onboarded_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists worker_profiles_role_idx on worker_profiles(business_role);
drop trigger if exists worker_profiles_touch on worker_profiles;
create trigger worker_profiles_touch before update on worker_profiles
  for each row execute function touch_updated_at();

-- ─── applications (public intake) ───────────────────────────────
create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  application_id text unique not null,
  full_name text not null,
  email text not null,
  phone text,
  country text,
  timezone text,
  message text,
  role_key role_key not null,
  role_display_label text,
  portfolio text,
  linkedin text,
  github text,
  status application_status not null default 'received',
  tally_url text,
  tally_completed_at timestamptz,
  source text not null default 'website',
  converted_user_id uuid references users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists applications_status_role_idx on applications(status, role_key);
create index if not exists applications_email_idx on applications(email);
create index if not exists applications_created_idx on applications(created_at desc);
drop trigger if exists applications_touch on applications;
create trigger applications_touch before update on applications
  for each row execute function touch_updated_at();

-- ─── screening_results ──────────────────────────────────────────
create table if not exists screening_results (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references applications(id) on delete cascade,
  score_total int,
  score_band score_band,
  shortlist_status shortlist_status,
  raw_payload jsonb,
  reviewed_by uuid references users(id),
  reviewer_decision text,
  reviewer_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists screening_application_idx on screening_results(application_id);
create index if not exists screening_shortlist_idx on screening_results(shortlist_status);

-- ─── candidate_records (talent sourced for clients) ─────────────
create table if not exists candidate_records (
  id uuid primary key default gen_random_uuid(),
  sourced_by uuid not null references users(id) on delete restrict,
  client_account_id uuid,
  full_name text not null,
  email text,
  phone text,
  linkedin text,
  target_role text,
  current_stage candidate_stage not null default 'new',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists candidates_sourced_stage_idx on candidate_records(sourced_by, current_stage);
create index if not exists candidates_email_idx on candidate_records(email);
drop trigger if exists candidates_touch on candidate_records;
create trigger candidates_touch before update on candidate_records
  for each row execute function touch_updated_at();

-- ─── candidate_stage_history ────────────────────────────────────
create table if not exists candidate_stage_history (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references candidate_records(id) on delete cascade,
  from_stage candidate_stage,
  to_stage candidate_stage not null,
  moved_by uuid references users(id),
  reason text,
  moved_at timestamptz not null default now()
);
create index if not exists candidate_history_idx on candidate_stage_history(candidate_id, moved_at desc);

-- ─── submissions ────────────────────────────────────────────────
create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references candidate_records(id) on delete cascade,
  submitted_by uuid not null references users(id),
  reviewed_by uuid references users(id),
  status submission_status not null default 'pending',
  manager_notes text,
  submitted_at timestamptz not null default now(),
  decided_at timestamptz
);
create index if not exists submissions_status_idx on submissions(status, submitted_at);
create index if not exists submissions_submitter_idx on submissions(submitted_by);

-- ─── tasks ──────────────────────────────────────────────────────
create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  assignee_id uuid references users(id),
  created_by uuid not null references users(id),
  title text not null,
  description text,
  task_type task_type not null default 'other',
  related_candidate_id uuid references candidate_records(id),
  status task_status not null default 'open',
  due_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists tasks_assignee_status_idx on tasks(assignee_id, status);
drop trigger if exists tasks_touch on tasks;
create trigger tasks_touch before update on tasks
  for each row execute function touch_updated_at();

-- ─── supplier_accounts ──────────────────────────────────────────
create table if not exists supplier_accounts (
  id uuid primary key default gen_random_uuid(),
  supplied_by uuid not null references users(id),
  platform text not null,
  identifier text not null,
  credentials_vault_ref text not null,
  status supplier_status not null default 'available',
  assigned_to uuid references users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists supplier_status_idx on supplier_accounts(status);
create index if not exists supplier_assigned_idx on supplier_accounts(assigned_to);

-- ─── invites ────────────────────────────────────────────────────
create table if not exists invites (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  intended_system_role system_role not null default 'worker',
  intended_business_role business_role,
  token text unique not null,
  invited_by uuid not null references users(id),
  expires_at timestamptz not null,
  accepted_at timestamptz,
  source_application_id uuid references applications(id),
  created_at timestamptz not null default now()
);
create index if not exists invites_email_idx on invites(email);

-- ─── notifications ──────────────────────────────────────────────
create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  kind notification_kind not null,
  payload jsonb not null default '{}'::jsonb,
  read_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists notifications_unread_idx
  on notifications(user_id, read_at nulls first, created_at desc);

-- ─── activity_logs ──────────────────────────────────────────────
create table if not exists activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references users(id),
  action text not null,
  target_type text,
  target_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  ip inet,
  user_agent text,
  created_at timestamptz not null default now()
);
create index if not exists activity_target_idx
  on activity_logs(target_type, target_id, created_at desc);
create index if not exists activity_actor_idx
  on activity_logs(actor_id, created_at desc);

-- ─── is_manager() / is_admin() helpers used by RLS ──────────────
create or replace function is_manager_or_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from users
    where id = auth.uid()
      and system_role in ('manager','admin')
      and status = 'active'
  );
$$;

create or replace function is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from users
    where id = auth.uid() and system_role = 'admin' and status = 'active'
  );
$$;
