"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthedUser } from "../lib/auth-user";
import { getSupabaseAdmin } from "../lib/supabase/admin";
import { assertCan } from "../lib/rbac";
import { logActivity } from "../lib/audit";
import type { BusinessRole } from "../types/domain";
import { getResendClient, FROM_ADDRESS } from "../lib/resend";

const BUSINESS_ROLE_FROM_KEY: Record<string, BusinessRole> = {
  recruiter: "recruiter",
  proxy_interviewer: "proxy_interviewer",
  developer: "developer",
  social_marketer: "social_marketer",
  reverse_recruiter: "reverse_recruiter",
  headhunter: "recruiter",
  normal_job_bidder: "job_bidder",
  tailored_job_bidder: "job_bidder",
};

function inferBusinessRole(role_key: string | null | undefined): BusinessRole {
  if (!role_key) return "recruiter";
  return BUSINESS_ROLE_FROM_KEY[role_key] ?? "recruiter";
}

export async function approveApplication(formData: FormData) {
  const user = await getAuthedUser();
  assertCan(user, "application.approve");

  const id = String(formData.get("id") ?? "");
  const notes = String(formData.get("notes") ?? "").trim();
  if (!id) throw new Error("Missing application id");

  const admin = getSupabaseAdmin();

  const { data: app, error: appErr } = await admin
    .from("applications")
    .select("id, application_id, email, full_name, role_key, role_display_label")
    .eq("id", id)
    .maybeSingle();
  if (appErr || !app) throw new Error("Application not found");

  // Update status
  await admin
    .from("applications")
    .update({ status: "approved" })
    .eq("id", app.id);

  // Create invite
  const token = randomBytes(32).toString("hex");
  const expires_at = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString();
  const business_role = inferBusinessRole(app.role_key);

  await admin.from("invites").insert({
    email: app.email.toLowerCase(),
    intended_system_role: "worker",
    intended_business_role: business_role,
    token,
    invited_by: user!.id,
    expires_at,
    source_application_id: app.id,
  });

  // Send invite via Supabase Auth magic link — it hits /auth/callback,
  // where ensureUserRow() consumes the invite row created above.
  const portalUrl = process.env.PORTAL_URL ?? "";
  try {
    const { error: inviteErr } = await admin.auth.admin.inviteUserByEmail(
      app.email.toLowerCase(),
      { redirectTo: `${portalUrl}/auth/callback?next=/portal/dashboard` }
    );
    if (inviteErr && inviteErr.status !== 422) {
      // 422 = user already exists, which is fine — they can just log in.
      console.warn("[approveApplication] invite email failed:", inviteErr.message);
    }
  } catch (err) {
    console.warn("[approveApplication] invite call threw:", err);
  }

  // Nice-to-have: also send a friendly Resend note so branding is consistent.
  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: `AxionvexTech <${FROM_ADDRESS}>`,
      to: [app.email],
      subject: "You're approved — finish setting up your AxionvexTech Portal access",
      text:
        `Hi ${app.full_name},\n\n` +
        `Your application for ${app.role_display_label ?? app.role_key} has been approved.\n` +
        `Check your inbox for the sign-in email from Supabase (subject starts with "Confirm your signup" or "Magic Link").\n` +
        `That link will activate your portal account on ${portalUrl}.\n\n` +
        `— AxionvexTech Ops`,
    });
  } catch (err) {
    console.warn("[approveApplication] brand email failed:", err);
  }

  await logActivity({
    actor_id: user!.id,
    action: "application.approved",
    target_type: "applications",
    target_id: app.id,
    metadata: { notes, application_id: app.application_id, role_key: app.role_key },
  });

  revalidatePath("/portal/hiring");
  redirect("/portal/hiring");
}

export async function rejectApplication(formData: FormData) {
  const user = await getAuthedUser();
  assertCan(user, "application.reject");

  const id = String(formData.get("id") ?? "");
  const reason = String(formData.get("reason") ?? "").trim();
  if (!id) throw new Error("Missing application id");

  const admin = getSupabaseAdmin();
  const { error } = await admin
    .from("applications")
    .update({ status: "rejected" })
    .eq("id", id);
  if (error) throw error;

  await logActivity({
    actor_id: user!.id,
    action: "application.rejected",
    target_type: "applications",
    target_id: id,
    metadata: { reason },
  });

  revalidatePath("/portal/hiring");
  redirect("/portal/hiring");
}
