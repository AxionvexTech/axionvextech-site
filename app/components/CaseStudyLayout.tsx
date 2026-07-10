import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import { ProofLabel } from "@/app/components/content/ProofLabel";
import { ButtonLink } from "@/app/components/marketing/ui";
import type { ProofType } from "@/content/case-studies";

interface CaseStudyLayoutProps {
  category: string;
  title: string;
  client: string;
  proofType: ProofType;
  children: React.ReactNode;
  prevStudy?: { slug: string; title: string };
  nextStudy?: { slug: string; title: string };
}

export default function CaseStudyLayout({
  category,
  title,
  client,
  proofType,
  children,
  prevStudy,
  nextStudy,
}: CaseStudyLayoutProps) {
  return (
    <MarketingShell>
      <section className="bg-ink-950">
        <div className="container-avx py-16 md:py-24">
          <Link
            href="/work"
            className="inline-flex text-sm text-slate-300 hover:text-white"
          >
            ← All work
          </Link>
          <div className="mt-6">
            <ProofLabel type={proofType} onDark />
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-signal-mint">
            {category}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-slate-300">{client}</p>
        </div>
      </section>

      {children}

      <section className="border-t border-[var(--border-light)] bg-paper-100/70 py-12">
        <div className="container-avx flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {prevStudy ? (
            <Link href={`/work/${prevStudy.slug}`} className="text-sm">
              <span className="text-slate-600">Previous</span>
              <p className="font-semibold text-ink-950">← {prevStudy.title}</p>
            </Link>
          ) : (
            <div />
          )}
          {nextStudy ? (
            <Link href={`/work/${nextStudy.slug}`} className="text-sm sm:text-right">
              <span className="text-slate-600">Next</span>
              <p className="font-semibold text-ink-950">{nextStudy.title} →</p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="container-avx">
          <h2 className="text-2xl font-semibold text-white">Have a similar workflow?</h2>
          <div className="mt-6">
            <ButtonLink href="/assessment" variant="dark-primary">
              Assess a Workflow
            </ButtonLink>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
