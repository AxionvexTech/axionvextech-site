import { getAuthedUser } from "../../lib/auth-user";
import { getSupabaseServer } from "../../lib/supabase/server";
import { isSupabaseConfigured } from "../../lib/supabase/admin";
import Link from "next/link";

export const metadata = { title: "Dashboard — AxionvexTech Portal" };

async function loadMetrics() {
  if (!isSupabaseConfigured()) {
    return { pendingApplications: 0, pendingSubmissions: 0, myOpenTasks: 0, disabled: true };
  }
  const supabase = await getSupabaseServer();

  const [apps, subs, tasks] = await Promise.all([
    supabase
      .from("applications")
      .select("id", { count: "exact", head: true })
      .in("status", ["received", "tally_sent", "tally_completed", "screening", "shortlisted"]),
    supabase
      .from("submissions")
      .select("id", { count: "exact", head: true })
      .eq("status", "pending"),
    supabase
      .from("tasks")
      .select("id", { count: "exact", head: true })
      .in("status", ["open", "in_progress"]),
  ]);

  return {
    pendingApplications: apps.count ?? 0,
    pendingSubmissions: subs.count ?? 0,
    myOpenTasks: tasks.count ?? 0,
    disabled: false,
  };
}

function Stat({ label, value, href }: { label: string; value: number | string; href?: string }) {
  const body = (
    <div className="rounded border border-slate-800 bg-slate-900/50 p-5 hover:border-emerald-600 transition-colors">
      <div className="text-xs text-slate-400 uppercase tracking-wider">{label}</div>
      <div className="mt-2 text-3xl font-semibold text-emerald-400 tabular-nums">{value}</div>
    </div>
  );
  return href ? <Link href={href}>{body}</Link> : body;
}

export default async function DashboardPage() {
  const user = await getAuthedUser();
  const metrics = await loadMetrics();
  const isManager = user?.system_role === "manager" || user?.system_role === "admin";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-semibold">Welcome, {user?.email}</h1>
        <p className="text-slate-400 text-xs mt-1">
          Signed in as <span className="text-emerald-400">{user?.system_role}</span>
          {user?.business_role ? ` · ${user.business_role}` : ""}
        </p>
      </div>

      {metrics.disabled && (
        <div className="rounded border border-amber-500/40 bg-amber-500/5 px-4 py-3 text-amber-200 text-xs">
          Supabase not configured. Set the env vars to see live metrics.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {isManager && (
          <Stat
            label="Pending applications"
            value={metrics.pendingApplications}
            href="/portal/hiring"
          />
        )}
        {isManager && (
          <Stat
            label="Pending submissions"
            value={metrics.pendingSubmissions}
            href="/portal/submissions"
          />
        )}
        <Stat label="Open tasks" value={metrics.myOpenTasks} href="/portal/tasks" />
      </div>

      <div className="text-xs text-slate-500">
        Tip: if you just approved an applicant, their invite is emailed automatically.
      </div>
    </div>
  );
}
