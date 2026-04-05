import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CaseStudyCard from "../components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Case Studies | AxionvexTech",
  description:
    "Real engineering work for real product teams. Platform modernization, internal tools, cloud infrastructure — see how we deliver.",
  alternates: {
    canonical: "https://axionvextech.com/work",
  },
};

const studies = [
  {
    slug: "payment-api-rebuild",
    category: "Fintech",
    categoryColor: "text-blue-600",
    title: "Payment API Rebuild",
    summary:
      "Redesigned a synchronous payment processing pipeline into an event-driven architecture. Resolved transaction failures under peak load, added proper retry logic, and built an audit trail for compliance.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe"],
    timeline: "10 weeks",
    mockup: "saas" as const,
    accent: "border-blue-500",
  },
  {
    slug: "internal-operations-platform",
    category: "Internal Systems",
    categoryColor: "text-indigo-600",
    title: "Internal Operations Platform",
    summary:
      "Built a custom operations platform to replace a patchwork of spreadsheets and manual steps. Workflow automation, role-based access, and audit logging — designed around how the team actually works.",
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    timeline: "8 weeks",
    mockup: "ops" as const,
    accent: "border-indigo-500",
  },
  {
    slug: "backend-migration-cleanup",
    category: "Cloud & Infrastructure",
    categoryColor: "text-slate-700",
    title: "Backend Migration & System Cleanup",
    summary:
      "Took over a production backend with no observability, manual SSH deploys, and a staging environment that did not match production. Set up structured logging, container-based deploys, and proper environment parity.",
    stack: ["Docker", "AWS ECS", "Terraform", "CloudWatch", "Node.js"],
    timeline: "6 weeks",
    mockup: "cloud" as const,
    accent: "border-slate-700",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <Header page="work" />

      {/* Hero */}
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
              Real work. Real systems.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Each project involved a real team, real constraints, and a
              production system with users depending on it. These are not
              hypothetical examples — here is what the work actually looked like.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* Card grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {studies.map((s) => (
              <CaseStudyCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <p className="mt-6 text-slate-500 text-sm">
            manager@axionvextech.com
          </p>
        </div>
      </section>

      <Footer page="work" />
    </div>
  );
}
