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

export default function PrototypeToProduction() {
  const { prototype, production } = homepageCopy.recognition;
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );
  const [progress, setProgress] = useState(0);
  const shown = reduced ? 1 : progress;

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setProgress(1);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-2">
      <article className="surface-panel p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
          {prototype.title}
        </p>
        <ul className="mt-5 space-y-3">
          {prototype.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-ink-secondary transition-opacity duration-500"
              style={{ opacity: shown ? 0.45 : 1 }}
            >
              <span className="h-2 w-2 rounded-full bg-danger/70" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article
        className="relative overflow-hidden rounded-[18px] border border-border p-6 shadow-[var(--shadow-medium)] md:p-8"
        style={{
          background:
            shown > 0
              ? "linear-gradient(160deg, #edf5ff 0%, #ffffff 55%, #eef3f8 100%)"
              : "var(--surface)",
          transition: "background 700ms ease",
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue via-cyan to-success transition-opacity duration-700"
          style={{ opacity: shown }}
          aria-hidden
        />
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue">
          {production.title}
        </p>
        <ul className="mt-5 space-y-3">
          {production.items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 text-ink transition-all duration-500"
              style={{
                opacity: shown ? 1 : 0.35,
                transform: shown ? "translateX(0)" : "translateX(8px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
