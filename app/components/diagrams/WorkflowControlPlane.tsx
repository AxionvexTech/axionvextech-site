"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const stages = [
  {
    title: "Signals",
    items: ["Email", "Documents", "CRM", "Support"],
  },
  {
    title: "Orchestration",
    items: ["Rules", "Context", "Tools", "Retry"],
  },
  {
    title: "Intelligence",
    items: ["Route", "Retrieve", "Classify", "Generate"],
  },
  {
    title: "Control",
    items: ["Permissions", "Approval", "Policy", "Fallback"],
  },
  {
    title: "Action",
    items: ["CRM update", "Report", "Route case", "Audit"],
  },
];

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function WorkflowControlPlane() {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % stages.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div
      className="surface-card-dark overflow-hidden p-4 sm:p-5"
      role="img"
      aria-label="Reference workflow control plane showing signals flowing through orchestration, intelligence, control, and approved business actions with an observability strip."
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-signal-mint">
            Reference workflow control plane
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Conceptual interface · not a live product console
          </p>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-slate-300">
          OBSERVABLE
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-5">
        {stages.map((stage, index) => {
          const isActive = reduced ? true : index === active;
          return (
            <div
              key={stage.title}
              className={`rounded-[14px] border p-3 transition ${
                isActive
                  ? "border-signal-mint/40 bg-ink-800 diagram-node-active"
                  : "border-white/10 bg-ink-950/60"
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-300">
                {String(index + 1).padStart(2, "0")} · {stage.title}
              </p>
              <ul className="mt-3 space-y-1.5">
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-white/[0.03] px-2 py-1.5 text-xs text-white/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "Eval pass", value: "—", note: "Measured in pilot" },
          { label: "Exceptions", value: "Queue", note: "Human review" },
          { label: "Latency", value: "Tracked", note: "Per stage" },
          { label: "Cost", value: "Bounded", note: "Per workflow" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-white/10 bg-ink-950/70 px-3 py-2"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-300">
              {metric.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
            <p className="text-[11px] text-slate-300/80">{metric.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
