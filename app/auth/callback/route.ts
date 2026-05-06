import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServer } from "../../lib/supabase/server";
import { ensureUserRow } from "../../lib/bootstrap-user";
import { logActivity } from "../../lib/audit";

/**
 * GET /auth/callback?code=...&next=/portal/...
 *
 * Finalizes the Supabase magic-link / OTP exchange and ensures the
 * users row exists. Called by the link in the sign-in email.
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/portal/dashboard";

  if (!code) {
    return NextResponse.redirect(new URL("/portal/login?error=missing_code", url.origin));
  }

  const supabase = await getSupabaseServer();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    console.error("[auth/callback] exchange failed:", error.message);
    return NextResponse.redirect(new URL("/portal/login?error=exchange_failed", url.origin));
  }

  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    return NextResponse.redirect(new URL("/portal/login?error=no_session", url.origin));
  }

  try {
    const result = await ensureUserRow({
      auth_user_id: data.user.id,
      email: data.user.email ?? "",
    });
    if (result.is_new) {
      await logActivity({
        actor_id: data.user.id,
        action: "user.activated",
        target_type: "users",
        target_id: data.user.id,
        metadata: { system_role: result.system_role, email: data.user.email },
      });
    }
  } catch (err) {
    console.error("[auth/callback] ensureUserRow failed:", err);
  }

  return NextResponse.redirect(new URL(next, url.origin));
}
