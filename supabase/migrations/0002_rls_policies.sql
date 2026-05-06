-- ════════════════════════════════════════════════════════════════
--  Row-Level Security policies
--  Apply after 0001_init.sql
-- ════════════════════════════════════════════════════════════════

alter table users              enable row level security;
alter table worker_profiles    enable row level security;
alter table applications       enable row level security;
alter table screening_results  enable row level security;
alter table candidate_records  enable row level security;
alter table candidate_stage_history enable row level security;
alter table submissions        enable row level security;
alter table tasks              enable row level security;
alter table supplier_accounts  enable row level security;
alter table invites            enable row level security;
alter table notifications      enable row level security;
alter table activity_logs      enable row level security;

-- ─── users ──────────────────────────────────────────────────────
drop policy if exists users_self_select on users;
create policy users_self_select on users
  for select using (id = auth.uid() or is_manager_or_admin());

drop policy if exists users_admin_write on users;
create policy users_admin_write on users
  for all using (is_admin()) with check (is_admin());

-- ─── worker_profiles ────────────────────────────────────────────
drop policy if exists worker_profiles_self_select on worker_profiles;
create policy worker_profiles_self_select on worker_profiles
  for select using (user_id = auth.uid() or is_manager_or_admin());

drop policy if exists worker_profiles_self_update on worker_profiles;
create policy worker_profiles_self_update on worker_profiles
  for update using (user_id = auth.uid() or is_manager_or_admin())
  with check (user_id = auth.uid() or is_manager_or_admin());

-- ─── applications (no applicant access — they don't have accounts) ──
drop policy if exists applications_manager_select on applications;
create policy applications_manager_select on applications
  for select using (is_manager_or_admin());

drop policy if exists applications_manager_update on applications;
create policy applications_manager_update on applications
  for update using (is_manager_or_admin()) with check (is_manager_or_admin());

-- ─── screening_results ──────────────────────────────────────────
drop policy if exists screening_manager_all on screening_results;
create policy screening_manager_all on screening_results
  for all using (is_manager_or_admin()) with check (is_manager_or_admin());

-- ─── candidate_records (worker sees own, manager sees all) ──────
drop policy if exists candidates_scoped_select on candidate_records;
create policy candidates_scoped_select on candidate_records
  for select using (sourced_by = auth.uid() or is_manager_or_admin());

drop policy if exists candidates_worker_insert on candidate_records;
create policy candidates_worker_insert on candidate_records
  for insert with check (sourced_by = auth.uid() or is_manager_or_admin());

drop policy if exists candidates_scoped_update on candidate_records;
create policy candidates_scoped_update on candidate_records
  for update using (sourced_by = auth.uid() or is_manager_or_admin())
  with check (sourced_by = auth.uid() or is_manager_or_admin());

-- ─── candidate_stage_history ────────────────────────────────────
drop policy if exists stage_history_scoped_select on candidate_stage_history;
create policy stage_history_scoped_select on candidate_stage_history
  for select using (
    is_manager_or_admin()
    or exists (
      select 1 from candidate_records c
      where c.id = candidate_id and c.sourced_by = auth.uid()
    )
  );

drop policy if exists stage_history_insert on candidate_stage_history;
create policy stage_history_insert on candidate_stage_history
  for insert with check (
    is_manager_or_admin()
    or exists (
      select 1 from candidate_records c
      where c.id = candidate_id and c.sourced_by = auth.uid()
    )
  );

-- ─── submissions ────────────────────────────────────────────────
drop policy if exists submissions_scoped_select on submissions;
create policy submissions_scoped_select on submissions
  for select using (submitted_by = auth.uid() or is_manager_or_admin());

drop policy if exists submissions_worker_insert on submissions;
create policy submissions_worker_insert on submissions
  for insert with check (submitted_by = auth.uid() or is_manager_or_admin());

drop policy if exists submissions_manager_update on submissions;
create policy submissions_manager_update on submissions
  for update using (is_manager_or_admin()) with check (is_manager_or_admin());

-- ─── tasks ──────────────────────────────────────────────────────
drop policy if exists tasks_scoped_select on tasks;
create policy tasks_scoped_select on tasks
  for select using (
    assignee_id = auth.uid() or created_by = auth.uid() or is_manager_or_admin()
  );

drop policy if exists tasks_manager_insert on tasks;
create policy tasks_manager_insert on tasks
  for insert with check (is_manager_or_admin());

drop policy if exists tasks_assignee_update on tasks;
create policy tasks_assignee_update on tasks
  for update using (assignee_id = auth.uid() or is_manager_or_admin())
  with check (assignee_id = auth.uid() or is_manager_or_admin());

-- ─── supplier_accounts ──────────────────────────────────────────
drop policy if exists supplier_scoped_select on supplier_accounts;
create policy supplier_scoped_select on supplier_accounts
  for select using (
    supplied_by = auth.uid() or assigned_to = auth.uid() or is_manager_or_admin()
  );

drop policy if exists supplier_manager_write on supplier_accounts;
create policy supplier_manager_write on supplier_accounts
  for all using (is_manager_or_admin()) with check (is_manager_or_admin());

-- ─── invites (manager manages, invitees look up by token server-side) ──
drop policy if exists invites_manager_all on invites;
create policy invites_manager_all on invites
  for all using (is_manager_or_admin()) with check (is_manager_or_admin());

-- ─── notifications ──────────────────────────────────────────────
drop policy if exists notifications_self_select on notifications;
create policy notifications_self_select on notifications
  for select using (user_id = auth.uid() or is_manager_or_admin());

drop policy if exists notifications_self_update on notifications;
create policy notifications_self_update on notifications
  for update using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ─── activity_logs (read-only for managers; inserts via service role) ──
drop policy if exists activity_manager_select on activity_logs;
create policy activity_manager_select on activity_logs
  for select using (is_manager_or_admin());
