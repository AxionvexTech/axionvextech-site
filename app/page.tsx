"use client";

import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroTerminal from "./components/HeroTerminal";
import DashboardMockup from "./components/DashboardMockup";
import ServiceIcon from "./components/ServiceIcon";
import Image from "next/image";

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
                Senior Engineering for Product Teams
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.06] text-white mb-6 tracking-tight">
                Your team, plus senior engineers who ship.
              </h1>

              <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                We embed experienced engineers directly into SaaS and product
                teams. They work in your codebase, your tools, your sprints —
                and own real delivery from week one.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  Talk to Us
                </a>
                <a
                  href="#work"
                  className="border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
                >
                  See Our Work
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
              { label: "5+ years avg. engineer experience" },
              { label: "Shipping to production, not staging" },
              { label: "One engineer owns the outcome" },
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

      {/* ═══ 2. TRUSTED BY ═══ */}
      <section className="py-16 md:py-20 bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-[2.5rem] font-extrabold text-slate-900 tracking-tight mb-12 md:mb-14">
            Built by engineers from top companies.
          </h2>

          {/* Row 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center mb-8">
            {[
              { name: "Shopify", slug: "shopify" },
              { name: "Stripe", slug: "stripe" },
              { name: "Datadog", slug: "datadog" },
              { name: "HubSpot", slug: "hubspot" },
              { name: "Vercel", slug: "vercel" },
              { name: "Docker", slug: "docker" },
            ].map((brand) => (
              <div key={brand.name} className="flex items-center gap-2">
                <Image
                  src={`https://cdn.simpleicons.org/${brand.slug}/94a3b8`}
                  alt={brand.name}
                  width={24}
                  height={24}
                  className="h-5 w-5 flex-shrink-0"
                  unoptimized
                />
                <span className="text-slate-400 font-semibold text-sm tracking-tight select-none whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center">
            {[
              { name: "Cloudflare", slug: "cloudflare" },
              { name: "MongoDB", slug: "mongodb" },
              { name: "Redis", slug: "redis" },
              { name: "PagerDuty", slug: "pagerduty" },
              { name: "Fastly", slug: "fastly" },
              { name: "Anthropic", slug: "anthropic" },
            ].map((brand) => (
              <div key={brand.name} className="flex items-center gap-2">
                <Image
                  src={`https://cdn.simpleicons.org/${brand.slug}/94a3b8`}
                  alt={brand.name}
                  width={24}
                  height={24}
                  className="h-5 w-5 flex-shrink-0"
                  unoptimized
                />
                <span className="text-slate-400 font-semibold text-sm tracking-tight select-none whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. WHO WE ARE ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center avx-fade-in-up">
            <div className="md:col-span-3">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-5">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-snug">
                A founder-led engineering agency, built on delivery.
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  AxionvexTech started because too many product teams were stuck
                  with agencies that over-promised and under-delivered. We took a
                  different approach: small team, senior engineers, direct
                  communication, real accountability.
                </p>
                <p>
                  We work with SaaS companies, fintech teams, and product
                  organizations that need experienced engineers — not warm bodies.
                  Every engineer we place has worked on production systems at
                  scale, and every engagement is led by someone who has done the
                  work themselves.
                </p>
              </div>
            </div>
            {/* Quick-stat cluster */}
            <div className="md:col-span-2 grid grid-cols-2 gap-3">
              {[
                {
                  label: "Avg. time to first deploy",
                  value: "< 2 wks",
                  color: "border-blue-500",
                },
                {
                  label: "Avg. engineer experience",
                  value: "7+ yrs",
                  color: "border-indigo-500",
                },
                {
                  label: "Client retention rate",
                  value: "90%+",
                  color: "border-slate-300",
                },
                {
                  label: "Avg. engagement length",
                  value: "6+ mo",
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

          {/* Founder note */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-10 avx-fade-in-up">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
              </div>
              <div>
                <blockquote className="text-slate-700 text-base leading-relaxed mb-4">
                  &ldquo;I started AxionvexTech because I saw the same problem
                  everywhere: teams hiring agencies and getting junior developers,
                  unclear ownership, and code that nobody wanted to maintain. We
                  do the opposite. Every client works directly with senior
                  engineers who treat the project like their own.&rdquo;
                </blockquote>
                <div>
                  <p className="text-slate-900 font-bold text-sm">
                    Founder &amp; Principal Engineer
                  </p>
                  <p className="text-slate-500 text-sm">AxionvexTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. WHY TEAMS WORK WITH US ═══ */}
      <section id="why" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Why AxionvexTech
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What makes this different from hiring another agency.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 avx-fade-in-up">
            {[
              {
                title: "You talk to the person doing the work",
                body: "No account managers relaying messages. Your engineer is in the conversation, making decisions, and accountable for what ships.",
              },
              {
                title: "Production-ready from the start",
                body: "We work on live systems with real users. Our engineers write code that runs in production — with tests, monitoring, and documentation.",
              },
              {
                title: "Clean handoff when we leave",
                body: "When the engagement ends, your team can maintain everything we built. Documented decisions, clean architecture, no hidden dependencies on us.",
              },
              {
                title: "We embed into your workflow",
                body: "Your repo, your Slack, your sprint cadence. We adapt to how your team works — not the other way around.",
              },
              {
                title: "Scoped carefully, delivered on time",
                body: "We scope conservatively and communicate early when something changes. You will not get a surprise at the end of a sprint.",
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

      {/* ═══ 5. SERVICES ═══ */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-16 avx-fade-in-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
              Services
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Three areas we go deep in.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We focus where we have real depth — not a little of everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                accent: "bg-blue-600",
                icon: "product" as const,
                tag: "Product Engineering",
                title: "Full-stack builds that ship.",
                body: "New SaaS platforms, legacy modernization, and scalable APIs. We take ownership from architecture through production deployment.",
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
                title: "Architecture that holds up.",
                body: "System design, scalability reviews, and tech-debt prioritization. We help you make the right call before it gets expensive to change.",
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
                body: "Cloud architecture, CI/CD, observability, and reliability engineering for systems where downtime has real consequences.",
                points: [
                  "AWS cloud setup & migration",
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

      {/* ═══ 6. HOW WE WORK ═══ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: copy */}
            <div className="avx-fade-in-up">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-5">
                How We Work
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                Engineering standards we hold ourselves to.
              </h2>

              <div className="space-y-6">
                {[
                  "Every PR is reviewed. Every deploy is tested. No shortcuts.",
                  "You talk to the engineer, not a project manager.",
                  "We document architecture decisions, not just code.",
                  "We solve problems end-to-end — not just the ticket.",
                  "If something is off track, we tell you early.",
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
                Small team. High standards. Direct communication.
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

      {/* ═══ 7. OUTCOMES + TESTIMONIALS ═══ */}
      <section id="work" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 avx-fade-in-up">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
                Recent Work
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Projects we have delivered.
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
                tag: "Fintech · 8 weeks",
                title: "Payment API Rebuild",
                body: "Redesigned a synchronous payment pipeline into an event-driven architecture. Resolved transaction failures under load, added retry logic, and built a compliance-ready audit trail.",
                accent: "border-blue-500",
                mockup: "saas" as const,
                slug: "payment-api-rebuild",
              },
              {
                tag: "Operations · 12 weeks",
                title: "Internal Operations Platform",
                body: "Built a custom operations platform replacing spreadsheets and manual workflows. Role-based access, audit logging, and workflow automation — designed around how the team actually works.",
                accent: "border-indigo-500",
                mockup: "ops" as const,
                slug: "internal-operations-platform",
              },
              {
                tag: "Infrastructure · 6 weeks",
                title: "Backend Migration & System Cleanup",
                body: "Took over a production backend with no observability and manual SSH deploys. Containerized the stack, added structured logging, and built a deploy pipeline with rollback support.",
                accent: "border-slate-700",
                mockup: "cloud" as const,
                slug: "backend-migration-cleanup",
              },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className={`bg-slate-50 rounded-xl border border-slate-200 border-t-2 ${item.accent} overflow-hidden avx-fade-in-up hover:shadow-md transition-shadow block`}
              >
                <div className="p-3 pb-0">
                  <DashboardMockup variant={item.mockup} />
                </div>
                <div className="p-6 pt-5">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-2">
                    {item.tag}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.body}
                  </p>
                  <p className="text-blue-600 text-sm font-semibold">
                    Read case study →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 avx-fade-in-up">
            {[
              {
                quote:
                  "They ramped up fast and immediately felt like part of our team. The engineer they assigned owned the project like it was his own — we did not have to manage anything.",
                name: "VP of Engineering",
                company: "Series B SaaS Company",
              },
              {
                quote:
                  "We needed someone who could take over a messy backend and make it production-ready. AxionvexTech did exactly that — clean architecture, proper CI/CD, and honest communication throughout.",
                name: "CTO",
                company: "US-based Fintech Startup",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-slate-50 border border-slate-200 rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-slate-900 font-bold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. FIT ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="avx-fade-in-up">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600 mb-5">
                Who We Work With
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                We work best with teams that value clarity and ownership.
              </h2>
            </div>

            <div className="avx-fade-in-up">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our best engagements share a few things in common:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "You need code that holds up a year from now, not just at the demo",
                  "You want to talk directly to the engineer building it",
                  "You prefer honest timelines over optimistic ones",
                  "You are solving a real technical problem, not just filling a seat",
                  "You care about how code is maintained after the engagement ends",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-base leading-relaxed">
                Not sure if your project is a fit?{" "}
                <a
                  href="#contact"
                  className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
                >
                  Reach out
                </a>{" "}
                — we will be honest about whether we can help.
              </p>
            </div>
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
                Join Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-snug">
                We are hiring senior engineers who want real ownership.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We are growing carefully — adding engineers who can work
                directly with clients, own production systems, and communicate
                clearly. If that sounds like the kind of work you want to do,
                we should talk.
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
                  role: "Senior Full-Stack Engineer",
                  status: "Open",
                  accent: "border-slate-600",
                  statusColor: "bg-emerald-400",
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
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${pos.statusColor}`}
                      />
                      <span className="text-slate-500 text-xs">
                        {pos.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              <Link
                href="/recruiting"
                className="block text-center text-blue-400 hover:text-blue-300 text-sm font-medium pt-2 transition-colors"
              >
                View all open roles →
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
              What happens after you reach out.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              No long sales cycles. Here is exactly how an engagement starts.
            </p>
          </div>

          {/* Process steps with connector */}
          <div className="relative avx-fade-in-up">
            {/* Horizontal connector line — desktop only */}
            <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-slate-200" />

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Intro Call",
                  body: "We discuss what you are building, what is blocked, and whether we are the right fit. Usually 30 minutes. No pitch deck.",
                  accent: "bg-blue-600",
                },
                {
                  num: "02",
                  title: "Scope & Plan",
                  body: "We define the technical approach, expected deliverables, timeline, and who on our team will lead the engagement.",
                  accent: "bg-indigo-600",
                },
                {
                  num: "03",
                  title: "Build",
                  body: "Your engineer starts working in your codebase. Weekly updates, visible progress, and direct communication throughout.",
                  accent: "bg-violet-600",
                },
                {
                  num: "04",
                  title: "Ship & Handoff",
                  body: "We launch, stabilize, document, and make sure your team can maintain everything without us.",
                  accent: "bg-emerald-600",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="relative text-center md:text-left"
                >
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

          {/* Response time note */}
          <div className="mt-12 text-center avx-fade-in-up">
            <p className="text-sm text-slate-500">
              Most inquiries get a response within 24 hours. If it is a fit, we
              can typically start within 1–2 weeks.
            </p>
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
            Let&apos;s talk about
            <br className="hidden sm:block" /> what you are building.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us what you need — a new build, a system that needs fixing, or
            an engineer to embed with your team. No commitment, no sales
            pressure.
          </p>
          <a
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start a Conversation
          </a>
          <p className="mt-5 text-slate-500 text-sm">
            manager@axionvextech.com · Typically responds within 24 hours
          </p>
        </div>
      </section>

      <Footer page="home" />
    </div>
  );
}
