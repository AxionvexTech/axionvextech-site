import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

interface CaseStudyLayoutProps {
  category: string;
  categoryColor: string;
  title: string;
  client: string;
  children: React.ReactNode;
  prevStudy?: { slug: string; title: string };
  nextStudy?: { slug: string; title: string };
}

export default function CaseStudyLayout({
  category,
  categoryColor,
  title,
  client,
  children,
  prevStudy,
  nextStudy,
}: CaseStudyLayoutProps) {
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

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors"
          >
            ← All Case Studies
          </Link>

          <p
            className={`text-xs font-bold tracking-[0.25em] uppercase ${categoryColor} mb-4`}
          >
            {category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white mb-5 tracking-tight max-w-3xl">
            {title}
          </h1>
          <p className="text-slate-500 text-sm">{client}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* Content */}
      {children}

      {/* Navigation between studies */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {prevStudy ? (
              <Link
                href={`/work/${prevStudy.slug}`}
                className="group text-left"
              >
                <p className="text-xs text-slate-400 mb-1">Previous</p>
                <p className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors">
                  ← {prevStudy.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/work"
              className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              All Case Studies
            </Link>

            {nextStudy ? (
              <Link
                href={`/work/${nextStudy.slug}`}
                className="group text-right"
              >
                <p className="text-xs text-slate-400 mb-1">Next</p>
                <p className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors">
                  {nextStudy.title} →
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
            Have a project like this?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Tell us what you are building or what needs to improve.
          </p>
          <a
            href="mailto:manager@axionvextech.com?subject=Project%20Inquiry%20-%20AxionvexTech"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer page="work" />
    </div>
  );
}
