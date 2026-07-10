"use client";

import { homepageCopy } from "@/content/homepage";

export default function StandardsDashboard() {
  const { metrics, areas } = homepageCopy.standards;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="surface-card-dark overflow-hidden p-5 md:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-cyan">
              Example evaluation view
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Reference monitoring interface · illustrative workflow controls
            </p>
          </div>
          <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] text-slate-300">
            Not live client data
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-300">
                {metric.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-[11px] text-cyan/80">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-cyan">
          Control areas
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {areas.map((area) => (
            <li
              key={area}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
