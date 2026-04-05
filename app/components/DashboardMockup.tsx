interface DashboardMockupProps {
  variant: "saas" | "ops" | "cloud";
}

export default function DashboardMockup({ variant }: DashboardMockupProps) {
  if (variant === "saas") {
    return (
      <div className="bg-slate-900 rounded-lg border border-slate-700/50 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/50 bg-slate-800/50">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
          </div>
          <div className="flex-1 mx-3 h-4 bg-slate-700/50 rounded text-[10px] text-slate-500 flex items-center px-2 font-mono">
            app.client.com/dashboard
          </div>
        </div>
        {/* Dashboard content */}
        <div className="p-3 space-y-2">
          {/* Metric row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-800/50 rounded p-2">
              <div className="text-[10px] text-slate-500">Requests/s</div>
              <div className="text-sm font-bold text-emerald-400">2,847</div>
            </div>
            <div className="bg-slate-800/50 rounded p-2">
              <div className="text-[10px] text-slate-500">P99 Latency</div>
              <div className="text-sm font-bold text-blue-400">23ms</div>
            </div>
            <div className="bg-slate-800/50 rounded p-2">
              <div className="text-[10px] text-slate-500">Error Rate</div>
              <div className="text-sm font-bold text-emerald-400">0.01%</div>
            </div>
          </div>
          {/* Chart placeholder */}
          <div className="bg-slate-800/30 rounded p-2 h-16 flex items-end gap-[3px]">
            {[40, 55, 35, 65, 50, 70, 45, 80, 60, 75, 55, 85, 65, 70, 90, 72, 88, 78, 92, 85].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-500/40 rounded-t"
                  style={{ height: `${h}%` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "ops") {
    return (
      <div className="bg-slate-900 rounded-lg border border-slate-700/50 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/50 bg-slate-800/50">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-2 h-2 rounded-full bg-slate-600" />
          </div>
          <div className="flex-1 mx-3 h-4 bg-slate-700/50 rounded text-[10px] text-slate-500 flex items-center px-2 font-mono">
            ops.internal/workflows
          </div>
        </div>
        <div className="p-3 space-y-2">
          {/* Workflow items */}
          {[
            { name: "Invoice Processing", status: "Active", color: "bg-emerald-400" },
            { name: "Client Onboarding", status: "Active", color: "bg-emerald-400" },
            { name: "Report Generation", status: "Queued", color: "bg-yellow-400" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between bg-slate-800/50 rounded px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span className="text-xs text-slate-300">{item.name}</span>
              </div>
              <span className="text-[10px] text-slate-500">{item.status}</span>
            </div>
          ))}
          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-slate-800/50 rounded p-2">
              <div className="text-[10px] text-slate-500">Tasks Today</div>
              <div className="text-sm font-bold text-white">142</div>
            </div>
            <div className="bg-slate-800/50 rounded p-2">
              <div className="text-[10px] text-slate-500">Automation Rate</div>
              <div className="text-sm font-bold text-emerald-400">87%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // cloud variant
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-700/50 overflow-hidden font-mono">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/50 bg-slate-800/50">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-600" />
        </div>
        <span className="ml-2 text-[10px] text-slate-500">deploy — pipeline</span>
      </div>
      <div className="p-3 text-[11px] leading-relaxed space-y-1">
        <div className="text-slate-500">
          <span className="text-emerald-400">✓</span> Build &mdash; 14s
        </div>
        <div className="text-slate-500">
          <span className="text-emerald-400">✓</span> Tests &mdash; 247 passed
        </div>
        <div className="text-slate-500">
          <span className="text-emerald-400">✓</span> Security scan &mdash; 0
          vulnerabilities
        </div>
        <div className="text-slate-500">
          <span className="text-emerald-400">✓</span> Deploy staging &mdash;
          healthy
        </div>
        <div className="text-slate-500">
          <span className="text-emerald-400">✓</span> Deploy production &mdash;
          healthy
        </div>
        <div className="mt-2 text-emerald-400 font-bold text-xs">
          Pipeline complete &mdash; 2m 41s
        </div>
      </div>
    </div>
  );
}
