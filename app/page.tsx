import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AxionvexTech | Technical Consulting, Web Development & Cloud Solutions",
  description:
    "AxionvexTech is a global technical consulting and web development partner for SaaS, fintech, and enterprise teams. We design, build, and scale high-availability products on modern cloud architectures.",
  alternates: {
    canonical: "https://axionvextech.com",
  },
};

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
          "Global technical consulting, web development, and cloud engineering company partnering with SaaS, fintech, and enterprise teams.",
        sameAs: [
          "https://www.linkedin.com/company/axionvextech",
          "https://twitter.com/axionvextech",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-contact",
          contactType: "Sales",
          email: "manager@axionvextech.com",
        },
      },
      {
        "@type": "WebSite",
        url: "https://axionvextech.com",
        name: "AxionvexTech",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://axionvextech.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* ナビゲーションバー */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AxionvexTech Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              AxionvexTech
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
            <a
              href="#services"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Services
            </a>
            <a
              href="#industries"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Industries
            </a>
            <a
              href="#process"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Process
            </a>
            <Link
              href="/recruiting"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Recruiting
            </Link>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="avx-fade-in-up">
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-blue-200">
              Global Technical Consulting & Delivery
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Senior Engineering Partner for US & Global Product Teams
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-slate-100">
              AxionvexTech works with scaling startups and enterprises to ship
              web, mobile, and AI-powered products that feel fast, reliable, and
              premium for your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Talk to a Technical Lead
              </a>
              <a
                href="#services"
                className="border-2 border-slate-300 hover:bg-slate-100 hover:text-slate-900 text-slate-50 px-8 py-3 rounded-lg font-semibold transition"
              >
                Explore Engagement Models
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-slate-200">
              <div>
                <span className="font-semibold text-white">
                  Senior engineers, hands-on delivery
                </span>{" "}
                with experience shipping complex products for startups and
                enterprises.
              </div>
              <div>
                <span className="font-semibold text-white">
                  Practical consulting, not theory
                </span>{" "}
                focused on web, mobile, and applied AI systems.
              </div>
            </div>
          </div>
          <div className="relative avx-fade-in-up-delay">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="relative bg-slate-900/80 border border-slate-700 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-300">
                    AxionvexTech Delivery Snapshot
                  </span>
                </div>
                <span className="text-xs text-slate-400">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-800/80 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">Focus</p>
                  <p className="font-semibold">Web, Mobile, AI</p>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">Engagements</p>
                  <p className="font-semibold">Fractional & Project</p>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-4 col-span-2">
                  <p className="text-xs text-slate-400 mb-2">What we do</p>
                  <ul className="text-xs text-slate-200 space-y-1">
                    <li>• Architect and build greenfield products</li>
                    <li>• Modernize existing applications safely</li>
                    <li>• Integrate AI into real workflows</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Next available slot</p>
                  <p className="text-sm font-semibold text-slate-50">
                    Strategy session with a technical lead
                  </p>
                </div>
                <span className="text-xs text-blue-300">Book via email</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Services Built Around Real-World Delivery
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            From discovery to launch and long-term operations, we plug in where
            your team needs senior capacity the most — as a lean extension of
            your product and engineering organization.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-transform avx-fade-in-up">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Product-Focused Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Full-stack development for SaaS and platform products using
                modern frameworks, typed APIs, and predictable delivery
                practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Greenfield product builds and MVPs</li>
                <li>• Modernization of legacy frontends</li>
                <li>• Design systems and component libraries</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-transform avx-fade-in-up-delay">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Architecture & Technical Consulting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Independent review and hands-on guidance for teams making
                high-impact technical decisions on architecture, scalability,
                and reliability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Architecture and codebase assessments</li>
                <li>• Scalability and performance workshops</li>
                <li>• Cloud cost optimization and governance</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-transform avx-fade-in-up">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Cloud, Reliability & Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Design and operate cloud-native infrastructure with a focus on
                observability, uptime, and safe deployment practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• High-availability cloud architectures</li>
                <li>• Monitoring, alerting, and SLO definitions</li>
                <li>• Incident response and post-incident reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 対象業界セクション */}
      <section id="industries" className="py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Deep Experience Across High-Velocity Industries
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We specialize in teams where software is mission-critical:
                uptime, security, and user experience directly impact revenue
                and reputation.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    SaaS & B2B Platforms:
                  </span>{" "}
                  subscription products, multi-tenant architectures, and admin
                  tooling.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Fintech & Payments:
                  </span>{" "}
                  secure flows, regulatory constraints, and risk-sensitive user
                  journeys.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Enterprise & Internal Tools:
                  </span>{" "}
                  automation, data-heavy dashboards, and integrations.
                </li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Delivery
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Production experience with real-world launches and migrations.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Senior-led
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Small, senior teams that stay close to the code.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Reliability
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Focus on observability, safe deploys, and resilient systems.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  AI Ready
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Experience integrating AI capabilities into existing products
                  and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 進め方セクション */}
      <section id="process" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            A Delivery Process Built for Clarity and Speed
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            We bring structure without bureaucracy. Every engagement follows a
            pragmatic, outcome-focused process designed to reduce risk and
            maintain momentum.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Step 1
              </p>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Discovery & Alignment
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We map business goals, constraints, and existing systems to
                define a realistic scope and success metrics.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Step 2
              </p>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Architecture & Plan
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We propose a technical approach, delivery roadmap, and risk
                mitigation plan you can review and challenge.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Step 3
              </p>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Build & Iterate
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Senior engineers ship in short, visible cycles with regular
                demos and clear communication.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Step 4
              </p>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Launch & Operate
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We help you launch safely, monitor production, and hand over a
                system your team can own confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                What types of projects are the best fit for AxionvexTech?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We are best suited for teams building or evolving web
                applications where quality, reliability, and maintainability
                matter — SaaS platforms, internal tools, data-heavy dashboards,
                and customer-facing portals.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Do you replace our internal team?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                No. We intentionally operate as a senior extension of your
                existing team, bringing structure, delivery capacity, and
                experience where it has the most leverage.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                How quickly can we start?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                For most consulting and discovery engagements we can begin
                within 1–2 weeks. For larger build projects, we align on a start
                date based on scope and team configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コンタクトCTAセクション */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Talk About Your Roadmap?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Share a short overview of your product, current challenges, and
            timelines. A senior engineer will respond with next steps — not a
            salesperson.
          </p>
          <a
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition"
          >
            Contact AxionvexTech
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">AxionvexTech</h4>
              <p>
                Global technical consulting, web development, and cloud
                engineering for product teams that care about reliability.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Product-Focused Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Architecture & Technical Consulting
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Cloud, Reliability & Operations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#industries" className="hover:text-white transition">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition">
                    How We Work
                  </a>
                </li>
                <li>
                  <Link
                    href="/recruiting"
                    className="hover:text-white transition"
                  >
                    Recruiting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:manager@axionvextech.com"
                    className="hover:text-white transition"
                  >
                    manager@axionvextech.com
                  </a>
                </li>
                <li>Global, remote-first team</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 AxionvexTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
