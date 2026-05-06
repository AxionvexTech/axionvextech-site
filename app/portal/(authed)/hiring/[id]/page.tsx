import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSupabaseServer } from "../../../../lib/supabase/server";
import { isSupabaseConfigured } from "../../../../lib/supabase/admin";
import { getAuthedUser } from "../../../../lib/auth-user";
import { approveApplication, rejectApplication } from "../../../../actions/applications";

export const metadata = { title: "Application review — AxionvexTech Portal" };

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
      <div className="text-slate-200 mt-0.5 text-sm break-words">{value || "—"}</div>
    </div>
  );
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getAuthedUser();
  if (user?.system_role !== "manager" && user?.system_role !== "admin") {
    redirect("/portal/dashboard");
  }
  if (!isSupabaseConfigured()) {
    return (
      <div className="text-amber-300 text-sm">Supabase is not configured.</div>
    );
  }

  const { id } = await params;
  const supabase = await getSupabaseServer();
  const { data: app } = await supabase
    .from("applications")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (!app) notFound();

  const { data: screening } = await supabase
    .from("screening_results")
    .select("*")
    .eq("application_id", app.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const isDecided = app.status === "approved" || app.status === "rejected";

  return (
    <div className="space-y-6">
      <Link href="/portal/hiring" className="text-xs text-slate-400 hover:text-white">
        ← back to queue
      </Link>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold">{app.full_name}</h1>
          <p className="text-slate-400 text-xs mt-1">
            <span className="font-mono">{app.application_id}</span> · applied{" "}
            {new Date(app.created_at).toLocaleString()}
          </p>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-slate-400">
          status: <span className="text-emerald-400">{app.status}</span>
        </div>
      </div>

      <div className="rounded border border-slate-800 bg-slate-900/40 p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Email" value={app.email} />
        <Field label="Phone" value={app.phone} />
        <Field label="Country" value={app.country} />
        <Field label="Timezone" value={app.timezone} />
        <Field label="Role applied for" value={app.role_display_label ?? app.role_key} />
        <Field label="Role key" value={app.role_key} />
        <Field
          label="Portfolio"
          value={app.portfolio ? <a className="text-emerald-400 hover:underline" href={app.portfolio}>{app.portfolio}</a> : null}
        />
        <Field
          label="LinkedIn"
          value={app.linkedin ? <a className="text-emerald-400 hover:underline" href={app.linkedin}>{app.linkedin}</a> : null}
        />
        <Field
          label="GitHub"
          value={app.github ? <a className="text-emerald-400 hover:underline" href={app.github}>{app.github}</a> : null}
        />
        <Field
          label="Tally link"
          value={app.tally_url ? <a className="text-emerald-400 hover:underline" href={app.tally_url}>open evaluation</a> : null}
        />
        <div className="md:col-span-2">
          <Field label="Message" value={<p className="whitespace-pre-wrap">{app.message}</p>} />
        </div>
      </div>

      {screening && (
        <div className="rounded border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-sm font-semibold mb-3">Screening result</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Field label="Score total" value={screening.score_total} />
            <Field label="Band" value={screening.score_band} />
            <Field label="Shortlist" value={screening.shortlist_status} />
            <Field label="Reviewed" value={new Date(screening.created_at).toLocaleString()} />
          </div>
        </div>
      )}

      {!isDecided && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <form
            action={approveApplication}
            className="rounded border border-emerald-700/40 bg-emerald-500/5 p-5 space-y-3"
          >
            <input type="hidden" name="id" value={app.id} />
            <h2 className="text-sm font-semibold text-emerald-300">Approve</h2>
            <p className="text-xs text-slate-400">
              Creates a portal invite and emails the candidate a magic sign-in link.
            </p>
            <textarea
              name="notes"
              rows={2}
              placeholder="Optional notes (internal)"
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs"
            />
            <button
              type="submit"
              className="w-full rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-2 text-sm"
            >
              Approve & invite
            </button>
          </form>

          <form
            action={rejectApplication}
            className="rounded border border-rose-700/40 bg-rose-500/5 p-5 space-y-3"
          >
            <input type="hidden" name="id" value={app.id} />
            <h2 className="text-sm font-semibold text-rose-300">Reject</h2>
            <p className="text-xs text-slate-400">
              Marks the application as rejected. No email is sent automatically.
            </p>
            <textarea
              name="reason"
              rows={2}
              placeholder="Internal reason"
              className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs"
            />
            <button
              type="submit"
              className="w-full rounded bg-rose-500 hover:bg-rose-400 text-slate-50 font-semibold py-2 text-sm"
            >
              Reject
            </button>
          </form>
        </div>
      )}

      {isDecided && (
        <div className="text-xs text-slate-500">
          Decision recorded. Check the activity log for detail.
        </div>
      )}
    </div>
  );
}
