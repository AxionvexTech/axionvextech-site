import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardMockup from "../components/DashboardMockup";

export const metadata: Metadata = {
  title: "Case Studies | AxionvexTech",
  description:
    "Real engineering work for real product teams. Platform modernization, internal tools, cloud infrastructure — see how we deliver.",
  alternates: {
    canonical: "https://axionvextech.com/work",
  },
};

const caseStudies = [
  {
    slug: "platform-modernization",
    tag: "Platform Modernization",
    tagColor: "text-blue-600",
    accent: "border-blue-500",
    mockup: "saas" as const,
    headline: "From two-day deploys to daily shipping.",
    client: "B2B SaaS · Series A · 15-person engineering team",
    challenge:
      "The client had a monolithic Node.js codebase that had grown over three years without architectural oversight. Deploys took two days because of a brittle test suite, tightly-coupled modules, and no CI pipeline. Feature velocity had dropped to the point where the CEO was asking why a team of 15 engineers could not ship a login page change in under a week.",
    approach: [
      "Audited the full codebase and identified the four highest-coupling modules blocking independent deploys",
      "Extracted shared database access into a clean data layer with typed interfaces",
      "Broke the monolith into three deployable services behind an internal API gateway",
      "Set up a CI/CD pipeline with automated tests, staged rollouts, and rollback support",
      "Documented every architectural decision for the internal team to maintain going forward",
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "GitHub Actions"],
    timeline: "10 weeks",
    outcome:
      "The team went from deploying once every two weeks (with a two-day deploy window) to shipping multiple times per day. Two engineers who had been avoiding the backend started contributing again. The CTO reported that engineering morale improved noticeably within the first month.",
  },
  {
    slug: "internal-operations",
    tag: "Internal Operations Systems",
    tagColor: "text-indigo-600",
    accent: "border-indigo-500",
    mockup: "ops" as const,
    headline: "Replacing spreadsheets with a system that actually gets used.",
    client: "Operations-heavy SMB · 40 employees · Manual workflow bottleneck",
    challenge:
      "The company ran its entire client onboarding, task assignment, and reporting workflow through a combination of Google Sheets, email threads, and a shared Notion database. Data was duplicated across five places. Nobody trusted the numbers. The operations manager spent two hours every morning reconciling spreadsheets before the team could start working.",
    approach: [
      "Shadowed the operations team for a week to map the actual workflow — not the documented one",
      "Designed a system around how the team already worked, not how a generic tool assumed they should",
      "Built a custom web platform with role-based access, task pipelines, and automated status updates",
      "Added audit logging so every action was traceable — critical for the client's compliance needs",
      "Ran a two-week parallel period where both old and new systems ran side by side before cutover",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    timeline: "8 weeks",
    outcome:
      "The operations manager's morning reconciliation went from two hours to zero. Task handoff errors dropped significantly. The system is still in daily use over a year later — the strongest indicator that it was built around real needs, not assumptions.",
  },
  {
    slug: "backend-cloud",
    tag: "Backend & Cloud Improvement",
    tagColor: "text-slate-700",
    accent: "border-slate-700",
    mockup: "cloud" as const,
    headline: "Making on-call not a nightmare.",
    client: "SaaS platform · B2B · Production system with paying users",
    challenge:
      "The production backend had no structured logging, no alerting, and a staging environment that did not match production. Deployments were manual SSH sessions. The on-call rotation was dreaded — when something broke at night, the engineer had to SSH into production, grep through unstructured log files, and guess what happened. Two incidents in the past quarter had taken over four hours to resolve.",
    approach: [
      "Replaced unstructured console.log calls with structured JSON logging across all services",
      "Set up centralized log aggregation with search, filtering, and alerting thresholds",
      "Containerized the application and created a Docker-based deployment pipeline",
      "Rebuilt the staging environment to match production configuration exactly",
      "Added health checks, uptime monitoring, and an incident response runbook",
    ],
    stack: ["Docker", "AWS ECS", "CloudWatch", "Terraform", "Node.js"],
    timeline: "6 weeks",
    outcome:
      "Mean time to resolution for production incidents dropped from hours to minutes. The staging environment caught two bugs in the first week that would have hit production. The on-call engineer on the next rotation said it was the first time they did not dread the shift.",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <Header page="work" />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold tracking-[0.25em] uppercase text-blue-400">
              Case Studies
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] text-white mb-6 tracking-tight">
              Real work. Real systems. Real outcomes.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              These are not hypothetical examples. Each project involved a real
              team, real constraints, and a production system with users depending
              on it. Here is what the work actually looked like.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* ─── CASE STUDIES ─── */}
      {caseStudies.map((cs, index) => (
        <section
          key={cs.slug}
          id={cs.slug}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"} scroll-mt-20`}
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Header row */}
            <div className="grid md:grid-cols-5 gap-10 md:gap-16 mb-16">
              <div className="md:col-span-3">
                <p className={`text-xs font-bold tracking-[0.2em] uppercase ${cs.tagColor} mb-4`}>
                  {cs.tag}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                  {cs.headline}
                </h2>
                <p className="text-slate-500 text-sm">{cs.client}</p>
              </div>
              <div className="md:col-span-2">
                <DashboardMockup variant={cs.mockup} />
              </div>
            </div>

            {/* Content grid */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Left: challenge + approach */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                  The Challenge
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-10">
                  {cs.challenge}
                </p>

                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Technical Approach
                </h3>
                <ul className="space-y-3">
                  {cs.approach.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">›</span>
                      <span className="text-slate-600 text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: stack, timeline, outcome */}
              <div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                    Stack & Timeline
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-500">Delivery timeline:</span>
                    <span className="font-bold text-slate-900">{cs.timeline}</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Outcome
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cs.outcome}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── CTA ─── */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Have a project like these?
          </h2>
          <p className="text-slate-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us what you are building or what needs to improve. A senior
            engineer responds — not a salesperson.
          </p>
          <a
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start a Project
          </a>
          <p className="mt-6 text-slate-500 text-sm">manager@axionvextech.com</p>
        </div>
      </section>

      <Footer page="work" />
    </div>
  );
}
