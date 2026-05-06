"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "AxionvexTech",
        url: "https://axionvextech.com",
        logo: "https://axionvextech.com/logo.png",
        description:
          "Engineering agency building production systems for SaaS, fintech, and high-growth product teams.",
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
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f4f8ff] to-[#ebf3ff]">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header page="home" />

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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="avx-fade-in-up">
              <p className="mb-6 text-xs font-bold tracking-[0.25em] uppercase text-blue-300">
                AI-Enabled Product Engineering Agency
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.03] text-slate-900 mb-6 tracking-tight">
                Senior engineering, AI automation, and remote talent operations
                built for teams that need to ship.
              </h1>

              <p className="text-lg text-slate-700 mb-10 max-w-xl leading-relaxed">
                AxionvexTech helps SaaS teams deploy production systems faster,
                automate operational workflows with practical AI, and scale
                remote engineering capacity through structured talent operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  Start a Project
                </a>
                <Link href="/recruiting" className="border border-blue-200 hover:border-blue-300 text-slate-700 hover:text-slate-900 px-8 py-3.5 rounded-lg font-semibold transition-colors text-base text-center bg-white/80">Join Our Talent Network</Link>
              </div>
            </div>

            <div className="avx-fade-in-up-delay">
              <div className="rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm overflow-hidden shadow-sm">
                <div className="px-5 py-4 border-b border-blue-100 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">
                    Delivery Operations Board
                  </p>
                  <span className="text-[11px] text-emerald-600">Live</span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    "Discovery notes converted to technical plan",
                    "Build sprint running with CI quality gates",
                    "AI reporting assistant summarizing blockers",
                    "Talent operations pipeline synced for next sprint",
                  ].map((item, idx) => (
                    <div key={item} className="rounded-lg border border-blue-100 bg-white px-4 py-3 flex items-center justify-between gap-3">
                      <p className="text-sm text-slate-700">{item}</p>
                      <span className="text-[10px] text-slate-500">0{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 avx-fade-in-up">
            {[
              { label: "Senior-led delivery and direct engineer communication" },
              { label: "AI workflows designed for real production usage" },
              { label: "Remote operations model with documented accountability" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 border border-blue-100 rounded-lg bg-white/80 px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                <p className="text-sm text-slate-700 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-[0.22em] uppercase text-slate-600 mb-8">
            Technologies and platforms we actively build with
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-4 gap-x-4 items-center justify-items-center">
            {[
              { name: "OpenAI", slug: "openai" },
              { name: "Anthropic", slug: "anthropic" },
              { name: "Next.js", slug: "nextdotjs" },
              { name: "React", slug: "react" },
              { name: "Node.js", slug: "nodedotjs" },
              { name: "Python", slug: "python" },
              { name: "AWS", slug: "amazonwebservices" },
              { name: "Supabase", slug: "supabase" },
              { name: "PostgreSQL", slug: "postgresql" },
              { name: "Docker", slug: "docker" },
              { name: "Cloudflare", slug: "cloudflare" },
              { name: "Vercel", slug: "vercel" },
              { name: "Redis", slug: "redis" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="w-full max-w-[140px] rounded-lg border border-blue-100 bg-white/85 px-3 py-2.5 backdrop-blur-sm flex items-center gap-2"
              >
                <Image
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt={`${tech.name} logo`}
                  width={20}
                  height={20}
                  className="h-5 w-5 flex-shrink-0"
                  unoptimized
                />
                <span className="text-slate-700 text-xs font-medium truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300 mb-4">
              Service Pillars
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Four systems-level capabilities for teams shipping fast.
            </h2>
            <p className="text-slate-700 text-lg">
              We combine product engineering depth with AI workflow execution and
              operationally mature remote delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Product Engineering",
                body: "Senior engineers building SaaS platforms, internal tooling, and full-stack systems from MVP through production scale.",
                points: [
                  "React, Next.js, Node.js, Python",
                  "MVP-to-production ownership",
                  "Scalable architecture and delivery",
                ],
              },
              {
                title: "AI & Automation Systems",
                body: "Practical LLM integrations, orchestration layers, and automation pipelines tied to real workflows and measurable outcomes.",
                points: [
                  "RAG and internal copilots",
                  "Workflow automation systems",
                  "AI-assisted reporting and ops tooling",
                ],
              },
              {
                title: "Cloud & Reliability",
                body: "Production cloud infrastructure, CI/CD, observability, and reliability operations for software that cannot afford unstable releases.",
                points: [
                  "AWS architecture and deployment automation",
                  "Monitoring, alerting, and incident readiness",
                  "Performance and scaling optimization",
                ],
              },
              {
                title: "Engineering Talent Operations",
                body: "Structured pipelines for embedded engineering support, recruiter coordination, and remote operating capacity with clear standards.",
                points: [
                  "Candidate screening systems",
                  "Recruiting and operations coordination",
                  "Long-term embedded collaboration",
                ],
              },
            ].map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white/75 p-7 avx-fade-in-up backdrop-blur-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-5">{service.body}</p>
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-systems" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="avx-fade-in-up">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300 mb-4">
                AI Positioning
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-5 tracking-tight">
                AI is becoming the operating layer.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                We build AI workflows that survive real usage: monitored,
                reviewed, and integrated into production operations instead of
                standing alone as demos.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 avx-fade-in-up">
              {[
                "AI recruiting workflow assistant",
                "RAG knowledge systems",
                "AI reporting pipelines",
                "AI customer support workflow",
                "AI-powered CRM assistant",
                "Document analysis systems",
              ].map((example) => (
                <div key={example} className="rounded-xl border border-slate-200 bg-white/75 p-4 backdrop-blur-sm">
                  <p className="text-slate-700 text-sm">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 avx-fade-in-up">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300 mb-4">
                Proof of Execution
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Case studies focused on decisions, implementation, and impact.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-blue-300 hover:text-blue-200 text-sm font-semibold transition-colors flex-shrink-0"
            >
              View all case studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              {
                title: "B2B SaaS Platform Modernization",
                problem: "Fragmented codebase slowed releases and increased regressions.",
                implementation: "Rebuilt core product modules with typed APIs and deployment controls.",
                stack: "Next.js, Node.js, PostgreSQL, AWS",
                impact: "Release cadence improved and incident rate dropped.",
              },
              {
                title: "AI Workflow Automation System",
                problem: "Operations teams were manually compiling weekly reports.",
                implementation: "Shipped AI-assisted data summarization and approval workflows.",
                stack: "Python, OpenAI, Supabase, Vercel",
                impact: "Reporting cycle moved from days to same-day delivery.",
              },
              {
                title: "Recruiting Pipeline Automation",
                problem: "Candidate routing and scheduling created bottlenecks.",
                implementation: "Built role-aware screening pipeline with structured handoffs.",
                stack: "Next.js, Node.js, PostgreSQL, automation webhooks",
                impact: "Faster screening with clearer recruiter accountability.",
              },
            ].map((study) => (
              <div key={study.title} className="rounded-xl border border-slate-200 bg-white/75 p-6 avx-fade-in-up backdrop-blur-sm">
                <h3 className="text-slate-900 text-lg font-semibold mb-3">{study.title}</h3>
                <p className="text-slate-600 text-sm mb-2"><span className="text-slate-800 font-medium">Problem:</span> {study.problem}</p>
                <p className="text-slate-600 text-sm mb-2"><span className="text-slate-800 font-medium">Implementation:</span> {study.implementation}</p>
                <p className="text-slate-600 text-sm mb-2"><span className="text-slate-800 font-medium">Stack:</span> {study.stack}</p>
                <p className="text-slate-700 text-sm"><span className="font-medium">Business impact:</span> {study.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300 mb-4">
              Talent Network
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Help us build the next generation of remote engineering operations.
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              We work with organized recruiters, senior engineers, and
              client-facing technical collaborators who thrive in structured,
              remote-first delivery environments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {[
              "Engineering",
              "Recruiting & Talent Operations",
              "Client-Facing Technical Support",
              "Platform & Account Operations",
            ].map((category) => (
              <div key={category} className="rounded-lg border border-slate-200 bg-white/75 px-4 py-4 backdrop-blur-sm">
                <p className="text-slate-700 text-sm font-medium">{category}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/recruiting" className="bg-white text-slate-950 hover:bg-slate-200 px-6 py-3 rounded-lg font-semibold text-sm text-center transition-colors">
              View Open Roles
            </Link>
            <Link href="/recruiting#apply" className="border border-slate-300 text-slate-700 hover:border-slate-400 px-6 py-3 rounded-lg font-semibold text-sm text-center transition-colors bg-white/70">
              Apply as a Recruiter
            </Link>
            <Link href="/recruiting#apply" className="border border-slate-300 text-slate-700 hover:border-slate-400 px-6 py-3 rounded-lg font-semibold text-sm text-center transition-colors bg-white/70">
              Apply as an Engineer
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-10 tracking-tight avx-fade-in-up">
            Structured workflows for clients and talent.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-6 avx-fade-in-up backdrop-blur-sm">
              <p className="text-blue-700 text-xs font-bold tracking-[0.18em] uppercase mb-5">Client Process</p>
              <div className="space-y-3">
                {["01 Discovery", "02 Technical Planning", "03 Build / Embed", "04 Ship / Stabilize", "05 Scale / Support"].map((step) => (
                  <div key={step} className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 text-slate-700 text-sm">{step}</div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-6 avx-fade-in-up backdrop-blur-sm">
              <p className="text-blue-700 text-xs font-bold tracking-[0.18em] uppercase mb-5">Talent Process</p>
              <div className="space-y-3">
                {["01 Apply", "02 Screening", "03 Evaluation", "04 Internal Review", "05 Onboarding", "06 Active Collaboration"].map((step) => (
                  <div key={step} className="rounded-lg border border-slate-200 bg-white/80 px-4 py-3 text-slate-700 text-sm">{step}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-300 mb-4">
              Trust Signals
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-5 tracking-tight">
              Operational trust is built through clarity, ownership, and systems.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 avx-fade-in-up">
            {[
              "Direct engineer communication",
              "Senior-led delivery and production ownership",
              "Documented delivery and decisions",
              "Structured remote operations",
              "AI-aware implementation standards",
              "Transparent workflows and accountability",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white/75 px-5 py-4 backdrop-blur-sm">
                <p className="text-slate-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-28 bg-transparent relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-300 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 avx-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Build with a team that understands
            <br className="hidden sm:block" /> production constraints.
          </h2>
          <p className="text-slate-700 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Need senior engineering support, AI automation, or structured remote
            delivery capacity? Let&apos;s map the work and define a practical path
            to ship.
          </p>
          <a
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start a Project
          </a>
          <p className="mt-6 text-slate-600 text-sm">
            manager@axionvextech.com · Typically responds within 24 hours
          </p>
        </div>
      </section>

      <Footer page="home" />
    </div>
  );
}
