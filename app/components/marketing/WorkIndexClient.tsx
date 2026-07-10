"use client";

import { useState } from "react";
import Link from "next/link";
import { ProofLabel } from "@/app/components/content/ProofLabel";
import { caseStudies, workFilters } from "@/content/case-studies";
import { trackEvent } from "@/app/lib/analytics";

export default function WorkIndexClient() {
  const [active, setActive] = useState<string>("all");

  const filtered = caseStudies.filter(
    (study) => active === "all" || study.filter === active
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {workFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActive(filter.id)}
            className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
              active === filter.id
                ? "border-ink-950 bg-ink-950 text-white"
                : "border-[var(--border-light)] text-slate-600 hover:border-ink-950/20"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((study) => (
          <article key={study.slug} className="surface-card flex flex-col p-6">
            <ProofLabel type={study.proofType} />
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-slate-600">
              {study.industry || study.businessType || "Implementation"}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-ink-950">{study.title}</h2>
            <p className="mt-3 flex-1 text-sm text-[var(--text-body)]">{study.summary}</p>
            <p className="mt-3 font-mono text-[11px] text-slate-600">
              {study.architecture.slice(0, 3).join(" · ")}
            </p>
            <p className="mt-2 text-sm text-ink-950">
              Outcome:{" "}
              {study.results?.[0]?.status === "in_progress"
                ? "Measurement in progress"
                : study.results?.[0]?.statement || "See implementation notes"}
            </p>
            <Link
              href={`/work/${study.slug}`}
              className="mt-4 text-sm font-semibold underline underline-offset-4"
              onClick={() => trackEvent("case_study_opened", { slug: study.slug })}
            >
              Read the implementation
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
