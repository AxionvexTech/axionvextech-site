import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import WorkGrid from "../components/WorkGrid";

export const metadata: Metadata = {
  title: "Case Studies | AxionvexTech",
  description:
    "Real engineering work for real product teams. AI automation, platform modernization, internal tools, cloud infrastructure — see how we deliver.",
  alternates: {
    canonical: "https://axionvextech.com/work",
  },
};

export default function Work() {
  return (
    <div className="relative min-h-screen">
      <ScrollReveal />
      <Header page="work" />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-violet-500/[0.04] pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl avx-fade-in-up">
            <div className="section-label">Case Studies</div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.06] text-white mb-6 tracking-tight">
              Real work.{" "}
              <span className="gradient-text">Real systems.</span>
            </h1>
            <p className="text-lg text-white leading-relaxed max-w-xl">
              Each project involved a real team, real constraints, and a
              production system with users depending on it. Here is what the
              work actually looked like — decisions, implementation, and outcomes.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 avx-fade-in-up">
            {[
              { v: "20+",  l: "Production releases" },
              { v: "15+",  l: "AI workflows shipped" },
              { v: "4",    l: "Engineering domains" },
              { v: "100%", l: "Documented handoffs" },
            ].map((m) => (
              <div key={m.l} className="glass-card rounded-xl px-4 py-4 text-center">
                <p className="text-xl font-black gradient-text-cyan mb-1">{m.v}</p>
                <p className="text-[11px] text-white/60">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work grid with filter tabs */}
      <WorkGrid />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.07] via-violet-500/[0.05] to-transparent pointer-events-none" />
        <div className="absolute inset-0 border-y border-white/[0.06] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center avx-fade-in-up">
          <div className="section-label mx-auto w-fit mb-6">Start a Project</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Have a project like these?
          </h2>
          <p className="text-white text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us what you are building or what needs to improve. A senior
            engineer responds — not a salesperson.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
              className="btn-primary"
            >
              Start a Project
            </a>
            <a href="/#services" className="btn-ghost">
              View Services
            </a>
          </div>
          <p className="mt-6 text-white/60 text-sm">
            manager@axionvextech.com · Senior engineer responds directly
          </p>
        </div>
      </section>

      <Footer page="work" />
    </div>
  );
}
