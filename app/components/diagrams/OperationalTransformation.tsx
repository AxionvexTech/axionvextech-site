"use client";

import { homepageCopy } from "@/content/homepage";

export default function OperationalTransformation() {
  const { before, after, outcomes } = homepageCopy.transformation;

  return (
    <div className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[18px] border border-dashed border-border-strong bg-canvas-warm p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
            Before
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {before.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink-secondary shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink-muted">
            Fragmented tools, repeated copying, and delayed approvals.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[18px] border border-border bg-gradient-to-br from-surface-blue via-surface to-surface-soft p-6 shadow-[var(--shadow-medium)] md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue">
            After
          </p>
          <ol className="mt-5 space-y-3">
            {after.map((item, i) => (
              <li key={item} className="flex items-center gap-3 text-sm text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink font-mono text-[10px] text-white">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {outcomes.map((item) => (
          <article key={item.title}>
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-[var(--text-body)]">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
