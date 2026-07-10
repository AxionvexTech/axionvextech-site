"use client";

import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { homepageCopy } from "@/content/homepage";

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function InteractiveArchitecture() {
  const layers = homepageCopy.architecture.layers;
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );
  const listId = useId();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % layers.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [reduced, layers.length]);

  const current = layers.find((l) => l.id === selected) ?? layers[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <ol id={listId} className="space-y-2" aria-label="System architecture layers">
        {layers.map((layer, index) => {
          const isActive = selected ? selected === layer.id : index === active;
          const isIsolated = selected ? selected === layer.id : true;
          return (
            <li key={layer.id}>
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition ${
                  isActive
                    ? "border-cyan/50 bg-white/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-300"
                } ${selected && !isIsolated ? "opacity-35" : "opacity-100"}`}
                onMouseEnter={() => setSelected(layer.id)}
                onMouseLeave={() => setSelected(null)}
                onFocus={() => setSelected(layer.id)}
                onBlur={() => setSelected(null)}
                onClick={() => setSelected((v) => (v === layer.id ? null : layer.id))}
                aria-pressed={selected === layer.id}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-cyan/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium md:text-base">{layer.title}</span>
                </span>
                {index < layers.length - 1 ? (
                  <span aria-hidden className="font-mono text-[10px] text-slate-300/60">
                    ↓
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>

      <aside className="surface-card-dark p-6" aria-live="polite">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-cyan">
          Layer detail
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">{current.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{current.detail}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-amber">
              Fallback branch
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Low confidence or tool failure routes to a safe default or human queue.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-violet">
              Escalation branch
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Policy or permission conflicts escalate to a named owner with full context.
            </p>
          </div>
        </div>
        <p className="mt-5 text-xs text-slate-300/80">
          Technical demonstration · click or focus a layer for details
        </p>
      </aside>
    </div>
  );
}
