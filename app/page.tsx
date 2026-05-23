"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechStackMarquee from "./components/TechStackMarquee";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AxionvexTech",
      url: "https://axionvextech.com",
      logo: "https://axionvextech.com/logo.png",
      description:
        "AI-powered software engineering agency building production systems, workflow automation, and embedded delivery for SaaS and operations-heavy teams.",
      sameAs: [
        "https://www.linkedin.com/company/axionvextech",
        "https://twitter.com/axionvextech",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "manager@axionvextech.com",
      },
    },
    {
      "@type": "WebSite",
      url: "https://axionvextech.com",
      name: "AxionvexTech",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What kinds of teams does AxionvexTech work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work primarily with SaaS teams, operations-heavy companies, and founders who need senior technical execution.",
          },
        },
        {
          "@type": "Question",
          name: "What does AI-powered mean in practice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build AI workflows that are monitored, reviewed, and integrated into production operations — RAG pipelines, internal copilots, reporting automation, and approval workflows.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work as a dedicated pod or as an extension of an existing team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both. We scope each engagement based on what the team needs.",
          },
        },
        {
          "@type": "Question",
          name: "How do projects start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Projects start with a technical scoping call where we map the work, define the delivery model, and agree on scope and timeline.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle documentation and handoffs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Documentation is part of delivery, not an afterthought. We maintain decision logs, system diagrams, and handoff notes throughout the engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How is security handled in AI workflow automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI workflows include access controls, approval steps, and human-review checkpoints. We do not build systems that process sensitive data without explicit scoping and review.",
          },
        },
      ],
    },
  ],
};

const activityFeed = [
  { date: "May 2026", tag: "Build",   text: "Shipped AI reporting workflow with structured approval layer for SaaS ops client." },
  { date: "May 2026", tag: "Ops",     text: "Expanded embedded engineering pod capacity for Q2 client engagements." },
  { date: "Apr 2026", tag: "Insight", text: "Published updated AI engineering standards covering evals, guardrails, and monitoring." },
  { date: "Apr 2026", tag: "Build",   text: "Completed platform modernization for fintech team — release cadence up, incident rate down." },
  { date: "Mar 2026", tag: "Hiring",  text: "Added two senior engineering tracks to the delivery network." },
  { date: "Mar 2026", tag: "Ops",     text: "Updated internal delivery documentation and sprint accountability standards." },
];

const tagColors: Record<string, string> = {
  Build:   "text-cyan-400 border-cyan-400/25 bg-cyan-400/8",
  Ops:     "text-violet-400 border-violet-400/25 bg-violet-400/8",
  Insight: "text-blue-400 border-blue-400/25 bg-blue-400/8",
  Hiring:  "text-emerald-400 border-emerald-400/25 bg-emerald-400/8",
};

const faqs = [
  {
    q: "What kinds of teams does AxionvexTech work with?",
    a: "SaaS teams, operations-heavy companies, and founders who need senior technical execution. Our clients typically need reliable delivery, AI workflow implementation, or embedded engineering support.",
  },
  {
    q: "What does AI-powered mean in practice?",
    a: "We build AI workflows that are monitored, reviewed, and integrated into production operations — RAG pipelines, internal copilots, reporting automation, and approval workflows tied to real systems.",
  },
  {
    q: "Do you work as a dedicated pod or as an extension of our team?",
    a: "Both. We scope each engagement based on what the team needs. Some clients bring us in as a focused delivery pod. Others embed one or two senior engineers alongside an existing team.",
  },
  {
    q: "How do projects start?",
    a: "With a technical scoping call where we map the work, define the delivery model, and agree on scope. We do not start build work until there is a shared plan.",
  },
  {
    q: "How do you handle documentation and handoffs?",
    a: "Documentation is part of delivery, not an afterthought. We maintain decision logs, system diagrams, and handoff notes so clients own what was built.",
  },
  {
    q: "How is security handled in AI workflow automation?",
    a: "AI workflows include access controls, approval steps, and human-review checkpoints. We do not build systems that process sensitive data without explicit scoping and review.",
  },
];

const services = [
  {
    icon: "⚡",
    tag: "Core",
    title: "AI Engineering & Agents",
    body: "Build copilots, internal assistants, and workflow automations that connect to real data, real approvals, and real operations.",
    points: [
      "RAG pipelines and internal knowledge systems",
      "Monitored AI workflows with guardrails and evals",
      "AI-assisted reporting and ops automation",
    ],
  },
  {
    icon: "🏗",
    tag: "Core",
    title: "Product Engineering",
    body: "Senior engineers building SaaS platforms, internal tooling, and full-stack systems from MVP through production scale.",
    points: [
      "React, Next.js, Node.js, Python full-stack",
      "MVP-to-production ownership with CI quality gates",
      "Scalable architecture and documented delivery",
    ],
  },
  {
    icon: "☁️",
    tag: "Infrastructure",
    title: "Cloud & Reliability",
    body: "Production cloud infrastructure, CI/CD, observability, and reliability operations for software that cannot afford unstable releases.",
    points: [
      "AWS architecture and deployment automation",
      "Monitoring, alerting, and incident readiness",
      "Performance, scaling, and environment parity",
    ],
  },
  {
    icon: "🔗",
    tag: "Embedded",
    title: "Embedded Delivery Teams",
    body: "Add senior engineers or a focused delivery pod to accelerate output without losing documentation, accountability, or code quality.",
    points: [
      "Senior embedded engineering with direct access",
      "Documentation and handoff standards from day one",
      "Long-term collaboration and capacity scaling",
    ],
  },
];

const deliverySteps = [
  { num: "01", title: "Discover",          body: "We map the problem, scope the work, and define what done looks like." },
  { num: "02", title: "Architect",         body: "Architecture, stack decisions, and delivery timeline documented before build starts." },
  { num: "03", title: "Build",             body: "Senior engineers ship production code with CI gates and sprint accountability." },
  { num: "04", title: "Ship & Stabilize",  body: "Monitored releases with observability, incident readiness, and handoff docs." },
  { num: "05", title: "Scale & Support",   body: "Ongoing embedded support or capacity scaling based on what the team needs next." },
];

const trustItems = [
  "Direct engineer communication — no account manager layer",
  "Senior-led delivery with production ownership",
  "Documented decisions, architecture, and handoffs",
  "Structured remote operations with async discipline",
  "AI workflows with monitoring, evals, and human checkpoints",
  "Transparent scope, timelines, and accountability",
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header page="home" />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-violet-500/[0.04] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="avx-fade-in-up">
              <div className="section-label">
                <span className="live-dot" />
                AI-Powered Software Engineering Agency
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-black leading-[1.05] text-white mb-5 tracking-tight">
                AI-powered engineering for{" "}
                <span className="gradient-text">
                  business-critical systems.
                </span>
              </h1>

              <p className="text-lg text-white mb-3 max-w-xl leading-relaxed">
                We help teams build, automate, and stabilize modern software
                with practical AI, senior engineering, and structured delivery.
              </p>
              <p className="text-sm text-white/80 mb-10 max-w-xl">
                Built for real workflows. Monitored releases. Accountable execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a href="#contact" className="btn-primary">
                  Book a Technical Scoping Call
                </a>
                <Link href="/work" className="btn-ghost">
                  View Recent Work
                </Link>
              </div>

              {/* Status chips */}
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Workflows",
                  "Product Engineering",
                  "Cloud Reliability",
                  "Automation Systems",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04] backdrop-blur-sm"
                  >
                    <span className="live-dot" />
                    <span className="text-xs text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — animated dashboard */}
            <div className="avx-fade-in-up-delay">
              <div className="glass-card overflow-hidden">
                {/* Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex-1 mx-2 h-5 bg-white/[0.05] rounded text-[10px] text-white/80 flex items-center px-2 font-mono">
                    delivery.axionvex.com/ops
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="live-dot" />
                    <span className="text-[10px] text-emerald-400 font-semibold">LIVE</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 border-b border-white/[0.07]">
                  {[
                    { label: "Active Tracks", value: "4",     color: "text-cyan-400" },
                    { label: "Deploys",       value: "14",    color: "text-emerald-400" },
                    { label: "Uptime",        value: "99.8%", color: "text-emerald-400" },
                  ].map((m, i) => (
                    <div key={m.label} className={`px-4 py-3 ${i < 2 ? "border-r border-white/[0.07]" : ""}`}>
                      <div className="text-[10px] text-white/60 mb-0.5">{m.label}</div>
                      <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Workstreams */}
                <div className="p-4 space-y-3">
                  {[
                    { name: "AI Reporting Pipeline",  pct: 82,  status: "RUNNING", bar: "bg-cyan-400",   badge: "text-cyan-400 bg-cyan-400/10"    },
                    { name: "Platform Modernization", pct: 100, status: "SHIPPED", bar: "bg-emerald-400", badge: "text-emerald-400 bg-emerald-400/10" },
                    { name: "API Integration Layer",  pct: 45,  status: "BUILD",   bar: "bg-blue-400",   badge: "text-blue-400 bg-blue-400/10"    },
                    { name: "Infra Hardening Sprint", pct: 70,  status: "REVIEW",  bar: "bg-violet-400", badge: "text-violet-400 bg-violet-400/10" },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] text-white">{item.name}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${item.badge}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${item.bar} opacity-75`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Log */}
                <div className="border-t border-white/[0.07] px-4 py-3 space-y-1.5">
                  {[
                    "14:23 — Deploy to production: success",
                    "13:45 — Test suite: 247/247 passed",
                    "12:30 — AI eval checkpoint: passed",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[10px]">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-white/80 font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROOF METRICS ─────────────────────────────────────── */}
      <section className="py-10 border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 avx-fade-in-up">
            {[
              { value: "20+",  label: "Production releases supported" },
              { value: "15+",  label: "AI workflows deployed" },
              { value: "40%",  label: "Avg. cycle time improvement" },
              { value: "4",    label: "Countries, active engineers" },
              { value: "200+", label: "Candidate evaluations completed" },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-xl px-4 py-4 text-center">
                <p className="text-2xl font-black gradient-text-cyan mb-1">{m.value}</p>
                <p className="text-[11px] text-white/80 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE SOLVE ─────────────────────────────────────── */}
      <section id="solve" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14 avx-fade-in-up">
            <div className="section-label">What We Solve</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Turn operational friction into{" "}
              <span className="gradient-text">working systems.</span>
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Every engagement starts with a real problem. We build software
              that removes the friction, then makes it measurable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                problem: "Manual Operations",
                desc: "Teams spending hours on repetitive work that should run automatically.",
                fix: "Automated workflows with monitoring, guardrails, and human checkpoints.",
              },
              {
                problem: "Slow Product Delivery",
                desc: "Releases take weeks. Regressions eat gains. Team confidence drops.",
                fix: "CI quality gates, typed APIs, and embedded engineering cadence.",
              },
              {
                problem: "Unstable Systems",
                desc: "Production incidents, unclear root causes, and no observability.",
                fix: "Structured logging, alerts, deployment controls, and incident readiness.",
              },
              {
                problem: "Disconnected Tools",
                desc: "Data scattered across platforms. No single source of truth.",
                fix: "Integration layers, internal dashboards, and unified data flows.",
              },
              {
                problem: "Poor Internal Visibility",
                desc: "Leadership can&apos;t see what&apos;s building, breaking, or why.",
                fix: "Status tracking, decision logs, and AI-assisted reporting pipelines.",
              },
              {
                problem: "Delivery Capacity Gaps",
                desc: "Can&apos;t find senior engineers fast enough. Existing team is overloaded.",
                fix: "Embedded engineering pods that move fast and document the work.",
              },
            ].map((item) => (
              <div key={item.problem} className="glass-card p-6 avx-fade-in-up">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
                  <p className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                    Problem
                  </p>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.problem}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <p className="text-[10px] font-bold text-cyan-400/80 uppercase tracking-wider">
                      Solution
                    </p>
                  </div>
                  <p className="text-white text-sm leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────── */}
      <section id="services" className="py-24 scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14 avx-fade-in-up">
            <div className="section-label">Services</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Four capabilities. One delivery model.
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Product engineering depth combined with AI workflow execution and
              operationally mature remote delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.title} className="glass-card p-7 avx-fade-in-up">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center text-lg">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest border border-white/[0.07] rounded px-2 py-0.5">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white text-sm leading-relaxed mb-5">{service.body}</p>
                <ul className="space-y-2">
                  {service.points.map((pt) => (
                    <li key={pt} className="text-white/80 text-sm flex items-start gap-2">
                      <span className="text-cyan-500 mt-0.5 flex-shrink-0">→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY PREVIEW ────────────────────────────────── */}
      <section id="work" className="py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 avx-fade-in-up">
            <div className="max-w-2xl">
              <div className="section-label">Proof of Execution</div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                Case studies focused on decisions,{" "}
                <span className="gradient-text">implementation, and impact.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors flex-shrink-0 flex items-center gap-1"
            >
              View all case studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              {
                title: "B2B SaaS Platform Modernization",
                category: "Product Engineering",
                problem: "Fragmented codebase slowed releases and increased regressions.",
                built: "Rebuilt core modules with typed APIs, CI quality gates, and deployment controls.",
                stack: "Next.js · Node.js · PostgreSQL · AWS",
                outcome: "Release cadence improved significantly. Regression rate dropped. Team owns the system with full documentation.",
                accentColor: "border-cyan-500/25",
              },
              {
                title: "AI Workflow Automation System",
                category: "AI Engineering",
                problem: "Operations teams manually compiled weekly reports over 2–3 days.",
                built: "Shipped AI-assisted data summarization with approval workflows and audit logging.",
                stack: "Python · OpenAI · Supabase · Vercel",
                outcome: "Reporting cycle moved from 2–3 days to same-day. Errors dropped. Team redirected hours to decision-making.",
                accentColor: "border-violet-500/25",
              },
              {
                title: "Recruiting Pipeline Infrastructure",
                category: "Delivery Operations",
                problem: "Candidate routing and scheduling created bottlenecks delaying hiring decisions.",
                built: "Built role-aware screening pipeline with structured handoffs, status tracking, and coordination automation.",
                stack: "Next.js · Node.js · PostgreSQL · Webhooks",
                outcome: "Screening time cut in half. Recruiter accountability is visible end-to-end.",
                accentColor: "border-emerald-500/25",
              },
            ].map((study) => (
              <div
                key={study.title}
                className={`glass-card p-6 avx-fade-in-up flex flex-col border ${study.accentColor}`}
              >
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-cyan-400 mb-3">
                  {study.category}
                </span>
                <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                  {study.title}
                </h3>
                <div className="space-y-2 mb-4 flex-1">
                  <p className="text-white/80 text-xs leading-relaxed">
                    <span className="text-white font-medium">Problem: </span>
                    {study.problem}
                  </p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    <span className="text-white font-medium">Built: </span>
                    {study.built}
                  </p>
                  <p className="text-white/80 text-xs">
                    <span className="text-white font-medium">Stack: </span>
                    {study.stack}
                  </p>
                </div>
                <div className="border-t border-white/[0.06] pt-3">
                  <p className="text-white text-xs leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 avx-fade-in-up">
            <Link href="/work" className="btn-ghost !py-2.5 !px-6 !text-sm">
              Explore all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DELIVERY PIPELINE ─────────────────────────────────── */}
      <section id="process" className="py-24 scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.025] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14 avx-fade-in-up">
            <div className="section-label">How We Deliver</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              A structured delivery model,{" "}
              <span className="gradient-text">not a black box.</span>
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Every engagement follows a documented process with clear owners,
              checkpoints, and handoffs.
            </p>
          </div>

          {/* Desktop pipeline */}
          <div className="hidden lg:block avx-fade-in-up">
            <div className="relative mb-12">
              <div className="absolute top-6 left-[9%] right-[9%] avx-pipeline-line" />
              <div className="grid grid-cols-5 gap-3">
                {deliverySteps.map((step, i) => (
                  <div key={step.num} className="flex flex-col items-center text-center px-2">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm mb-4 z-10 relative bg-[#020617] transition-colors ${
                        i === 0
                          ? "border-cyan-500 text-cyan-400"
                          : "border-white/20 text-white/80"
                      }`}
                    >
                      {step.num}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile pipeline */}
          <div className="lg:hidden space-y-3 avx-fade-in-up">
            {deliverySteps.map((step) => (
              <div key={step.num} className="glass-card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-full border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 text-sm font-bold">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-white/80 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK MARQUEE ────────────────────────────────── */}
      <section className="py-16 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 mb-8 avx-fade-in-up">
          <p className="text-center text-xs font-bold tracking-[0.22em] uppercase text-white/60">
            Technologies we actively build with
          </p>
        </div>
        <TechStackMarquee />
      </section>

      {/* ─── RECENT ACTIVITY ───────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 avx-fade-in-up">
            <div className="section-label">Recent Activity</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              An operating company,{" "}
              <span className="gradient-text">not a static brochure.</span>
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Regular updates across engineering delivery, operations, and team
              growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 avx-fade-in-up">
            {activityFeed.map((item) => (
              <div
                key={item.text}
                className="glass-card p-5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold tracking-[0.15em] uppercase border rounded px-2 py-0.5 ${
                      tagColors[item.tag] ?? "text-white border-white/10 bg-white/4"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-[11px] text-white/60">{item.date}</span>
                </div>
                <p className="text-white text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DELIVERY STANDARDS ────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.025] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 avx-fade-in-up">
            <div className="section-label">Delivery Standards</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Operational trust built through clarity,{" "}
              <span className="gradient-text">ownership, and systems.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 avx-fade-in-up">
            {trustItems.map((item) => (
              <div key={item} className="glass-card px-5 py-4 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                <p className="text-white text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 avx-fade-in-up">
            <div className="section-label">FAQ</div>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Common questions from buyers.
            </h2>
          </div>
          <div className="space-y-3 avx-fade-in-up">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="text-white font-semibold text-sm">{faq.q}</span>
                  <span
                    className={`text-white/80 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-white/[0.06] pt-4">
                    <p className="text-white text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ───────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-violet-500/[0.06] to-transparent pointer-events-none" />
        <div className="absolute inset-0 border-y border-white/[0.06] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/[0.08] to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center avx-fade-in-up">
          <div className="section-label mx-auto w-fit mb-6">Get Started</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Bring us the technical bottleneck.{" "}
            <span className="gradient-text">
              We&apos;ll help turn it into a working system.
            </span>
          </h2>
          <p className="text-white text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Need senior engineering support, AI automation, or structured
            delivery capacity? Let&apos;s map the work and define a practical
            path to ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
              className="btn-primary"
            >
              Book a Technical Scoping Call
            </a>
            <Link href="/work" className="btn-ghost">
              See Recent Work
            </Link>
          </div>
          <p className="mt-6 text-white/60 text-sm">
            manager@axionvextech.com · Typically responds within 24 hours
          </p>
        </div>
      </section>

      <Footer page="home" />
    </div>
  );
}
