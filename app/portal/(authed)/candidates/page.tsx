export const metadata = { title: "Candidates — AxionvexTech Portal" };

export default function CandidatesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Sourced candidates</h1>
      <div className="rounded border border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-400">
        Candidate kanban + submission flow is scheduled for v1.1. The schema is already in place
        (<code className="text-emerald-400">candidate_records</code>, <code className="text-emerald-400">submissions</code>) —
        only the UI is pending.
      </div>
    </div>
  );
}
