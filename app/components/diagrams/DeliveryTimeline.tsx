"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
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

export default function DeliveryTimeline() {
  const stages = homepageCopy.delivery.stages;
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );
  const [drawn, setDrawn] = useState(false);
  const visible = reduced || drawn;

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDrawn(true);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div ref={ref}>
      <div className="hidden md:block">
        <div className="relative mb-8 h-1 rounded-full bg-border">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue via-cyan to-blue-bright transition-all duration-1000"
            style={{ width: visible ? "100%" : "0%" }}
          />
        </div>
        <ol className="grid gap-4 md:grid-cols-5">
          {stages.map((stage, i) => (
            <li
              key={stage.title}
              className="transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0.35,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <p className="font-mono text-[11px] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{stage.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-secondary">
                {stage.outputs.map((o) => (
                  <li key={o}>· {o}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <ol className="space-y-5 md:hidden">
        {stages.map((stage, i) => (
          <li key={stage.title} className="border-l-2 border-blue/40 pl-4">
            <p className="font-mono text-[11px] text-ink-muted">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-ink">{stage.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-ink-secondary">
              {stage.outputs.map((o) => (
                <li key={o}>· {o}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
