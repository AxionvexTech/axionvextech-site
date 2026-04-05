"use client";

import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Recruiting() {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleApplyForRole = (role: string) => {
    setSelectedRole(role);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollReveal />
      <Header page="recruiting" />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="avx-fade-in-up">
              <p className="mb-5 text-xs font-bold tracking-[0.25em] uppercase text-blue-400">
                Selective Hiring · Engineering Agency
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] text-white mb-6 tracking-tight">
                We hire slowly.
                <br />
                We keep people long.
              </h1>
              <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                AxionvexTech is a growing engineering agency expanding its team
                for the first time. We are not mass-hiring. We are looking for a
                small number of people who can handle real ownership, ship real
                systems, and grow with us as the work gets more complex.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#positions"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  See Open Roles
                </a>
                <a
                  href="#process"
                  className="border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  How Joining Works
                </a>
              </div>
            </div>

            {/* Pipeline status */}
            <div className="hidden md:block avx-fade-in-up-delay">
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-white/[0.06]">
                  <p className="text-white text-sm font-semibold">
                    Hiring Pipeline — Live Status
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Updated as positions open and close
                  </p>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { role: "Talent & Operations Coordinator", status: "Actively Hiring", color: "bg-emerald-400" },
                    { role: "Client-Facing Technical Lead", status: "Actively Hiring", color: "bg-emerald-400" },
                    { role: "Full-Stack Web Developer", status: "Expansion Role", color: "bg-yellow-400" },
                    { role: "Software Engineer", status: "Expansion Role", color: "bg-yellow-400" },
                    { role: "Frontend Engineer", status: "Expansion Role", color: "bg-yellow-400" },
                    { role: "Backend Engineer", status: "Expansion Role", color: "bg-yellow-400" },
                    { role: "Technical Interview Specialist", status: "Expansion Role", color: "bg-yellow-400" },
                    { role: "Recruiter / Talent Sourcer", status: "Expansion Role", color: "bg-yellow-400" },
                    { role: "Social Media / Outreach Marketer", status: "Pipeline Building", color: "bg-slate-500" },
                    { role: "Delivery Coordinator", status: "Pipeline Building", color: "bg-slate-500" },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="flex items-center justify-between bg-white/[0.03] rounded-lg px-4 py-2.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-slate-300 text-xs">{item.role}</span>
                      </div>
                      <span className="text-slate-500 text-[10px] font-medium">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* ═══ 2. HOW JOINING WORKS ═══ */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              How Joining Works
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              A clear process. No surprises.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We do not ghost candidates. We do not run endless interview loops.
              Here is exactly what happens when you apply.
            </p>
          </div>

          <div className="relative avx-fade-in-up">
            <div className="hidden md:block absolute top-[28px] left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-slate-200" />

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { num: "01", title: "Application", body: "You fill out the form with your background and the kind of work you are proud of. No cover letter template. Be specific.", accent: "bg-blue-600" },
                { num: "02", title: "Screening", body: "We review your application within one week. If there is a potential fit, we schedule a short introductory call.", accent: "bg-blue-600" },
                { num: "03", title: "Interview", body: "A focused conversation with a senior team member. We talk about real work, real constraints, and how you think — not trivia questions.", accent: "bg-indigo-600" },
                { num: "04", title: "Internal Review", body: "We discuss fit, expectations, and role alignment as a team. You hear back within a few days — either way.", accent: "bg-indigo-600" },
                { num: "05", title: "Onboarding", body: "You get access, context, and a real assignment. No training videos. You start working with the team on a real project.", accent: "bg-emerald-600" },
              ].map((step) => (
                <div key={step.num} className="relative text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-5">
                    <div className={`relative z-10 w-10 h-10 rounded-full ${step.accent} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 avx-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1 sm:mt-0" />
            <p className="text-slate-600 text-sm">
              <span className="font-semibold text-slate-900">Typical timeline:</span>{" "}
              Application to onboarding takes 2–3 weeks. We move quickly because our process is focused, not because we cut corners.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 3. CORE ROLES ═══ */}
      <section id="positions" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600">
                Actively Hiring
              </p>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Core roles. Open now.
            </h2>
          </div>

          {/* Position 1 */}
          <div className="mb-8 bg-white border border-slate-200 rounded-xl overflow-hidden avx-fade-in-up">
            <div className="border-l-4 border-blue-500 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400">Role 01</p>
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Open
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Talent & Operations Coordinator</h3>
                  <p className="text-slate-500 mt-2 text-sm">Remote · Part-time to full-time · Americas timezone preferred</p>
                </div>
                <button
                  onClick={() => handleApplyForRole("Talent & Operations Coordinator")}
                  className="flex-shrink-0 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors self-start cursor-pointer"
                >
                  Apply for This Role
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">What You&rsquo;ll Do</h4>
                  <ul className="space-y-3">
                    {[
                      "Source and qualify senior engineering candidates across job platforms, LinkedIn, and developer communities",
                      "Conduct initial screens — assess technical credibility, not just culture fit",
                      "Manage the full candidate pipeline from first contact through offer",
                      "Coordinate scheduling and logistics between candidates and engineering leads",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">›</span>
                        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">What We Need</h4>
                  <ul className="space-y-3">
                    {[
                      "2+ years in recruitment, sourcing, or operations",
                      "Enough web development knowledge to distinguish real experience from resume padding",
                      "Strong written English — you are the first impression candidates have of this company",
                      "Self-directed and organized. No hand-holding available.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-slate-400 mt-0.5 flex-shrink-0 font-bold">✓</span>
                        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Growth Path</h4>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  You are building the hiring foundation for a growing engineering team. As client volume increases, this role expands into operations leadership — managing process, tooling, and team coordination at a higher level.
                </p>
              </div>
            </div>
          </div>

          {/* Position 2 */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden avx-fade-in-up">
            <div className="border-l-4 border-indigo-500 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400">Role 02</p>
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Open
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Client-Facing Technical Lead</h3>
                  <p className="text-slate-500 mt-2 text-sm">Remote · Project-based · Americas or Europe timezone</p>
                </div>
                <button
                  onClick={() => handleApplyForRole("Client-Facing Technical Lead")}
                  className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors self-start cursor-pointer"
                >
                  Apply for This Role
                </button>
              </div>

              <div className="mb-8">
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  You are the first engineer a client talks to. You run technical discovery calls, understand what they are actually trying to build, translate it into something our team can execute, and stay involved through delivery. This is not a sales role — it is an engineering role that requires clear communication.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">What You&rsquo;ll Do</h4>
                  <ul className="space-y-3">
                    {[
                      "Lead client discovery and technical scoping conversations",
                      "Represent our engineering capabilities with credibility, not slides",
                      "Translate business requirements into clear technical briefs",
                      "Support or lead project execution after acquisition",
                      "Build client confidence through demonstrated competence",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-indigo-500 mt-0.5 flex-shrink-0">›</span>
                        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">What We Need</h4>
                  <ul className="space-y-3">
                    {[
                      "4+ years full-stack web development experience",
                      "Proven ability to run technical conversations with non-technical stakeholders",
                      "Fluent English — clear, confident, and specific",
                      "Experience making architectural decisions under real constraints",
                      "Shipped enough to know what will go wrong before it does",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-slate-400 mt-0.5 flex-shrink-0 font-bold">✓</span>
                        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Growth Path</h4>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  Strong performance leads to recurring project leadership, increased compensation per engagement, and a long-term role as a core part of how we operate. This is not a one-off contract — we are looking for someone who grows with the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. EXPANSION ROLES ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-600">
                Expansion Roles
              </p>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Roles we are building toward.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              These positions open as client work grows. If one matches you,
              apply now — we review early submissions first when a role opens.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 avx-fade-in-up">
            {[
              {
                title: "Full-Stack Web Developer",
                body: "End-to-end product builds. React, Next.js, Node, TypeScript. You own architecture through deployment.",
                category: "Engineering",
              },
              {
                title: "Software Engineer",
                body: "General-purpose engineering across backend, integrations, and systems work. Adaptable and production-minded.",
                category: "Engineering",
              },
              {
                title: "Frontend Engineer",
                body: "Component systems, performance, and UI architecture. React and TypeScript. Clean, maintainable interfaces.",
                category: "Engineering",
              },
              {
                title: "Backend Engineer",
                body: "API design, data modeling, and reliability. Python or Node. Systems that handle real traffic under real constraints.",
                category: "Engineering",
              },
              {
                title: "Technical Interview Specialist",
                body: "Run client-facing technical conversations. Assess project scope, represent the team's capabilities, and close engagements.",
                category: "Client Operations",
              },
              {
                title: "Recruiter / Talent Sourcer",
                body: "Build candidate pipelines for engineering roles. Source, screen, and manage communication across platforms.",
                category: "Talent",
              },
              {
                title: "Social Media / Outreach Marketer",
                body: "Build the company's presence across LinkedIn, dev communities, and professional channels. Content and positioning.",
                category: "Growth",
              },
              {
                title: "Delivery Coordinator",
                body: "Keep client projects on track. Manage timelines, communication cadence, and deliverable handoffs between teams.",
                category: "Operations",
              },
            ].map((role) => (
              <button
                key={role.title}
                onClick={() => handleApplyForRole(role.title)}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left hover:shadow-sm hover:border-slate-300 transition-all cursor-pointer group"
              >
                <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-3">
                  {role.category}
                </span>
                <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  {role.body}
                </p>
                <span className="text-blue-600 text-xs font-semibold">
                  Apply →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. WHAT MAKES THIS DIFFERENT ═══ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4">
              Why This Team
            </p>
            <h2 className="text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              What makes this different from other remote work.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 avx-fade-in-up">
            {[
              { title: "You talk to clients directly", body: "No project manager relaying requirements. Senior team members understand the business context behind what they build." },
              { title: "You ship to production", body: "Everyone deploys. Everyone monitors what they ship. If something goes wrong, the person who wrote it knows why." },
              { title: "Ownership means all of it", body: "Discovery, architecture, implementation, testing, deployment. You see it through — you do not hand off." },
              { title: "Code review is a real conversation", body: "We read each other's PRs. We leave comments that matter. If something is wrong, we say it clearly and constructively." },
              { title: "We write things down", body: "Decisions get documented. Code gets documented. We do not rebuild context from scratch every time someone asks a question." },
              { title: "You are joining early", body: "We are expanding for the first time. The people who join now shape the standards, the process, and the culture as it scales." },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
                <div className="w-6 h-0.5 bg-blue-500 rounded mb-4" />
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FIT / NOT A FIT ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">Fit</p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              This environment is not for everyone.<br />It should not be.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 avx-fade-in-up">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-xl font-bold text-slate-900">You will thrive here if...</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "You have shipped production systems you are genuinely proud of",
                  "You are comfortable owning a problem from discovery to deployment",
                  "You communicate clearly in writing — async is your default",
                  "You get better from direct feedback, not defensive",
                  "You would rather have ownership of something hard than comfort in something easy",
                  "You read error logs before asking for help",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <h3 className="text-xl font-bold text-white">This is not a fit if...</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "You need someone to structure your day or tell you what to do next",
                  "You treat code review as a checkbox, not a conversation",
                  "You go quiet when things get hard or ambiguous",
                  "You are looking for a low-effort remote job",
                  "You separate your code from your responsibility",
                  "You would rather look busy than be useful",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-slate-500 font-bold mt-0.5 flex-shrink-0">✕</span>
                    <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. COMPENSATION ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start avx-fade-in-up">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">Compensation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-6">
                How compensation works here.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We do not pay the same flat rate regardless of contribution. We use a layered model where compensation scales with the complexity and value of the work you take on.
                </p>
                <p>
                  As you take on more client-facing work, lead more projects, or handle more complex systems, your compensation increases accordingly. No politics. No annual review cycles. Your output determines your trajectory.
                </p>
                <p className="text-slate-900 font-medium">
                  We pay for outcomes and ownership — not hours logged.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wide">
                  Technical Lead — Example Structure
                </h3>
                <div className="space-y-3">
                  {[
                    { tier: "Client discovery & interviews", range: "$20–$25 / hr", note: "Hourly for scoping and technical conversations" },
                    { tier: "Project won — support role", range: "$1,000–$2,000", note: "Per project, when you support execution" },
                    { tier: "Project won — lead role", range: "$3,000–$4,000", note: "Per project, when you lead delivery" },
                  ].map((item) => (
                    <div key={item.tier} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-900 text-sm font-semibold">{item.tier}</span>
                        <span className="font-bold text-blue-600 text-sm">{item.range}</span>
                      </div>
                      <p className="text-slate-500 text-xs">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl px-6 py-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-900">Operations roles</span>{" "}
                  are compensated based on scope and hours. Rates increase as the hiring pipeline scales and responsibilities expand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. APPLICATION FORM ═══ */}
      <section id="apply" className="py-24 bg-slate-950 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-4">
              Apply
            </p>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              {selectedRole ? "Apply now." : "Think you are a fit?"}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto">
              Fill this out clearly. Tell us about work you are proud of. We
              read every application and respond within one week.
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8">
            <ContactForm key={selectedRole} initialRole={selectedRole} />
          </div>

          {selectedRole && (
            <p className="text-center mt-6">
              <button
                onClick={() => setSelectedRole("")}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                Apply for a different role instead
              </button>
            </p>
          )}

          <p className="text-center text-slate-500 text-sm mt-8">
            Prefer to reach out directly?{" "}
            <a
              href="mailto:manager@axionvextech.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              manager@axionvextech.com
            </a>
          </p>
        </div>
      </section>

      <Footer page="recruiting" />
    </div>
  );
}
