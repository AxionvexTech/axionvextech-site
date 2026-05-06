export const metadata = { title: "Submissions — AxionvexTech Portal" };

export default function SubmissionsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Submission review</h1>
      <div className="rounded border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-400">
        Submission review is scheduled for v1.1. It plugs directly into the existing
        <code className="text-emerald-400 mx-1">submissions</code>
        table once the recruiter-facing kanban lands.
      </div>
    </div>
  );
}
