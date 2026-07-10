"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

const nodes = [
  { id: "request", label: "Request", x: 18, y: 28 },
  { id: "context", label: "Context", x: 118, y: 28 },
  { id: "reason", label: "Reason", x: 218, y: 28 },
  { id: "tools", label: "Tools", x: 318, y: 28 },
  { id: "approval", label: "Approve", x: 118, y: 98, approval: true },
  { id: "eval", label: "Eval", x: 218, y: 98 },
  { id: "update", label: "Update", x: 318, y: 98 },
  { id: "audit", label: "Audit", x: 218, y: 168 },
] as const;

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];

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

/** Compact glass workflow overlay for the redesigned hero. */
export default function HeroWorkflowOverlay() {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );
  const [active, setActive] = useState(reduced ? nodes.length - 1 : 0);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !visible) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % nodes.length);
    }, 1200);
    return () => window.clearInterval(id);
  }, [reduced, visible]);

  return (
    <div
      ref={rootRef}
      className="rounded-[22px] border border-white/20 bg-navy/70 p-3 shadow-[var(--shadow-medium)] backdrop-blur-xl sm:p-4"
      role="img"
      aria-labelledby={labelId}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <p id={labelId} className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyan">
          Example production workflow
        </p>
        <span className="rounded-full border border-amber/40 bg-amber/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-amber">
          Approval gate
        </span>
      </div>
      <svg viewBox="0 0 420 220" className="h-auto w-full" aria-hidden>
        {edges.map(([from, to]) => {
          const a = nodes[from];
          const b = nodes[to];
          const lit = reduced || active >= to;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x + 34}
              y1={a.y + 16}
              x2={b.x + 34}
              y2={b.y + 16}
              stroke={lit ? "rgba(91,124,255,0.8)" : "rgba(255,255,255,0.12)"}
              strokeWidth="1.5"
            />
          );
        })}
        {nodes.map((node, index) => {
          const isActive = reduced || index <= active;
          const isCurrent = !reduced && index === active;
          const isApproval = "approval" in node && node.approval;
          return (
            <g key={node.id}>
              <rect
                x={node.x}
                y={node.y}
                width="78"
                height="34"
                rx="10"
                fill={
                  isApproval
                    ? "rgba(217,154,50,0.28)"
                    : isCurrent
                      ? "rgba(67,97,238,0.35)"
                      : isActive
                        ? "rgba(26,169,200,0.16)"
                        : "rgba(255,255,255,0.05)"
                }
                stroke={isApproval ? "#d99a32" : isCurrent ? "#5b7cff" : "#1aa9c8"}
                strokeWidth="1.4"
                className={isCurrent ? "diagram-node-active" : undefined}
              />
              <text
                x={node.x + 39}
                y={node.y + 21}
                textAnchor="middle"
                fill="#f4f7fb"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-2 font-mono text-[10px] text-slate-300">
        Reference architecture · not live client data
      </p>
    </div>
  );
}
