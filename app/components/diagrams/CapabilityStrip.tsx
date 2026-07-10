"use client";

import { capabilitySignals } from "@/content/navigation";

export default function CapabilityStrip() {
  return (
    <div className="border-y border-[var(--border)] bg-surface/80">
      <div className="container-avx py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 md:justify-between">
          {capabilitySignals.map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              {i > 0 ? (
                <span
                  aria-hidden
                  className="hidden h-1 w-1 rounded-full bg-blue/50 strip-pulse md:inline-block"
                  style={{ animationDelay: `${i * 180}ms` }}
                />
              ) : null}
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted md:text-xs">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
