"use client";

import Link from "next/link";
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
    <div className="min-h-screen bg-white">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header page="home" />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl avx-fade-in-up">
            <p className="mb-6 text-xs font-bold tracking-[0.25em] uppercase text-blue-400">
              Engineering Agency · Remote-First
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.06] text-white mb-7 tracking-tight">
              We build systems<br className="hidden sm:block" /> that hold up.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              A selective team of senior engineers working on products where
              reliability and ownership actually matter. No juniors. No
              handoffs. No filler.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
              >
                Start a Project
              </a>
              <Link
                href="/recruiting"
                className="border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
              >
                Join the Team →
              </Link>
            </div>
          </div>
        </div>

        {/* Fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 avx-fade-in-up">
            {[
              { value: "Senior only", label: "No juniors, no offshore" },
              { value: "100+", label: "Client projects delivered" },
              { value: "99.9%", label: "Uptime on managed systems" },
              { value: "1–2 weeks", label: "Typical time to start" },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="services"
        className="py-24 bg-slate-50 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              What We Build
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Three areas. Serious depth in all of them.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We don't spread thin across every technology. We go deep in the
              areas that drive real product outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                accent: "bg-blue-600",
                tag: "Product Development",
                title: "Full-stack builds that ship.",
                body: "Greenfield SaaS platforms, modernizing legacy codebases, building APIs that scale. We own delivery end-to-end — from architecture to production.",
                points: [
                  "SaaS platforms & internal tools",
                  "Frontend systems & design systems",
                  "Scalable REST and GraphQL APIs",
                ],
              },
              {
                accent: "bg-indigo-600",
                tag: "Technical Strategy",
                title: "Architecture that ages well.",
                body: "System design, scalability assessments, and tech-debt triage. We help teams make the right call before it's expensive to change.",
                points: [
                  "Architecture review & redesign",
                  "Performance bottleneck analysis",
                  "Technology selection & roadmap",
                ],
              },
              {
                accent: "bg-slate-800",
                tag: "Infrastructure & Ops",
                title: "Production systems, properly run.",
                body: "Cloud architecture, CI/CD, observability, and reliability engineering for systems that can't afford downtime.",
                points: [
                  "Cloud setup & migration",
                  "Observability, alerting & SLOs",
                  "Deployment pipelines & automation",
                ],
              },
            ].map((service) => (
              <div
                key={service.tag}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow avx-fade-in-up"
              >
                <div className={`w-10 h-1 ${service.accent} rounded mb-6`} />
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-3">
                  {service.tag}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {service.body}
                </p>
                <ul className="space-y-2">
                  {service.points.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">
                        ›
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section id="work" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Real projects. Real outcomes.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A few examples of what good engineering work looks like in
              practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Fintech",
                title: "Payment API Rebuild",
                body: "Core payment processing infrastructure was bottlenecking at peak load. Redesigned the architecture, refactored the pipeline, migrated with zero downtime.",
                metric: "10×",
                metricLabel: "throughput increase",
                color: "border-blue-500",
                metricColor: "text-blue-600",
              },
              {
                category: "E-Commerce",
                title: "Mobile Platform from Zero",
                body: "Greenfield iOS and Android app — real-time order tracking, payment integration, and backend API — scoped, built, and shipped in four months.",
                metric: "4 months",
                metricLabel: "concept to production",
                color: "border-indigo-500",
                metricColor: "text-indigo-600",
              },
              {
                category: "SaaS",
                title: "Backend Migration",
                body: "Moved a monolithic codebase to a service-oriented architecture. The team could finally ship features independently without stepping on each other.",
                metric: "99.99%",
                metricLabel: "uptime through migration",
                color: "border-slate-700",
                metricColor: "text-slate-700",
              },
            ].map((cs) => (
              <div
                key={cs.title}
                className={`bg-white rounded-xl p-8 border border-slate-200 border-t-2 ${cs.color} hover:shadow-md transition-shadow avx-fade-in-up`}
              >
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-3">
                  {cs.category}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {cs.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {cs.body}
                </p>
                <div className="mt-auto border-t border-slate-100 pt-5">
                  <p className={`text-3xl font-extrabold ${cs.metricColor}`}>
                    {cs.metric}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {cs.metricLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE DELIVER ─── */}
      <section id="process" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              How We Work
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Delivery without the theater.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              No status decks. No account managers. One senior engineer owns
              your project and moves it forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "One owner per project",
                body: "A senior engineer takes point on your project end-to-end. They're accountable for the outcome — not just the tasks.",
              },
              {
                num: "02",
                title: "Aligned before we build",
                body: "We spend time upfront mapping your constraints, goals, and success criteria. Surprises are expensive. We design them out.",
              },
              {
                num: "03",
                title: "Short cycles, real feedback",
                body: "We ship in increments. You see progress weekly. We course-correct early instead of discovering problems at handover.",
              },
              {
                num: "04",
                title: "Production-ready from day one",
                body: "Monitoring, logging, and documentation aren't afterthoughts. Your team inherits a system they can actually own.",
              },
              {
                num: "05",
                title: "No vendor lock-in",
                body: "We use mainstream tools your team already knows. We're not building job security into your architecture.",
              },
              {
                num: "06",
                title: "You're in the loop, always",
                body: "Direct access to your engineer. Clear status on what's done, what's next, and what's blocking — without having to ask.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-xl p-7 border border-slate-200 avx-fade-in-up hover:shadow-sm transition-shadow"
              >
                <p className="text-xs font-bold text-slate-300 mb-4 tracking-widest">
                  {item.num}
                </p>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING CULTURE TEASER ─── */}
      <section className="py-24 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="avx-fade-in-up">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-5">
                We're Hiring
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Built for engineers who own their work.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Everyone here is senior. Everyone ships to production. No one
                waits to be told what to do. We're a small team growing
                deliberately — if you value craft and ownership, read on.
              </p>
              <Link
                href="/recruiting"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                See Open Roles →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 avx-fade-in-up">
              {[
                "Senior engineers only",
                "Ownership from day one",
                "Code reviews that matter",
                "Direct client contact",
                "Async-first culture",
                "Remote & flexible",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-3" />
                  <p className="text-white text-sm font-medium leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              FAQ
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Questions we hear often.
            </h2>
          </div>

          <div className="space-y-3 avx-fade-in-up">
            {[
              {
                q: "What types of projects are the best fit?",
                a: "Teams building web applications where quality, reliability, and maintainability matter — SaaS platforms, internal tools, data-heavy dashboards, customer-facing portals. If you need something fast and disposable, we're probably not the right fit.",
              },
              {
                q: "Do you replace our internal team?",
                a: "No. We extend your team's capacity with senior engineering weight — particularly useful when your roadmap has outgrown your current headcount or you need an outside perspective on architecture.",
              },
              {
                q: "How fast can we get started?",
                a: "Discovery and consulting engagements typically start within 1–2 weeks. For larger builds, we scope first, then align on timeline. We don't take on projects we can't commit to properly.",
              },
              {
                q: "What tech stack do you use?",
                a: "We use what's right for the project. Typically: React, Next.js, Node, Python, PostgreSQL, AWS/GCP. We don't introduce technology for its own sake.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Clients
            </p>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              What teams say after working with us.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "They understood our architecture problem immediately. Delivered a complete refactor in 8 weeks — no delays, no excuses. Our API now handles 10× the throughput.",
                name: "Sarah Chen",
                role: "CTO, Series B SaaS",
              },
              {
                quote:
                  "Needed senior expertise fast. They paired with my team, shipped a payment system in 3 months, and stayed for 30 days post-launch. No hand-off friction.",
                name: "Michael Rodriguez",
                role: "VP Engineering, Fintech Startup",
              },
              {
                quote:
                  "Transparent pricing, fixed timeline, one engineer we trusted completely. They navigated our legacy codebase better than most of our internal team.",
                name: "Jessica Kim",
                role: "Founder, Enterprise SaaS",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-8 border border-slate-200 avx-fade-in-up"
              >
                <p className="text-slate-700 text-sm leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-5">
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        id="contact"
        className="py-28 bg-slate-950 relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 avx-fade-in-up">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-6">
            Start a Project
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to work with<br />engineers who give a damn?
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Send us your project, your constraints, and your timeline. A senior
            engineer responds — not a salesperson.
          </p>
          <a
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get in Touch
          </a>
          <p className="mt-6 text-slate-500 text-sm">
            manager@axionvextech.com
          </p>
        </div>
      </section>

      <Footer page="home" />
    </div>
  );
}
