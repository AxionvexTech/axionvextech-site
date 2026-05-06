import { getSupabaseServer } from "./supabase/server";
import type { AuthedUser } from "../types/domain";

/**
 * Load the current signed-in user + their system/business role from the DB.
 * Returns null if no session, or if the user row doesn't exist yet.
 */
export async function getAuthedUser(): Promise<AuthedUser | null> {
  const supabase = await getSupabaseServer();
  const { data: sessionData } = await supabase.auth.getUser();
  const sbUser = sessionData.user;
  if (!sbUser) return null;

  const { data: row } = await supabase
    .from("users")
    .select("id, email, system_role")
    .eq("id", sbUser.id)
    .maybeSingle();

  if (!row) return null;

  const { data: profile } = await supabase
    .from("worker_profiles")
    .select("business_role")
    .eq("user_id", sbUser.id)
    .maybeSingle();

  return {
    id: row.id,
    email: row.email,
    system_role: row.system_role,
    business_role: profile?.business_role ?? undefined,
  };
}
