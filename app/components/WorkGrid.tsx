"use client";

import { useState } from "react";
import CaseStudyCard from "./CaseStudyCard";

const FILTERS = ["All", "AI Automation", "Web Apps", "Internal Tools", "Cloud"] as const;
type Filter = (typeof FILTERS)[number];

const studies = [
  {
    slug: "ai-workflow-system",
    category: "AI Automation",
    title: "AI Reporting & Workflow System",
    summary:
      "Built AI-assisted data summarization with structured approval workflows and audit logging for a SaaS operations team. Reporting cycle moved from 2–3 days to same-day.",
    stack: ["Python", "OpenAI", "Supabase", "Vercel"],
    timeline: "8 weeks",
    mockup: "ops" as const,
    filterCategory: "AI Automation" as Filter,
    featured: true,
  },
  {
    slug: "payment-api-rebuild",
    category: "Fintech · Web App",
    title: "Payment API Rebuild",
    summary:
      "Redesigned a synchronous payment pipeline into event-driven architecture. Resolved failures under peak load, added retry logic, and built an audit trail for compliance.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe"],
    timeline: "10 weeks",
    mockup: "saas" as const,
    filterCategory: "Web Apps" as Filter,
    featured: false,
  },
  {
    slug: "internal-operations-platform",
    category: "Internal Tools",
    title: "Internal Operations Platform",
    summary:
      "Built a custom ops platform to replace spreadsheets and manual steps. Workflow automation, role-based access, and audit logging — designed around how the team actually works.",
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    timeline: "8 weeks",
    mockup: "ops" as const,
    filterCategory: "Internal Tools" as Filter,
    featured: false,
  },
  {
    slug: "backend-migration-cleanup",
    category: "Cloud & Infrastructure",
    title: "Backend Migration & System Cleanup",
    summary:
      "Took over a production backend with no observability and manual SSH deploys. Set up structured logging, container-based deploys, and proper environment parity.",
    stack: ["Docker", "AWS ECS", "Terraform", "CloudWatch", "Node.js"],
    timeline: "6 weeks",
    mockup: "cloud" as const,
    filterCategory: "Cloud" as Filter,
    featured: false,
  },
];

function ComingSoonCard({ label }: { label: string }) {
  return (
    <div className="glass-card flex flex-col items-center justify-center text-center p-10 min-h-[280px] border-dashed">
      <div className="w-10 h-10 rounded-full border border-white/[0.10] bg-white/[0.02] flex items-center justify-center mb-4">
        <svg
          className="w-5 h-5 text-[#94A3B8]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <p className="text-sm font-semibold text-[#CBD5E1] mb-1">{label}</p>
      <p className="text-xs text-[#64748B]">Case study in documentation review</p>
    </div>
  );
}

export default function WorkGrid() {
  const [active, setActive] = useState<Filter>("All");

  const featured = studies.find((s) => s.featured)!;
  const rest = studies.filter(
    (s) =>
      !s.featured &&
      (active === "All" || s.filterCategory === active)
  );

  const showFeatured = active === "All" || featured.filterCategory === active;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 avx-fade-in-up">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "bg-[#38BDF8]/15 text-cyan-300 border border-[#38BDF8]/30"
                  : "text-[#94A3B8] border border-white/[0.07] bg-white/[0.02] hover:text-[#F8FAFC] hover:border-white/[0.12]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Featured case study */}
        {showFeatured && (
          <div className="glass-card overflow-hidden mb-6 avx-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col">
                <div className="section-label mb-4">Featured Case Study</div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#38BDF8] mb-2">
                  {featured.category}
                </span>
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-3 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-[#CBD5E1] text-sm leading-relaxed mb-6 flex-1">
                  {featured.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-[#CBD5E1] border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a href={`/work/${featured.slug}`} className="btn-primary !py-2.5 !px-6 !text-sm self-start">
                  Read Case Study →
                </a>
              </div>
              <div className="p-6 border-t lg:border-t-0 lg:border-l border-white/[0.07] bg-white/[0.01] flex items-center">
                <div className="w-full">
                  {/* AI workflow diagram mockup */}
                  <div className="rounded-lg border border-white/[0.08] bg-[#060d1f] overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/[0.07] flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#F8FAFC]">AI Workflow — Ops Automation</span>
                      <div className="flex items-center gap-1.5">
                        <span className="live-dot" />
                        <span className="text-[10px] text-emerald-400">Running</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      {[
                        { step: "Data ingestion",     status: "✓", c: "text-emerald-400" },
                        { step: "AI summarization",   status: "✓", c: "text-emerald-400" },
                        { step: "Approval routing",   status: "✓", c: "text-emerald-400" },
                        { step: "Report generation",  status: "⟳", c: "text-[#38BDF8]" },
                        { step: "Distribution",       status: "○", c: "text-[#94A3B8]" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-center gap-3">
                          <span className={`text-xs font-mono w-4 flex-shrink-0 ${item.c}`}>{item.status}</span>
                          <span className="text-xs text-[#CBD5E1]">{item.step}</span>
                          {item.status === "⟳" && (
                            <span className="ml-auto text-[9px] text-[#38BDF8]/70 border border-[#38BDF8]/20 rounded px-1.5 py-0.5">
                              In progress
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-white/[0.07] px-4 py-2 flex items-center justify-between">
                      <span className="text-[10px] text-[#94A3B8]">Cycle time: same-day</span>
                      <span className="text-[10px] text-emerald-400">↓ 95% from baseline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Card grid */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 avx-fade-in-up">
            {rest.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
            {active === "All" && <ComingSoonCard label="More case studies coming soon" />}
          </div>
        )}

        {rest.length === 0 && !showFeatured && (
          <div className="text-center py-20">
            <p className="text-[#CBD5E1] text-sm">No case studies in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
