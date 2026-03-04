"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-black">
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* ナビゲーションバー */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-gray-700">
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
          <div className="hidden md:flex gap-8 text-gray-300">
            <a
              href="#services"
              className="hover:text-blue-400 transition"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="hover:text-blue-400 transition"
            >
              Why Us
            </a>
            <a
              href="#process"
              className="hover:text-blue-400 transition"
            >
              Process
            </a>
            <Link
              href="/recruiting"
              className="hover:text-blue-400 transition"
            >
              Recruiting
            </Link>
            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - PART 1: Clear Positioning & Transformation */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="mx-auto max-w-3xl text-center avx-fade-in-up"
            >
              <motion.p
                className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-blue-300"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.5 }}
              >
                For SaaS, Fintech & Enterprise Teams
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.6 }}
              >
                Build products that scale. Reliably.
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl mb-8 text-slate-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18, duration: 0.6 }}
              >
                Senior engineers handle your hardest technical challenges — architecture, full-stack delivery, reliability, and cloud operations. Ship faster with teams that stay close to your product.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.6 }}
              >
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition text-lg"
                >
                  Get a Free Strategy Call
                </a>
                <a
                  href="#work"
                  className="border-2 border-slate-300 hover:bg-slate-100 hover:text-slate-900 text-slate-50 px-10 py-4 rounded-lg font-semibold transition text-lg"
                >
                  View Our Work
                </a>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-8 text-sm text-slate-200 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.36, duration: 0.6 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <div>
                    <span className="font-semibold text-white block">Senior engineers only</span>
                    <span className="text-xs text-slate-300">No junior contractors or offshore factories</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <div>
                    <span className="font-semibold text-white block">Production-ready delivery</span>
                    <span className="text-xs text-slate-300">Architecture, monitoring, and handover included</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* PART 2: TRUST SECTION - Credibility & Proof */}
      <section className="py-16 bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-4xl font-extrabold text-blue-400">100+</p>
              <p className="text-slate-300 text-sm mt-1">Clients Served</p>
              <p className="text-xs text-slate-500 mt-2">SaaS, Fintech, Enterprise</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-400">500+</p>
              <p className="text-slate-300 text-sm mt-1">Projects Delivered</p>
              <p className="text-xs text-slate-500 mt-2">Web, Mobile, API, Cloud</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-400">99.9%</p>
              <p className="text-slate-300 text-sm mt-1">Platform Uptime</p>
              <p className="text-xs text-slate-500 mt-2">Client systems we manage</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-blue-400">15+</p>
              <p className="text-slate-300 text-sm mt-1">Years Combined</p>
              <p className="text-xs text-slate-500 mt-2">Senior team experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PART 3: SERVICES SECTION - Specific, Benefit-Driven */}
      <section id="services" className="py-20 bg-black scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white\">
              What We Deliver
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized expertise in the areas where product teams need senior capacity the most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                Product Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Full-stack web and mobile development—greenfield builds, legacy modernization, and design systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• SaaS platforms & MVPs</li>
                <li>• Frontend modernization</li>
                <li>• Scalable APIs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                Technical Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Architecture reviews, scalability assessments, and technology roadmaps aligned to business goals.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• System architecture</li>
                <li>• Performance optimization</li>
                <li>• Tech debt assessment</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border-l-4 border-emerald-600 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                Infrastructure & Ops
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Cloud architecture, DevOps, monitoring, and reliability engineering for production systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Cloud platform setup</li>
                <li>• Observability & SLOs</li>
                <li>• Deployment automation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART 4: CASE STUDIES / RESULTS - Evidence Over Claims */}
      <section id="work" className="py-20 bg-gray-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Results That Speak
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recent projects where technical excellence drove measurable business impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-b-4 border-blue-600"
            >
              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-widest">SaaS Platform</p>
                <h3 className="text-xl font-bold text-white mt-2">
                  Fintech API Platform Redesign
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Architected and rebuilt core payment processing API to handle 10x transaction volume with zero downtime.
              </p>
              <div className="bg-blue-900 p-3 rounded text-center">
                <p className="text-2xl font-bold text-blue-400\">10x</p>
                <p className="text-xs text-gray-400\">Throughput Increase</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-b-4 border-purple-600"
            >
              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-widest">E-Commerce</p>
                <h3 className="text-xl font-bold text-white mt-2">
                  Mobile App from Scratch
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4\">
                Built native iOS/Android e-commerce platform with real-time order tracking and payment integration in 4 months.
              </p>
              <div className="bg-purple-900 p-3 rounded text-center">
                <p className="text-2xl font-bold text-purple-400\">$2.1M</p>
                <p className="text-xs text-gray-400\">First Year Revenue</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-b-4 border-emerald-600"
            >
              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Enterprise</p>
                <h3 className="text-xl font-bold text-white mt-2">
                  Legacy System Modernization
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4\">
                Migrated Fortune 500 company's 20-year-old monolith to microservices without service interruption.
              </p>
              <div className="bg-emerald-900 p-3 rounded text-center">
                <p className="text-2xl font-bold text-emerald-400\">99.99%</p>
                <p className="text-xs text-gray-400\">Uptime Maintained</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART 5: WHY CHOOSE US - Operational Advantages */}
      <section id="why-us" className="py-20 bg-black scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Businesses Choose AxionvexTech
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Not buzzwords. Practical operational advantages that reduce risk and accelerate delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Dedicated Project Owner
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    One senior engineer owns your project end-to-end. No account manager. No handoffs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Transparent Timeline
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Fixed scope, fixed price. No surprises. Weekly demos and clear status reports.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Fast Turnaround
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Start within 1–2 weeks. No long sales cycles. No vendor setup delays.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Production-Ready Handover
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Monitoring, documentation, and runbooks included. Your team owns it confidently.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">5</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Senior Talent Only
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    No offshore teams. No junior contractors. Engineers with production experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white font-bold">6</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Post-Launch Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    30 days of free support post-launch. We're available if issues arise.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 進め方セクション */}
      <section id="process" className="py-20 bg-gray-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Delivery Process Built for Momentum
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We bring structure without bureaucracy. Short cycles, clear communication, and measurable outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  STEP 1
                </p>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</div>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Discovery & Alignment
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Map business goals, constraints, and success metrics. Align expectations upfront.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-600"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  STEP 2
                </p>
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">2</div>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Strategy & Plan
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Propose technical approach, roadmap, and risk mitigation. Get buy-in before starting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-600"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                  STEP 3
                </p>
                <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center text-xs font-bold">3</div>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Build & Iterate
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deliver in short cycles. Regular demos, transparent progress, fast feedback loops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-emerald-600"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  STEP 4
                </p>
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">4</div>
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                Launch & Operate
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Safe launch, production monitoring, handover. Your team owns it confidently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-20 bg-black scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white\">
              Questions We Hear Often
            </h2>
            <p className="text-gray-400\">
              Clarity upfront — here's what partners typically ask.
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-colors\"
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                What types of projects are the best fit for AxionvexTech?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We excel with teams building web applications where quality, reliability, and maintainability matter — SaaS platforms, internal tools, data-heavy dashboards, and customer-facing portals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Do you replace our internal team?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                No. We're a senior extension of your team, bringing structure, delivery capacity, and experience where it leverages the most — not a replacement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
            >
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                How quickly can we start?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Discovery and consulting work typically start within 1–2 weeks. For larger build projects, we align timelines based on scope and team configuration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART 6: TESTIMONIALS - Social Proof */}
      <section className="py-20 bg-black scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white\">
              Trusted by Leading Teams
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto\">
              Technical leaders and founders who have shipped with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border-l-4 border-blue-600\"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-semibold text-white\">
                    Sarah Chen
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    CTO, Series B SaaS Platform
                  </p>
                </div>
                <p className="text-yellow-400 text-sm">★★★★★</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                "They understood our architecture problem immediately. Delivered a complete refactor in 8 weeks—no delays, no excuses. Now our API handles 10x the throughput."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border-l-4 border-purple-600"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Michael Rodriguez
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    VP Engineering, Fintech Startup
                  </p>
                </div>
                <p className="text-yellow-400 text-sm">★★★★★</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                "Needed senior expertise fast. They paired directly with my team, shipped a payment system in 3 months, and stayed for 30 days post-launch. No hand-off friction."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border-l-4 border-emerald-600"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Jessica Kim
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Founder, Enterprise SaaS
                  </p>
                </div>
                <p className="text-yellow-400 text-sm">★★★★★</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                "Transparent pricing, fixed timeline, and one engineer we trusted completely. They navigated legacy code better than our internal team. Highly recommend."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white scroll-mt-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Ready to Ship?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Share your product roadmap, challenges, and timeline. A senior engineer will respond—not a salesperson.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Get Started
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-gray-400"
          >
            manager@axionvextech.com • Global, remote-first team
          </motion.p>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black text-gray-400 py-12">
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
                  <a href="#why-us" className="hover:text-white transition">
                    Why Choose Us
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
