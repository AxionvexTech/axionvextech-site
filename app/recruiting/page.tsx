"use client";

import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const roleCards = [
  {
    title: "Engineering",
    tag: "Technical",
    body: "Senior engineers who own delivery from planning through production support. Strong async communication and documentation discipline required.",
    role: "Software Engineer",
    signals: ["Production system ownership", "Async-first communication", "Code review & CI discipline"],
  },
  {
    title: "Recruiting & Talent Operations",
    tag: "Operations",
    body: "Recruiters and talent operators who run structured, well-documented pipelines. Reliability and clear communication are the core requirements.",
    role: "Recruiter / Talent Sourcer",
    signals: ["Pipeline documentation", "Candidate communication", "Process accountability"],
  },
  {
    title: "Client-Facing Technical Support",
    tag: "Client",
    body: "Technical leads who translate business priorities into executable engineering plans and support client communication with clarity.",
    role: "Client-Facing Technical Lead",
    signals: ["Technical communication", "Scope translation", "Client accountability"],
  },
  {
    title: "Platform & Account Operations",
    tag: "Delivery",
    body: "Operators who keep delivery systems, communication, and handoffs clean and reliable. Attention to process and documentation is essential.",
    role: "Delivery Coordinator",
    signals: ["Handoff discipline", "Process reliability", "Documentation quality"],
  },
];

const hiringSteps = [
  { num: "01", title: "Apply",               body: "Submit your background, role preference, and past work." },
  { num: "02", title: "Routing & Review",    body: "Application reviewed for completeness and role fit by a team member." },
  { num: "03", title: "Evaluation",          body: "A short, role-relevant practical evaluation based on your track." },
  { num: "04", title: "Team Review",         body: "Our team reviews your evaluation for collaboration readiness." },
  { num: "05", title: "Onboarding",          body: "Tooling, workflow, and accountability standards setup." },
  { num: "06", title: "Active Collaboration", body: "You join live delivery operations with clear scope and expectations." },
];

const evaluationSignals = [
  "Clarity of written communication in the application",
  "Relevance and quality of past work examples",
  "Problem decomposition and technical reasoning",
  "Reliability and discipline in async collaboration",
  "Evidence of documentation and handoff discipline",
  "Role-specific evaluation results",
];

const notAFit = [
  "Looking for low-structure, low-accountability remote work",
  "Avoiding clear written communication and documented updates",
  "Treating quality gates and review cycles as optional",
  "Not comfortable with measured performance expectations",
  "Preferring short-term contract churn over long-term collaboration",
  "Unable to commit to async-first communication discipline",
];

export default function Recruiting() {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleApplyForRole = (role: string) => {
    setSelectedRole(role);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <ScrollReveal />
      <Header page="recruiting" />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-cyan-500/[0.03] pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-violet-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left */}
            <div className="avx-fade-in-up">
              <div className="section-label">Careers &amp; Talent Network</div>

              <h1 className="text-5xl md:text-6xl font-black leading-[1.06] text-white mb-6 tracking-tight">
                Join a remote-first engineering network built around{" "}
                <span className="gradient-text">real delivery.</span>
              </h1>

              <p className="text-lg text-[#CBD5E1] mb-4 max-w-xl leading-relaxed">
                We hire engineers, recruiters, and delivery operators who help
                build and support real client systems. Our process is
                structured, role-specific, and reviewed by people.
              </p>
              <p className="text-sm text-[#CBD5E1] mb-8 max-w-xl leading-relaxed">
                We may use software tools to route applications or summarize
                submitted materials, but final progression decisions are made
                by humans — not automated systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#roles" className="btn-primary">View Open Roles</a>
                <a href="#process" className="btn-ghost">How Hiring Works</a>
              </div>
            </div>

            {/* Right — pipeline mockup */}
            <div className="hidden md:block avx-fade-in-up-delay">
              <div className="glass-card overflow-hidden">
                <div className="px-5 py-4 border-b border-white/[0.07] flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#F8FAFC]">Talent Operations Pipeline</p>
                    <p className="text-xs text-[#CBD5E1] mt-0.5">Structured intake with role-based routing</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="live-dot" />
                    <span className="text-[10px] text-emerald-400">Active</span>
                  </div>
                </div>
                <div className="p-5 space-y-2.5">
                  {[
                    { role: "Engineering Track",           status: "Open",          color: "text-emerald-400 bg-emerald-400/10", dot: "bg-emerald-400" },
                    { role: "Recruiting & Talent Ops",     status: "Open",          color: "text-emerald-400 bg-emerald-400/10", dot: "bg-emerald-400" },
                    { role: "Client-Facing Technical Lead", status: "Open",         color: "text-emerald-400 bg-emerald-400/10", dot: "bg-emerald-400" },
                    { role: "Platform & Account Ops",      status: "Active Review", color: "text-amber-400 bg-amber-400/10",    dot: "bg-amber-400"   },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="flex items-center justify-between bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-2.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                        <span className="text-[#CBD5E1] text-xs">{item.role}</span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/[0.07] px-5 py-3">
                  <p className="text-[11px] text-[#94A3B8]">
                    Applications reviewed weekly · Human final decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW HIRING WORKS ──────────────────────────────────── */}
      <section id="process" className="py-24 scroll-mt-20 bg-[#0B1728]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-14 avx-fade-in-up">
            <div className="section-label">How Hiring Works</div>
            <h2 className="text-4xl font-bold text-[#F8FAFC] mb-4 tracking-tight">
              A structured process with clear communication at every step.
            </h2>
            <p className="text-[#CBD5E1] text-lg leading-relaxed">
              Applications are reviewed in a weekly cycle. We communicate
              clearly about next steps at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 avx-fade-in-up">
            {hiringSteps.map((step) => (
              <div key={step.num} className="glass-card p-5">
                <p className="text-[#38BDF8] text-xs font-bold mb-2">{step.num}</p>
                <h3 className="text-sm font-bold text-[#F8FAFC] mb-2">{step.title}</h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 glass-card px-6 py-4 flex items-start gap-3 avx-fade-in-up">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0 mt-1.5" />
            <p className="text-[#CBD5E1] text-sm">
              <span className="font-semibold text-[#F8FAFC]">Typical timeline:</span>{" "}
              application to onboarding is usually 2–3 weeks. Applying does not
              guarantee immediate placement.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPEN ROLES ────────────────────────────────────────── */}
      <section id="roles" className="py-24 scroll-mt-20 relative bg-[#101C2F]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-14 avx-fade-in-up">
            <div className="section-label">Role Tracks</div>
            <h2 className="text-4xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
              Professional tracks we are actively building.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {roleCards.map((track) => (
              <div key={track.title} className="glass-card p-6 avx-fade-in-up flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[#F8FAFC] text-lg font-semibold leading-snug">
                    {track.title}
                  </h3>
                  <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest border border-white/[0.07] rounded px-2 py-0.5 flex-shrink-0 ml-3">
                    {track.tag}
                  </span>
                </div>
                <p className="text-[#CBD5E1] text-sm leading-relaxed mb-5 flex-1">
                  {track.body}
                </p>
                <div className="border-t border-white/[0.06] pt-4 mb-5">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2">
                    We evaluate
                  </p>
                  <ul className="space-y-1">
                    {track.signals.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                        <span className="text-[#38BDF8] flex-shrink-0">→</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleApplyForRole(track.role)}
                  className="btn-primary !py-2.5 !text-sm self-start cursor-pointer"
                >
                  Apply to this track
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVALUATION STANDARDS ──────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-14 avx-fade-in-up">
            <div className="section-label">What We Evaluate</div>
            <h2 className="text-4xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
              Objective signals applied consistently{" "}
              <span className="gradient-text">across all applicants.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 avx-fade-in-up">
            {/* Good signals */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                <h3 className="text-lg font-bold text-[#F8FAFC]">Evaluation signals</h3>
              </div>
              <ul className="space-y-4">
                {evaluationSignals.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#38BDF8] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[#CBD5E1] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#475569]" />
                <h3 className="text-lg font-bold text-[#F8FAFC]">This role is not a fit if&hellip;</h3>
              </div>
              <ul className="space-y-4">
                {notAFit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#94A3B8] font-bold mt-0.5 flex-shrink-0">✕</span>
                    <span className="text-[#CBD5E1] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATING STANDARDS ───────────────────────────────── */}
      <section className="py-24 relative bg-[#0B1728]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-14 avx-fade-in-up">
            <div className="section-label">Operating Standards</div>
            <h2 className="text-4xl font-bold text-[#F8FAFC] tracking-tight leading-tight mb-4">
              A remote-first environment built on structure.
            </h2>
            <p className="text-[#CBD5E1] text-lg leading-relaxed">
              Designed for long-term collaborators who care about quality and
              clear communication.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 avx-fade-in-up">
            {[
              "Remote-first collaboration with async communication discipline",
              "Structured workflows and documented handoffs",
              "Operational accountability across client and internal work",
              "Transparent expectations and clear role definitions",
              "Performance-based growth with measurable scope",
              "Long-term collaboration over short-term contract churn",
            ].map((item) => (
              <div key={item} className="glass-card p-5 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0 mt-1.5" />
                <p className="text-[#CBD5E1] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GROWTH MODEL ──────────────────────────────────────── */}
      <section className="py-24 bg-[#101C2F]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start avx-fade-in-up">
            <div>
              <div className="section-label">Growth Model</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] tracking-tight leading-snug mb-6">
                Performance-based growth with clear operating expectations.
              </h2>
              <div className="space-y-4 text-[#CBD5E1] leading-relaxed text-sm">
                <p>
                  Compensation scales with ownership scope, communication quality,
                  and operational reliability — not just hours logged.
                </p>
                <p>
                  As you take on deeper responsibilities across delivery and
                  coordination, your role and compensation move accordingly.
                </p>
                <p className="text-[#F8FAFC] font-medium">
                  We optimize for outcomes, consistency, and trust.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-6">
                <h3 className="font-bold text-[#F8FAFC] text-sm mb-5 uppercase tracking-wider">
                  Example Progression
                </h3>
                <div className="space-y-3">
                  {[
                    { tier: "Core contributor", range: "Entry scope",    note: "Initial assignments with measured output and communication quality." },
                    { tier: "Track owner",       range: "Expanded scope", note: "Ownership over part of the workflow with clear accountability." },
                    { tier: "Operations lead",   range: "Advanced scope", note: "Cross-functional ownership in delivery, recruiting, or client operations." },
                  ].map((item) => (
                    <div key={item.tier} className="bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#F8FAFC] text-sm font-semibold">{item.tier}</span>
                        <span className="gradient-text-cyan font-bold text-xs">{item.range}</span>
                      </div>
                      <p className="text-[#CBD5E1] text-xs">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card px-5 py-4">
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Compensation details are discussed during the screening process
                  based on role track, operating scope, and collaboration model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIVACY NOTICE ────────────────────────────────────── */}
      <section id="privacy" className="py-16 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-card p-8 avx-fade-in-up">
            <p className="section-label mb-4">Applicant Data Notice</p>
            <h2 className="text-xl font-bold text-[#F8FAFC] mb-4">
              How we handle your application data
            </h2>
            <div className="space-y-3 text-[#CBD5E1] text-sm leading-relaxed">
              <p>
                We collect the information you submit — including your name,
                contact details, work history, and any materials you share —
                to evaluate role fit, contact you about your application, and
                support our recruiting operations.
              </p>
              <p>
                We may use software tools to help route applications, identify
                missing information, or summarize submitted materials for
                reviewers.{" "}
                <span className="font-medium text-[#F8FAFC]">
                  Final progression decisions are made by people, not automated
                  systems.
                </span>
              </p>
              <p>
                We do not sell applicant data to third parties. We keep
                application records only for as long as needed for recruiting,
                security, or legal purposes, then delete or anonymize them.
              </p>
              <p>
                You may request access to, correction of, or deletion of your
                application data by contacting us at{" "}
                <a
                  href="mailto:contact@axionvextech.com"
                  className="text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
                >
                  contact@axionvextech.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLY ─────────────────────────────────────────────── */}
      <section id="apply" className="py-24 scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-cyan-500/[0.03] pointer-events-none" />
        <div className="absolute inset-0 border-y border-white/[0.06] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="section-label mx-auto w-fit mb-4">Join the Network</div>
            <h2 className="text-4xl font-bold text-[#F8FAFC] mb-4 tracking-tight">
              {selectedRole ? "Apply now." : "Ready to apply?"}
            </h2>
            <p className="text-[#CBD5E1] text-lg leading-relaxed max-w-lg mx-auto">
              Submit a clear application with your strongest work examples. We
              review submissions in a structured weekly cycle.
            </p>
          </div>

          <div className="glass-card p-8">
            <ContactForm key={selectedRole} initialRole={selectedRole} />
          </div>

          {selectedRole && (
            <p className="text-center mt-5">
              <button
                onClick={() => setSelectedRole("")}
                className="text-[#CBD5E1] hover:text-[#F8FAFC] text-sm transition-colors"
              >
                Apply for a different role instead
              </button>
            </p>
          )}

          <div className="mt-6 glass-card px-5 py-4">
            <p className="text-[#94A3B8] text-sm leading-relaxed text-center">
              By applying, you agree to our{" "}
              <a href="#privacy" className="text-[#38BDF8] hover:text-[#7DD3FC] transition-colors">
                applicant data notice
              </a>
              . Prefer to reach out directly?{" "}
              <a
                href="mailto:contact@axionvextech.com"
                className="text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
              >
                contact@axionvextech.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer page="recruiting" />
    </div>
  );
}
