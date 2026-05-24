interface DashboardMockupProps {
  variant: "saas" | "ops" | "cloud" | "hero";
}

export default function DashboardMockup({ variant }: DashboardMockupProps) {
  if (variant === "hero") {
    return (
      <div className="bg-[#060d1f] rounded-xl border border-white/[0.08] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#1e293b]" />
            <div className="w-3 h-3 rounded-full bg-[#1e293b]" />
            <div className="w-3 h-3 rounded-full bg-[#1e293b]" />
          </div>
          <div className="flex-1 mx-3 h-5 bg-white/[0.05] rounded text-[10px] text-[#64748B] flex items-center px-2 font-mono">
            delivery.axionvex.com/ops
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="live-dot" />
            <span className="text-[10px] text-emerald-400 font-semibold">LIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-white/[0.07]">
          {[
            { label: "Active Tracks", value: "4",     color: "text-cyan-400" },
            { label: "Deploys",       value: "14",    color: "text-emerald-400" },
            { label: "Uptime",        value: "99.8%", color: "text-emerald-400" },
          ].map((m, i) => (
            <div
              key={m.label}
              className={`px-4 py-3 ${i < 2 ? "border-r border-white/[0.07]" : ""}`}
            >
              <div className="text-[10px] text-[#64748B] mb-0.5">{m.label}</div>
              <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
            </div>
          ))}
        </div>

        <div className="p-4 space-y-3">
          {[
            { name: "AI Reporting Pipeline",    pct: 82,  status: "RUNNING", bar: "bg-cyan-400",   badge: "text-cyan-400 bg-cyan-400/10"    },
            { name: "Platform Modernization",   pct: 100, status: "SHIPPED", bar: "bg-emerald-400", badge: "text-emerald-400 bg-emerald-400/10" },
            { name: "API Integration Layer",    pct: 45,  status: "BUILD",   bar: "bg-blue-400",   badge: "text-blue-400 bg-blue-400/10"    },
            { name: "Infra Hardening Sprint",   pct: 70,  status: "REVIEW",  bar: "bg-violet-400", badge: "text-violet-400 bg-violet-400/10" },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-[#CBD5E1]">{item.name}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${item.badge}`}>
                  {item.status}
                </span>
              </div>
              <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.bar} opacity-75`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] px-4 py-3 space-y-1.5">
          {[
            "14:23 — Deploy to production: success",
            "13:45 — Test suite: 247/247 passed",
            "12:30 — AI eval checkpoint: passed",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[10px]">
              <span className="text-emerald-400 flex-shrink-0">✓</span>
              <span className="text-[#64748B] font-mono">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "saas") {
    return (
      <div className="bg-[#060d1f] rounded-lg border border-white/[0.08] overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.07] bg-white/[0.03]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
            <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
            <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
          </div>
          <div className="flex-1 mx-3 h-4 bg-white/[0.04] rounded text-[10px] text-[#64748B] flex items-center px-2 font-mono">
            app.client.com/dashboard
          </div>
        </div>
        <div className="p-3 space-y-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded p-2">
              <div className="text-[10px] text-[#64748B]">Requests/s</div>
              <div className="text-sm font-bold text-emerald-400">2,847</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded p-2">
              <div className="text-[10px] text-[#64748B]">P99 Latency</div>
              <div className="text-sm font-bold text-[#38BDF8]">23ms</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded p-2">
              <div className="text-[10px] text-[#64748B]">Error Rate</div>
              <div className="text-sm font-bold text-emerald-400">0.01%</div>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.04] rounded p-2 h-16 flex items-end gap-[3px]">
            {[40,55,35,65,50,70,45,80,60,75,55,85,65,70,90,72,88,78,92,85].map((h, i) => (
              <div key={i} className="flex-1 bg-[#38BDF8]/30 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "ops") {
    return (
      <div className="bg-[#060d1f] rounded-lg border border-white/[0.08] overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.07] bg-white/[0.03]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
            <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
            <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
          </div>
          <div className="flex-1 mx-3 h-4 bg-white/[0.04] rounded text-[10px] text-[#64748B] flex items-center px-2 font-mono">
            ops.internal/workflows
          </div>
        </div>
        <div className="p-3 space-y-2">
          {[
            { name: "Invoice Processing", status: "Active", color: "bg-emerald-400" },
            { name: "Client Onboarding",  status: "Active", color: "bg-emerald-400" },
            { name: "Report Generation",  status: "Queued", color: "bg-amber-400" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded px-3 py-2">
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span className="text-xs text-[#CBD5E1]">{item.name}</span>
              </div>
              <span className="text-[10px] text-[#64748B]">{item.status}</span>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded p-2">
              <div className="text-[10px] text-[#64748B]">Tasks Today</div>
              <div className="text-sm font-bold text-[#F8FAFC]">142</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded p-2">
              <div className="text-[10px] text-[#64748B]">Automation Rate</div>
              <div className="text-sm font-bold text-emerald-400">87%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // cloud variant
  return (
    <div className="bg-[#060d1f] rounded-lg border border-white/[0.08] overflow-hidden font-mono">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.07] bg-white/[0.03]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
          <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
          <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
        </div>
        <span className="ml-2 text-[10px] text-[#64748B]">deploy — pipeline</span>
      </div>
      <div className="p-3 text-[11px] leading-relaxed space-y-1">
        <div className="text-[#64748B]"><span className="text-emerald-400">✓</span> Build — 14s</div>
        <div className="text-[#64748B]"><span className="text-emerald-400">✓</span> Tests — 247 passed</div>
        <div className="text-[#64748B]"><span className="text-emerald-400">✓</span> Security scan — 0 vulnerabilities</div>
        <div className="text-[#64748B]"><span className="text-emerald-400">✓</span> Deploy staging — healthy</div>
        <div className="text-[#64748B]"><span className="text-emerald-400">✓</span> Deploy production — healthy</div>
        <div className="mt-2 text-emerald-400 font-bold text-xs">Pipeline complete — 2m 41s</div>
      </div>
    </div>
  );
}
