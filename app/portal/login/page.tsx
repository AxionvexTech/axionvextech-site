import { redirect } from "next/navigation";
import { getSupabaseServer } from "../../lib/supabase/server";

export const metadata = {
  title: "Portal Login — AxionvexTech",
  robots: { index: false, follow: false },
};

async function requestMagicLink(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const next = String(formData.get("next") ?? "/portal/dashboard");

  if (!email.includes("@")) {
    redirect(`/portal/login?error=invalid_email&next=${encodeURIComponent(next)}`);
  }

  const supabase = await getSupabaseServer();
  const portalUrl = process.env.PORTAL_URL ?? "http://localhost:3000";
  const redirectTo = `${portalUrl}/auth/callback?next=${encodeURIComponent(next)}`;

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo, shouldCreateUser: true },
  });

  if (error) {
    console.error("[portal/login] magic link failed:", error.message);
    redirect(`/portal/login?error=send_failed&next=${encodeURIComponent(next)}`);
  }

  redirect(`/portal/login?sent=1`);
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string; next?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="text-emerald-400 text-sm tracking-widest">axv_portal</div>
          <h1 className="text-2xl font-semibold mt-2">Internal sign-in</h1>
          <p className="text-slate-400 text-xs mt-1">
            Invite-only. A magic link is emailed to approved workers.
          </p>
        </div>

        {params.sent === "1" ? (
          <div className="rounded border border-emerald-600/40 bg-emerald-500/5 px-4 py-3 text-emerald-300 text-sm">
            Check your inbox — if your email is approved, a sign-in link is on its way.
          </div>
        ) : (
          <form action={requestMagicLink} className="space-y-4">
            <input type="hidden" name="next" value={params.next ?? "/portal/dashboard"} />
            <label className="block">
              <span className="block text-xs text-slate-400 mb-1">Work email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
                placeholder="you@axionvextech.com"
              />
            </label>
            {params.error === "invalid_email" && (
              <p className="text-rose-400 text-xs">Enter a valid email.</p>
            )}
            {params.error === "send_failed" && (
              <p className="text-rose-400 text-xs">Could not send link — try again shortly.</p>
            )}
            <button
              type="submit"
              className="w-full rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-2"
            >
              Send magic link
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-xs text-slate-500">
          Not a worker yet? Apply at{" "}
          <a className="text-emerald-400 hover:underline" href="https://axionvextech.com/recruiting">
            axionvextech.com/recruiting
          </a>
        </p>
      </div>
    </div>
  );
}
