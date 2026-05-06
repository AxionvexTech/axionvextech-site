import { getSupabaseAdmin } from "./supabase/admin";
import type { SystemRole } from "../types/domain";

/**
 * Ensure a `users` row exists for a freshly-authenticated Supabase user.
 *
 * Called from the auth callback after a magic-link exchange. Two paths:
 *   - Bootstrap manager: emails in BOOTSTRAP_MANAGER_EMAILS become
 *     system_role='manager', status='active'.
 *   - Invited worker: a matching `invites` row is consumed — the user is
 *     created with the invite's intended roles and activated.
 *
 * If neither path applies, we create a minimal `applicant` row so the
 * user can at least see their login state (but portal pages will refuse
 * them because they have no manager/worker capabilities).
 */
export async function ensureUserRow(params: {
  auth_user_id: string;
  email: string;
}): Promise<{ system_role: SystemRole; is_new: boolean }> {
  const admin = getSupabaseAdmin();
  const email = params.email.toLowerCase();

  // 1. Already exists?
  const { data: existing } = await admin
    .from("users")
    .select("system_role")
    .eq("id", params.auth_user_id)
    .maybeSingle();
  if (existing) {
    return { system_role: existing.system_role, is_new: false };
  }

  // 2. Bootstrap manager list
  const bootstrapList = (process.env.BOOTSTRAP_MANAGER_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  if (bootstrapList.includes(email)) {
    await admin.from("users").insert({
      id: params.auth_user_id,
      email,
      system_role: "manager",
      status: "active",
      activated_at: new Date().toISOString(),
    });
    return { system_role: "manager", is_new: true };
  }

  // 3. Consume pending invite
  const { data: invite } = await admin
    .from("invites")
    .select("*")
    .eq("email", email)
    .is("accepted_at", null)
    .gt("expires_at", new Date().toISOString())
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (invite) {
    await admin.from("users").insert({
      id: params.auth_user_id,
      email,
      system_role: invite.intended_system_role,
      status: "active",
      invited_by: invite.invited_by,
      activated_at: new Date().toISOString(),
    });
    if (invite.intended_business_role) {
      await admin.from("worker_profiles").insert({
        user_id: params.auth_user_id,
        business_role: invite.intended_business_role,
        onboarded_at: new Date().toISOString(),
      });
    }
    await admin
      .from("invites")
      .update({ accepted_at: new Date().toISOString() })
      .eq("id", invite.id);
    return { system_role: invite.intended_system_role, is_new: true };
  }

  // 4. Default: weak applicant-level row
  await admin.from("users").insert({
    id: params.auth_user_id,
    email,
    system_role: "applicant",
    status: "active",
    activated_at: new Date().toISOString(),
  });
  return { system_role: "applicant", is_new: true };
}
