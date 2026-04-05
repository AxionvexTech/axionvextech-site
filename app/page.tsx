"use client";

import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroTerminal from "./components/HeroTerminal";
import DashboardMockup from "./components/DashboardMockup";
import ServiceIcon from "./components/ServiceIcon";

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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: copy */}
            <div className="avx-fade-in-up">
              <p className="mb-6 text-xs font-bold tracking-[0.25em] uppercase text-blue-400">
                For SaaS, Fintech & Product-Focused Teams
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.06] text-white mb-6 tracking-tight">
                We build production systems with senior engineers only.
              </h1>

              <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                No junior handoffs. No bloated process. No weak execution. We
                are a fast-growing engineering agency that embeds senior
                engineers directly into product teams — to own delivery, not
                just fill seats.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  Start a Project
                </a>
                <a
                  href="#process"
                  className="border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  See How We Work
                </a>
              </div>
            </div>

            {/* Right: terminal */}
            <div className="hidden md:block avx-fade-in-up-delay">
              <HeroTerminal />
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 avx-fade-in-up">
            {[
              { label: "Senior engineers only" },
              { label: "Ships to production, not staging" },
              { label: "Your engineer owns the outcome" },
              { label: "Start in 1–2 weeks" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <p className="text-sm text-slate-400 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* ═══ 2. CREDIBILITY INTRO ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center avx-fade-in-up">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-snug">
                Built for teams that need more than extra hands.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Product teams hire us when they are shipping fast, modernizing
                legacy systems, or scaling platforms where downtime has a real
                cost. We handle the architecture, the backend, the cloud, the
                full-stack delivery — whatever requires senior engineering weight
                that the current team does not have.
              </p>
            </div>
            {/* Visual: quick-stat cluster */}
            <div className="md:col-span-2 grid grid-cols-2 gap-3">
              {[
                {
                  label: "Avg. time to first deploy",
                  value: "< 2 weeks",
                  color: "border-blue-500",
                },
                {
                  label: "Managed system uptime",
                  value: "99.9%",
                  color: "border-indigo-500",
                },
                {
                  label: "Client projects delivered",
                  value: "100+",
                  color: "border-slate-300",
                },
                {
                  label: "Avg. engagement length",
                  value: "6+ months",
                  color: "border-slate-300",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`bg-slate-50 border ${stat.color} border-t-2 rounded-xl p-4`}
                >
                  <p className="text-2xl font-extrabold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. WHY TEAMS WORK WITH US ═══ */}
      <section id="why" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Why AxionvexTech
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Why teams work with us.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 avx-fade-in-up">
            {[
              {
                title: "Senior ownership from day one",
                body: "Every engagement starts with a senior engineer who owns the project end-to-end. No ramp-up period, no management layers between you and the person doing the work.",
              },
              {
                title: "Fast without chaos",
                body: "We move quickly because we scope carefully and communicate directly. No standups that should have been a message. No process that exists for its own sake.",
              },
              {
                title: "Built for real production work",
                body: "We work on systems that are live, serving users, and under real constraints. Our engineers operate in production environments — not sandboxes.",
              },
              {
                title: "Clean handoff, not dependency",
                body: "When we leave, your team can run what we built without calling us. Documented decisions, clean code, monitoring in place. We do not build job security into your system.",
              },
              {
                title: "Embedded, not outsourced",
                body: "We work in your repo, your Slack, your sprint. Your team should forget we are external — that is the point. We are here to build, not to invoice.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-slate-200 hover:shadow-sm transition-shadow"
              >
                <div className="w-8 h-0.5 bg-blue-600 rounded mb-5" />
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

      {/* ═══ 4. SERVICES ═══ */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Services
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Three areas. Serious depth in each.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We do not spread across every technology. We go deep where it
              matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                accent: "bg-blue-600",
                icon: "product" as const,
                tag: "Product Engineering",
                title: "Full-stack builds that ship.",
                body: "Greenfield SaaS platforms, legacy modernization, and scalable APIs. We own delivery end-to-end — from architecture decisions to production deployment.",
                points: [
                  "SaaS platforms & internal tools",
                  "Frontend systems & design systems",
                  "Scalable REST and GraphQL APIs",
                ],
              },
              {
                accent: "bg-indigo-600",
                icon: "strategy" as const,
                tag: "Technical Strategy",
                title: "Architecture that ages well.",
                body: "System design, scalability assessments, and tech-debt triage. We help teams make the right call before it becomes expensive to change.",
                points: [
                  "Architecture review & redesign",
                  "Performance bottleneck analysis",
                  "Technology selection & roadmap",
                ],
              },
              {
                accent: "bg-slate-800",
                icon: "cloud" as const,
                tag: "Cloud & Reliability",
                title: "Production systems, properly run.",
                body: "Cloud architecture, CI/CD, observability, and reliability engineering for systems that serve real users and cannot afford downtime.",
                points: [
                  "Cloud setup & migration",
                  "Observability, alerting & SLOs",
                  "Deployment pipelines & automation",
                ],
              },
            ].map((service) => (
              <div
                key={service.tag}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow avx-fade-in-up"
              >
                <div className="flex items-center gap-3 mb-6">
                  <ServiceIcon type={service.icon} />
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400">
                    {service.tag}
                  </p>
                </div>
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

      {/* ═══ 5. ENGINEERING CULTURE ═══ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: copy */}
            <div className="avx-fade-in-up">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-5">
                Engineering Culture
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                How we work.
              </h2>

              <div className="space-y-6">
                {[
                  "We do not ship unstable code just to move fast.",
                  "We do not hide engineers behind non-technical layers.",
                  "We care about architecture, maintainability, and handoff.",
                  "We solve problems end-to-end, not task-by-task.",
                  "We expect ownership, communication, and technical honesty.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-12 text-slate-500 text-base font-medium">
                Small team mindset. Senior standards. Real delivery.
              </p>
            </div>

            {/* Right: code review visual */}
            <div className="hidden md:block avx-fade-in-up-delay">
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden">
                {/* PR header */}
                <div className="px-5 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400 text-xs font-mono font-bold">
                      Approved
                    </span>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    refactor: migrate payment service to event-driven
                    architecture
                  </p>
                  <p className="text-slate-500 text-xs mt-1 font-mono">
                    +847 &minus;1,203 across 14 files
                  </p>
                </div>

                {/* Code diff */}
                <div className="px-5 py-4 font-mono text-xs space-y-2">
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">
                      42
                    </span>
                    <span className="text-red-400/70 line-through">
                      await processPaymentSync(order);
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">
                      42
                    </span>
                    <span className="text-emerald-400">
                      await eventBus.emit(&apos;payment.initiated&apos;,
                      order);
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">
                      43
                    </span>
                    <span className="text-emerald-400">
                      await eventBus.emit(&apos;audit.log&apos;,{" "}
                      {"{ action, orderId }"});
                    </span>
                  </div>
                </div>

                {/* Review comment */}
                <div className="mx-5 mb-5 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                      A
                    </div>
                    <span className="text-blue-400 text-xs font-medium">
                      Senior Engineer
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Clean separation. This lets us add retry logic and dead
                    letter handling without touching the payment flow. Ship it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. MOMENTUM ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start avx-fade-in-up">
            <div className="md:col-span-3">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-5">
                Momentum
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-snug">
                Built for momentum.
              </h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  AxionvexTech is growing through execution — not through
                  pitching.
                </p>
                <p>
                  Every quarter, we take on more complex systems, work with
                  stronger teams, and raise the bar on what we deliver. We hire
                  slowly. We keep people long. We stay lean enough that every
                  client engagement still has a senior engineer who knows their
                  name.
                </p>
                <p className="text-slate-900 font-medium">
                  This is how we scale: carefully, selectively, and with
                  standards intact.
                </p>
              </div>
            </div>

            {/* Visual: growth signals */}
            <div className="md:col-span-2 space-y-4">
              {[
                {
                  signal: "Team",
                  detail: "Selectively expanding for the first time",
                  accent: "bg-blue-600",
                },
                {
                  signal: "Clients",
                  detail: "New engagements starting monthly",
                  accent: "bg-indigo-600",
                },
                {
                  signal: "Complexity",
                  detail: "Taking on larger, more technical projects",
                  accent: "bg-slate-700",
                },
                {
                  signal: "Standards",
                  detail: "Higher bar with every engagement",
                  accent: "bg-emerald-600",
                },
              ].map((item) => (
                <div
                  key={item.signal}
                  className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4"
                >
                  <div className={`w-2 h-8 ${item.accent} rounded-full`} />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      {item.signal}
                    </p>
                    <p className="text-slate-500 text-xs">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. SELECTIVE POSITIONING ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="avx-fade-in-up">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-5">
                Fit
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                Not every project is a fit.
              </h2>
            </div>

            <div className="avx-fade-in-up">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We work best with teams that value:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Code that works a year from now, not just at the demo",
                  "Talking directly to the engineer, not through a project manager",
                  "One person owning the outcome, not five people owning tasks",
                  "Honest timelines over optimistic ones",
                  "Shipping under real constraints, not ideal conditions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-base leading-relaxed">
                If the priority is just finding the cheapest vendor, we are
                probably not the right match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. OUTCOMES ═══ */}
      <section id="work" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 avx-fade-in-up">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
                Outcomes
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Real outcomes, not generic promises.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-blue-600 hover:text-blue-500 text-sm font-semibold transition-colors flex-shrink-0"
            >
              View all case studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Platform Modernization",
                body: "Took over a SaaS codebase where deploys took two days and nobody wanted to touch the backend. Restructured the data layer, broke apart tightly-coupled modules, and set up a CI pipeline that let the team ship daily instead of monthly.",
                accent: "border-blue-500",
                mockup: "saas" as const,
                slug: "platform-modernization",
              },
              {
                tag: "Internal Operations Systems",
                body: "Built a custom operations platform replacing a patchwork of spreadsheets and manual steps. Workflow automation, role-based access, audit logging — the kind of internal tool that actually gets used because it was built around how the team already works.",
                accent: "border-indigo-500",
                mockup: "ops" as const,
                slug: "internal-operations",
              },
              {
                tag: "Backend & Cloud Improvement",
                body: "Inherited a production backend with no observability, flaky deployments, and a staging environment that did not match production. Set up structured logging, container-based deploys, and proper environment parity. The on-call rotation stopped being a nightmare.",
                accent: "border-slate-700",
                mockup: "cloud" as const,
                slug: "backend-cloud",
              },
            ].map((item) => (
              <Link
                key={item.tag}
                href={`/work#${item.slug}`}
                className={`bg-slate-50 rounded-xl border border-slate-200 border-t-2 ${item.accent} overflow-hidden avx-fade-in-up hover:shadow-md transition-shadow block`}
              >
                <div className="p-3 pb-0">
                  <DashboardMockup variant={item.mockup} />
                </div>
                <div className="p-6 pt-5">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-3">
                    {item.tag}
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    {item.body}
                  </p>
                  <p className="text-blue-600 text-sm font-semibold">
                    Read full case study →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. RECRUITING TEASER ═══ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-[0.08] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="avx-fade-in-up">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-5">
                Recruiting
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-snug">
                Join a team that is growing the right way.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We are selectively expanding with engineers and operators who
                can handle real ownership, communicate clearly, and work in
                environments where the code you write runs in production the
                same week. If that sounds like the kind of place you have been
                looking for — we should talk.
              </p>
              <Link
                href="/recruiting"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                See Open Roles →
              </Link>
            </div>

            {/* Visual: role cards */}
            <div className="space-y-3 avx-fade-in-up-delay">
              {[
                {
                  role: "Talent & Operations Coordinator",
                  status: "Open",
                  accent: "border-blue-500",
                  statusColor: "bg-emerald-400",
                },
                {
                  role: "Client-Facing Technical Lead",
                  status: "Open",
                  accent: "border-indigo-500",
                  statusColor: "bg-emerald-400",
                },
                {
                  role: "Full-Stack · Backend · Frontend",
                  status: "Expansion",
                  accent: "border-slate-600",
                  statusColor: "bg-yellow-400",
                },
              ].map((pos) => (
                <Link
                  key={pos.role}
                  href="/recruiting#positions"
                  className={`block bg-white/[0.04] border border-white/[0.07] ${pos.accent} border-l-2 rounded-xl px-6 py-4 hover:bg-white/[0.07] transition-colors`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold text-sm">{pos.role}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${pos.statusColor}`} />
                      <span className="text-slate-500 text-xs">{pos.status}</span>
                    </div>
                  </div>
                </Link>
              ))}
              <Link
                href="/recruiting"
                className="block text-center text-blue-400 hover:text-blue-300 text-sm font-medium pt-2 transition-colors"
              >
                View all 10+ roles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. PROCESS ═══ */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Process
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              A delivery process built for speed and clarity.
            </h2>
          </div>

          {/* Process steps with connector */}
          <div className="relative avx-fade-in-up">
            {/* Horizontal connector line — desktop only */}
            <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-slate-200" />

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  body: "We align on goals, constraints, technical reality, and where the real leverage is.",
                  accent: "bg-blue-600",
                },
                {
                  num: "02",
                  title: "Plan",
                  body: "We define the technical approach, expected outcomes, risks, and execution path.",
                  accent: "bg-indigo-600",
                },
                {
                  num: "03",
                  title: "Build",
                  body: "We work in short cycles with clear communication and visible progress.",
                  accent: "bg-violet-600",
                },
                {
                  num: "04",
                  title: "Launch & Support",
                  body: "We launch safely, stabilize quickly, and leave the system in a condition your team can continue to own.",
                  accent: "bg-emerald-600",
                },
              ].map((step) => (
                <div key={step.num} className="relative text-center md:text-left">
                  {/* Step indicator */}
                  <div className="flex justify-center md:justify-start mb-6">
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full ${step.accent} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                    >
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FINAL CTA ═══ */}
      <section
        id="contact"
        className="py-28 bg-slate-950 relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 avx-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Work with senior engineers
            <br className="hidden sm:block" /> who can actually deliver.
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us what you are building, what is blocked, or what needs to
            improve.
          </p>
          <a
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start a Project
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
