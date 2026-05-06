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
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f4f8ff] to-[#ebf3ff]">
      <ScrollReveal />
      <Header page="recruiting" />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f3f8ff] to-[#eaf2ff]">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,58,138,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="avx-hero-aurora pointer-events-none" />
        <div className="avx-hero-noise pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="avx-fade-in-up">
              <p className="mb-5 text-xs font-bold tracking-[0.25em] uppercase text-blue-700">
                Remote-First Talent Network
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] text-slate-900 mb-6 tracking-tight">
                Help us build the next generation of remote engineering
                operations.
              </h1>
              <p className="text-lg text-slate-700 mb-10 max-w-xl leading-relaxed">
                We are building a selective collaboration network of engineers,
                recruiters, and technical operators. The standard is clear:
                strong communication, operational accountability, and production
                quality work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#roles"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  View Open Roles
                </a>
                <a
                  href="#process"
                  className="border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-3.5 rounded-lg font-semibold transition-colors text-base bg-white/70"
                >
                  See Process
                </a>
              </div>
            </div>

            <div className="hidden md:block avx-fade-in-up-delay">
              <div className="bg-white/75 border border-slate-300/70 rounded-xl overflow-hidden backdrop-blur-sm shadow-sm">
                <div className="px-5 py-4 border-b border-slate-200">
                  <p className="text-slate-900 text-sm font-semibold">
                    Talent Operations Pipeline
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Structured intake with role-based routing
                  </p>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { role: "Engineering Track", status: "Open", color: "bg-emerald-400" },
                    { role: "Recruiting & Talent Ops", status: "Open", color: "bg-emerald-400" },
                    { role: "Client-Facing Technical Leads", status: "Open", color: "bg-emerald-400" },
                    { role: "Platform & Account Ops", status: "Active Review", color: "bg-yellow-400" },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="flex items-center justify-between bg-white/80 border border-slate-200 rounded-lg px-4 py-2.5"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-slate-700 text-xs">{item.role}</span>
                      </div>
                      <span className="text-slate-500 text-[10px] font-medium">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Talent Process
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Structured onboarding. Clear communication at every step.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              We run a focused process designed for long-term collaboration, not
              mass applicant volume.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 avx-fade-in-up">
              {[
                { num: "01", title: "Apply", body: "Submit your background, role preference, and past work." },
                { num: "02", title: "Screening", body: "Initial review for communication quality and role fit." },
                { num: "03", title: "Evaluation", body: "Short practical evaluation based on your selected track." },
                { num: "04", title: "Internal Review", body: "Team review for collaboration standards and readiness." },
                { num: "05", title: "Onboarding", body: "Tooling, workflow, and accountability standards setup." },
                { num: "06", title: "Active Collaboration", body: "You join live client and delivery operations." },
              ].map((step) => (
                <div key={step.num} className="rounded-xl border border-slate-200 bg-white/75 p-4 backdrop-blur-sm">
                  <p className="text-blue-300 text-xs font-bold mb-2">{step.num}</p>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              ))}
          </div>

          <div className="mt-12 bg-white/75 border border-slate-200 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 avx-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1 sm:mt-0" />
            <p className="text-slate-700 text-sm">
              <span className="font-semibold text-slate-900">Typical timeline:</span>{" "}
              application to onboarding is usually 2-3 weeks.
            </p>
          </div>
        </div>
      </section>

      <section id="roles" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4">
              Role Tracks
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Professional tracks we are actively building.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Engineering",
                body: "Senior engineers who can own delivery from planning through production support.",
                role: "Software Engineer",
              },
              {
                title: "Recruiting & Talent Operations",
                body: "Recruiters and talent operators who can run disciplined, high-signal pipelines.",
                role: "Recruiter / Talent Sourcer",
              },
              {
                title: "Client-Facing Technical Support",
                body: "Technical leads who can translate business priorities into executable engineering plans.",
                role: "Client-Facing Technical Lead",
              },
              {
                title: "Platform & Account Operations",
                body: "Operators who keep delivery systems, communication, and handoffs clean and reliable.",
                role: "Delivery Coordinator",
              },
            ].map((track) => (
              <div key={track.title} className="rounded-xl border border-slate-200 bg-white/75 p-6 avx-fade-in-up backdrop-blur-sm">
                <h3 className="text-slate-900 text-xl font-semibold mb-3">{track.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">{track.body}</p>
                <button
                  onClick={() => handleApplyForRole(track.role)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  Apply to this track
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4">
              Operating Standards
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              A remote-first environment built on structure.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              This is designed for long-term collaborators who care about quality
              and communication.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 avx-fade-in-up">
            {[
              "Remote-first collaboration with async communication discipline",
              "Structured workflows and documented handoffs",
              "Operational accountability across client and internal work",
              "Selective onboarding and performance-based growth",
              "Transparent expectations, no vague role definitions",
              "Long-term collaboration over short-term contract churn",
            ].map((role) => (
              <div key={role} className="rounded-xl border border-slate-200 bg-white/75 p-5 backdrop-blur-sm">
                <p className="text-slate-700 text-sm leading-relaxed">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4">
              Fit
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              We optimize for high-signal, operationally mature collaborators.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 avx-fade-in-up">
            <div className="bg-white/75 border border-slate-200 rounded-xl p-8 backdrop-blur-sm">
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
                  "You value structured processes and documented delivery",
                  "You are here for long-term collaboration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/75 border border-slate-200 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <h3 className="text-xl font-bold text-slate-900">This is not a fit if...</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "You are looking for low-structure, low-accountability remote work",
                  "You avoid clear communication and documented updates",
                  "You treat quality gates as optional",
                  "You are looking for a low-effort remote job",
                  "You are not comfortable with measured performance expectations",
                  "You prefer short-term churn over long-term collaboration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-slate-500 font-bold mt-0.5 flex-shrink-0">✕</span>
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start avx-fade-in-up">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-4">Growth Model</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-6">
                Performance-based growth with clear operating expectations.
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Compensation scales with ownership scope, communication quality,
                  and operational reliability, not just hours logged.
                </p>
                <p>
                  As you take on deeper responsibilities across delivery and
                  coordination, your role and compensation move accordingly.
                </p>
                <p className="text-slate-900 font-medium">
                  We optimize for outcomes, consistency, and trust.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/75 border border-slate-200 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wide">
                  Example Progression
                </h3>
                <div className="space-y-3">
                  {[
                    { tier: "Core contributor", range: "Entry scope", note: "Initial assignments with measured output and communication quality." },
                    { tier: "Track owner", range: "Expanded scope", note: "Ownership over part of the workflow with clear accountability." },
                    { tier: "Operations lead", range: "Advanced scope", note: "Cross-functional ownership in delivery, recruiting, or client operations." },
                  ].map((item) => (
                    <div key={item.tier} className="bg-white/80 border border-slate-200 rounded-lg px-4 py-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-900 text-sm font-semibold">{item.tier}</span>
                        <span className="font-bold text-blue-300 text-sm">{item.range}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/75 border border-slate-200 rounded-xl px-6 py-4 backdrop-blur-sm">
                <p className="text-slate-700 text-sm leading-relaxed">
                  Compensation details are discussed during the screening process
                  based on role track, operating scope, and collaboration model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-4">
              Join the Network
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              {selectedRole ? "Apply now." : "Think you are a fit?"}
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-lg mx-auto">
              Submit a clear application with your strongest work examples. We
              review submissions in a structured weekly cycle.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
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
