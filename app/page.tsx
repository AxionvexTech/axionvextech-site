import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import HeroVisual from "@/app/components/diagrams/HeroVisual";
import ArchitectureMap from "@/app/components/diagrams/ArchitectureMap";
import EditorialImage from "@/app/components/diagrams/EditorialImage";
import UseCaseVisual, {
  variantFromSlug,
} from "@/app/components/diagrams/UseCaseVisual";
import { ProofLabel } from "@/app/components/content/ProofLabel";
import {
  ButtonLink,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/app/components/marketing/ui";
import { homepageCopy } from "@/content/homepage";
import { useCases, productFeatureUseCase } from "@/content/use-cases";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import { createMetadata, organizationJsonLd } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "Production AI Workflow Engineering | Axionvex Tech",
  description:
    "Axionvex Tech designs, builds, and operates governed AI workflows for B2B SaaS and operations-heavy teams.",
  path: "/",
});

const featured = caseStudies.filter((c) => c.featured).slice(0, 1);
const secondary = caseStudies.filter((c) => !c.featured).slice(0, 2);
const useCaseCards = [
  ...useCases.map((u) => ({
    title: u.shortTitle,
    body: u.summary,
    href: u.href,
    cta: u.homepageCta,
    visual: variantFromSlug(u.slug),
  })),
  {
    title: "AI product features",
    body: productFeatureUseCase.summary,
    href: productFeatureUseCase.href,
    cta: productFeatureUseCase.homepageCta,
    visual: variantFromSlug(productFeatureUseCase.slug),
  },
];

export default function HomePage() {
  const h = homepageCopy;
  const jsonLd = organizationJsonLd();

  return (
    <MarketingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        {/* Hero */}
        <Section dark className="!pt-16 md:!pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="fade-up">
              <p className="text-sm font-semibold tracking-tight text-signal-mint md:text-base">
                {siteBrand()}
              </p>
              <Eyebrow onDark>{h.hero.eyebrow}</Eyebrow>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white text-balance leading-[1.08] md:text-5xl lg:text-[3.35rem]">
                {h.hero.heading}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                {h.hero.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={h.hero.primaryCta.href} variant="dark-primary">
                  {h.hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={h.hero.secondaryCta.href} variant="dark-secondary">
                  {h.hero.secondaryCta.label}
                </ButtonLink>
              </div>
              <p className="mt-6 font-mono text-xs text-slate-300/90">
                {h.hero.trustLine}
              </p>
            </div>
            <div className="fade-up">
              <HeroVisual />
              <p className="mt-3 text-sm text-slate-300">{h.hero.visualMicrocopy}</p>
            </div>
          </div>
        </Section>

        {/* Buyer recognition */}
        <Section>
          <Eyebrow>{h.recognition.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950 max-w-3xl">
            {h.recognition.heading}
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-[var(--text-body)]">{h.recognition.intro}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {h.recognition.cards.map((card) => (
              <article key={card.title} className="surface-card p-6">
                <h3 className="text-lg font-semibold text-ink-950">{card.title}</h3>
                <p className="mt-2 text-[var(--text-body)]">{card.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-medium text-ink-950">{h.recognition.closing}</p>
        </Section>

        {/* Outcomes */}
        <Section className="bg-paper-100/70">
          <Eyebrow>{h.outcomes.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950">{h.outcomes.heading}</SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {h.outcomes.items.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-semibold text-ink-950">{item.title}</h3>
                <p className="mt-3 text-[var(--text-body)]">{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Use cases */}
        <Section>
          <Eyebrow>{h.useCases.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950 max-w-3xl">
            {h.useCases.heading}
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-[var(--text-body)]">{h.useCases.intro}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCaseCards.map((card, i) => (
              <article
                key={card.href}
                className={`surface-card flex flex-col p-6 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="mb-4 aspect-[16/10]">
                  <UseCaseVisual
                    variant={card.visual}
                    className="h-full"
                    priority={i < 2}
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink-950">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--text-body)]">{card.body}</p>
                <Link
                  href={card.href}
                  className="mt-4 text-sm font-semibold text-ink-950 underline underline-offset-4"
                >
                  {card.cta}
                </Link>
              </article>
            ))}
          </div>
        </Section>

        {/* Engagements */}
        <Section className="bg-paper-100/70">
          <Eyebrow>{h.engagements.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950 max-w-3xl">
            {h.engagements.heading}
          </SectionHeading>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {h.engagements.items.map((item) => (
              <article key={item.title} className="surface-card p-6">
                <h3 className="text-xl font-semibold text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium text-ink-950">Best for:</span> {item.bestFor}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-[var(--text-body)]">
                  {item.scope.map((s) => (
                    <li key={s}>· {s}</li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs text-slate-600">
                  Typical duration: {item.duration}
                </p>
                <ButtonLink href={item.cta.href} variant="secondary" className="mt-5">
                  {item.cta.label}
                </ButtonLink>
              </article>
            ))}
          </div>
        </Section>

        {/* Architecture */}
        <Section dark>
          <Eyebrow onDark>{h.architecture.eyebrow}</Eyebrow>
          <SectionHeading className="text-white max-w-3xl">
            {h.architecture.heading}
          </SectionHeading>
          <p className="mt-4 max-w-2xl text-slate-300">{h.architecture.body}</p>
          <div className="mt-10">
            <EditorialImage
              variant="architectureOverview"
              className="mb-8"
              onDark
            />
            <ArchitectureMap />
          </div>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {h.architecture.bullets.map((b) => (
              <li key={b} className="text-sm text-slate-300">
                · {b}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href={h.architecture.cta.href} variant="dark-primary">
              {h.architecture.cta.label}
            </ButtonLink>
          </div>
        </Section>

        {/* Proof */}
        <Section>
          <Eyebrow>{h.proof.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950">{h.proof.heading}</SectionHeading>
          <p className="mt-4 max-w-2xl text-[var(--text-body)]">{h.proof.body}</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[...featured, ...secondary].map((study) => (
              <article key={study.slug} className="surface-card flex flex-col p-6">
                <ProofLabel type={study.proofType} />
                <h3 className="mt-4 text-lg font-semibold text-ink-950">{study.title}</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--text-body)]">{study.summary}</p>
                <p className="mt-3 font-mono text-[11px] text-slate-600">
                  {study.architecture.slice(0, 3).join(" · ")}
                </p>
                {study.results?.[0] ? (
                  <p className="mt-3 text-sm text-ink-950">
                    <span className="font-medium">Status:</span>{" "}
                    {study.results[0].status === "in_progress"
                      ? "Measurement in progress"
                      : study.results[0].statement}
                  </p>
                ) : null}
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-4 text-sm font-semibold underline underline-offset-4"
                >
                  Read the implementation
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/work" variant="secondary">
              View all work
            </ButtonLink>
          </div>
        </Section>

        {/* Standards summary */}
        <Section className="bg-paper-100/70">
          <Eyebrow>{h.standards.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950">{h.standards.heading}</SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {h.standards.cards.map((card) => (
              <article key={card.title} className="surface-card p-5">
                <h3 className="font-semibold text-ink-950">{card.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-body)]">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href={h.standards.cta.href} variant="secondary">
              {h.standards.cta.label}
            </ButtonLink>
          </div>
        </Section>

        {/* How we work */}
        <Section>
          <Eyebrow>{h.howWeWork.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950">{h.howWeWork.heading}</SectionHeading>
          <ol className="mt-10 space-y-5">
            {h.howWeWork.steps.map((step, i) => (
              <li key={step.title} className="grid gap-2 md:grid-cols-[4rem_1fr]">
                <span className="font-mono text-sm text-slate-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-ink-950">{step.title}</h3>
                  <p className="mt-1 text-[var(--text-body)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-[var(--text-body)]">{h.howWeWork.supporting}</p>
          <div className="mt-6">
            <ButtonLink href={h.howWeWork.cta.href} variant="secondary">
              {h.howWeWork.cta.label}
            </ButtonLink>
          </div>
        </Section>

        {/* Trust */}
        <Section className="bg-paper-100/70">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading className="text-ink-950 max-w-3xl">{h.trust.heading}</SectionHeading>
              <p className="mt-4 max-w-2xl text-[var(--text-body)]">{h.trust.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>· Senior-led delivery with direct communication</li>
                <li>· Documented architecture, evaluation, and handoff</li>
                <li>· Primary contact: contact@axionvextech.com</li>
              </ul>
              <div className="mt-8">
                <ButtonLink href={h.trust.cta.href} variant="secondary">
                  {h.trust.cta.label}
                </ButtonLink>
              </div>
            </div>
            <EditorialImage variant="workingSession" />
          </div>
        </Section>

        {/* Insights */}
        <Section>
          <Eyebrow>{h.insights.eyebrow}</Eyebrow>
          <SectionHeading className="text-ink-950">{h.insights.heading}</SectionHeading>
          {insights.length === 0 ? (
            <p className="mt-6 max-w-xl text-[var(--text-body)]">
              Engineering notes will appear here as they are published. No filler
              article cards are shown before content exists.
            </p>
          ) : (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {insights.slice(0, 3).map((article) => (
                <article key={article.slug} className="surface-card p-5">
                  <p className="font-mono text-[11px] text-slate-600">{article.category}</p>
                  <h3 className="mt-2 font-semibold text-ink-950">{article.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-body)]">{article.summary}</p>
                  <Link href={`/insights/${article.slug}`} className="mt-4 inline-block text-sm font-semibold underline">
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          )}
        </Section>

        {/* Final CTA */}
        <Section dark>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl text-balance">
            {h.finalCta.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">{h.finalCta.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={h.finalCta.primaryCta.href} variant="dark-primary">
              {h.finalCta.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={h.finalCta.secondaryCta.href} variant="dark-secondary">
              {h.finalCta.secondaryCta.label}
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-slate-300">{h.finalCta.formTeaser}</p>
        </Section>
    </MarketingShell>
  );
}

function siteBrand() {
  return "Axionvex Tech";
}
