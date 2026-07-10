"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

const nodes = [
  {
    id: "request",
    label: "Business request",
    detail: "Intake from email, ticket, form, or product event.",
    x: 48,
    y: 36,
  },
  {
    id: "context",
    label: "Context retrieval",
    detail: "Assemble approved account, policy, and history context.",
    x: 168,
    y: 36,
  },
  {
    id: "reason",
    label: "AI reasoning",
    detail: "Model routes and reasons over grounded evidence.",
    x: 288,
    y: 36,
  },
  {
    id: "tools",
    label: "Tool execution",
    detail: "Permissioned API and system actions.",
    x: 408,
    y: 36,
  },
  {
    id: "approval",
    label: "Human approval",
    detail: "Amber gate for high-consequence decisions.",
    x: 168,
    y: 118,
    approval: true,
  },
  {
    id: "eval",
    label: "Evaluation",
    detail: "Quality, policy, and confidence checks.",
    x: 288,
    y: 118,
  },
  {
    id: "update",
    label: "Business system",
    detail: "Approved outcome updates CRM or ops systems.",
    x: 408,
    y: 118,
  },
  {
    id: "audit",
    label: "Audit & monitoring",
    detail: "Immutable event log and operational metrics.",
    x: 288,
    y: 200,
  },
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

export default function HeroWorkflowControlPlane() {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );
  const [active, setActive] = useState(reduced ? nodes.length - 1 : 0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
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
    if (reduced || paused || !visible) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % nodes.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, [reduced, paused, visible]);

  const auditEvents = [
    "Request received",
    "Context assembled",
    "Model routed",
    "Tool call authorized",
    active >= 4 ? "Approval pending" : "Awaiting gate",
    active >= 5 ? "Eval passed" : "Eval queued",
    active >= 6 ? "System updated" : "Update held",
    active >= 7 ? "Audit event recorded" : "Monitoring idle",
  ];

  return (
    <div
      ref={rootRef}
      className="workflow-glass relative overflow-hidden p-4 sm:p-5"
      role="img"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setHover(null);
      }}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p id={labelId} className="font-mono text-[11px] uppercase tracking-[0.08em] text-cyan">
            Example production workflow
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Reference architecture · not live client data
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] text-amber">
            Human approval required
          </span>
          <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] text-cyan">
            Evaluation enabled
          </span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy/60 p-2">
          <svg viewBox="0 0 480 250" className="h-auto w-full" aria-hidden>
            {edges.map(([from, to], i) => {
              const a = nodes[from];
              const b = nodes[to];
              const lit = reduced || active >= to;
              return (
                <g key={`${from}-${to}`}>
                  <line
                    x1={a.x + 36}
                    y1={a.y + 18}
                    x2={b.x + 36}
                    y2={b.y + 18}
                    stroke={lit ? "rgba(91,124,255,0.75)" : "rgba(255,255,255,0.12)"}
                    strokeWidth="1.5"
                  />
                  {!reduced && visible && active === to ? (
                    <circle r="3.5" fill="#1aa9c8">
                      <animateMotion
                        dur="1.1s"
                        repeatCount="1"
                        path={`M${a.x + 36},${a.y + 18} L${b.x + 36},${b.y + 18}`}
                      />
                    </circle>
                  ) : null}
                  <title>{`Path ${i + 1}`}</title>
                </g>
              );
            })}
            {nodes.map((node, index) => {
              const isActive = reduced || index <= active;
              const isCurrent = !reduced && index === active;
              const isApproval = "approval" in node && node.approval;
              const fill = isApproval
                ? isCurrent
                  ? "rgba(217,154,50,0.35)"
                  : "rgba(217,154,50,0.12)"
                : isCurrent
                  ? "rgba(67,97,238,0.35)"
                  : isActive
                    ? "rgba(26,169,200,0.14)"
                    : "rgba(255,255,255,0.04)";
              const stroke = isApproval
                ? "#d99a32"
                : isCurrent
                  ? "#5b7cff"
                  : isActive
                    ? "#1aa9c8"
                    : "rgba(255,255,255,0.16)";
              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setHover(node.id)}
                  onFocus={() => setHover(node.id)}
                  onMouseLeave={() => setHover(null)}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`${node.label}. ${node.detail}`}
                >
                  <rect
                    x={node.x}
                    y={node.y}
                    width="92"
                    height="42"
                    rx="10"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1.5"
                    className={isCurrent ? "diagram-node-active" : undefined}
                  />
                  <text
                    x={node.x + 46}
                    y={node.y + 25}
                    textAnchor="middle"
                    fill="#f4f7fb"
                    fontSize="9"
                    fontFamily="ui-monospace, monospace"
                  >
                    {node.label.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </svg>
          {hover ? (
            <div className="pointer-events-none absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-navy/90 px-3 py-2 text-xs text-slate-300 backdrop-blur">
              <span className="font-medium text-white">
                {nodes.find((n) => n.id === hover)?.label}
              </span>
              {" — "}
              {nodes.find((n) => n.id === hover)?.detail}
            </div>
          ) : null}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-slate-300">
            Audit event log
          </p>
          <ul className="mt-3 space-y-2">
            {auditEvents.map((event, i) => {
              const done = reduced || i <= active;
              return (
                <li
                  key={event}
                  className={`flex items-center gap-2 font-mono text-[11px] ${
                    done ? "text-slate-200" : "text-slate-300/45"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      done ? (i === 4 && active === 4 ? "bg-amber" : "bg-cyan") : "bg-white/20"
                    }`}
                  />
                  {event}
                </li>
              );
            })}
          </ul>
          <p className="mt-4 font-mono text-[10px] text-slate-300/80">
            {reduced
              ? "Static resolved state (reduced motion)"
              : paused
                ? "Paused on hover"
                : "Looping demonstration"}
          </p>
        </div>
      </div>

      <p className="sr-only">
        Accessible summary: a business request moves through context retrieval, AI
        reasoning, tool execution, human approval, evaluation, business system
        update, and audit monitoring. This is an illustrative reference workflow,
        not live operational data.
      </p>
    </div>
  );
}
