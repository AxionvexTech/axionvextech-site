import Link from "next/link";
import { getSupabaseServer } from "../../../lib/supabase/server";
import { isSupabaseConfigured } from "../../../lib/supabase/admin";
import { getAuthedUser } from "../../../lib/auth-user";
import { redirect } from "next/navigation";

export const metadata = { title: "Hiring Queue — AxionvexTech Portal" };

const STATUS_FILTERS = [
  "received",
  "tally_sent",
  "tally_completed",
  "screening",
  "shortlisted",
  "approved",
  "rejected",
] as const;

type Status = (typeof STATUS_FILTERS)[number];

function StatusPill({ status }: { status: string }) {
  const color =
    status === "approved"
      ? "bg-emerald-500/10 text-emerald-300 border-emerald-600/40"
      : status === "rejected"
      ? "bg-rose-500/10 text-rose-300 border-rose-600/40"
      : status === "shortlisted"
      ? "bg-sky-500/10 text-sky-300 border-sky-600/40"
      : "bg-slate-500/10 text-slate-300 border-slate-600/40";
  return (
    <span className={`inline-block px-2 py-0.5 rounded border text-[10px] uppercase tracking-wider ${color}`}>
      {status}
    </span>
  );
}

export default async function HiringPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const user = await getAuthedUser();
  if (user?.system_role !== "manager" && user?.system_role !== "admin") {
    redirect("/portal/dashboard");
  }

  if (!isSupabaseConfigured()) {
    return (
      <div className="rounded border border-amber-500/40 bg-amber-500/5 px-4 py-3 text-amber-200 text-sm">
        Supabase is not configured. Set env vars and run the migration to see applications.
      </div>
    );
  }

  const params = await searchParams;
  const activeStatus = (params.status as Status | undefined) ?? null;

  const supabase = await getSupabaseServer();
  let q = supabase
    .from("applications")
    .select("id, application_id, full_name, email, role_display_label, role_key, status, created_at")
    .order("created_at", { ascending: false })
    .limit(100);
  if (activeStatus) q = q.eq("status", activeStatus);

  const { data: applications, error } = await q;
  if (error) {
    return (
      <div className="text-rose-300 text-sm">
        Failed to load applications: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold">Hiring queue</h1>
        <p className="text-slate-400 text-xs mt-1">
          Applications from the public site. Manager review required for every approval.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap text-xs">
        <Link
          href="/portal/hiring"
          className={`px-3 py-1 rounded border ${
            !activeStatus ? "border-emerald-500 text-emerald-300" : "border-slate-700 text-slate-400 hover:text-white"
          }`}
        >
          all
        </Link>
        {STATUS_FILTERS.map((s) => (
          <Link
            key={s}
            href={`/portal/hiring?status=${s}`}
            className={`px-3 py-1 rounded border ${
              activeStatus === s ? "border-emerald-500 text-emerald-300" : "border-slate-700 text-slate-400 hover:text-white"
            }`}
          >
            {s}
          </Link>
        ))}
      </div>

      <div className="rounded border border-slate-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-900/80 text-slate-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-4 py-2 font-medium">ID</th>
              <th className="text-left px-4 py-2 font-medium">Name</th>
              <th className="text-left px-4 py-2 font-medium">Role</th>
              <th className="text-left px-4 py-2 font-medium">Status</th>
              <th className="text-left px-4 py-2 font-medium">Applied</th>
              <th className="text-left px-4 py-2 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {(applications ?? []).map((a) => (
              <tr key={a.id} className="hover:bg-slate-900/50">
                <td className="px-4 py-2 text-slate-400 font-mono text-xs">{a.application_id}</td>
                <td className="px-4 py-2">
                  <div className="font-medium">{a.full_name}</div>
                  <div className="text-xs text-slate-500">{a.email}</div>
                </td>
                <td className="px-4 py-2 text-slate-300">
                  {a.role_display_label ?? a.role_key}
                </td>
                <td className="px-4 py-2">
                  <StatusPill status={a.status} />
                </td>
                <td className="px-4 py-2 text-slate-400 text-xs">
                  {new Date(a.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-right">
                  <Link
                    href={`/portal/hiring/${a.id}`}
                    className="text-emerald-400 hover:underline text-xs"
                  >
                    review →
                  </Link>
                </td>
              </tr>
            ))}
            {(applications ?? []).length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-slate-500 text-sm">
                  No applications {activeStatus ? `with status "${activeStatus}"` : "yet"}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
