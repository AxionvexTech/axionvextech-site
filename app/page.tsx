import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import HeroAgencyVideo from "@/app/components/diagrams/HeroAgencyVideo";
import HeroWorkflowOverlay from "@/app/components/diagrams/HeroWorkflowOverlay";
import CapabilityStrip from "@/app/components/diagrams/CapabilityStrip";
import PrototypeToProduction from "@/app/components/diagrams/PrototypeToProduction";
import InteractiveArchitecture from "@/app/components/diagrams/InteractiveArchitecture";
import OperationalTransformation from "@/app/components/diagrams/OperationalTransformation";
import StandardsDashboard from "@/app/components/diagrams/StandardsDashboard";
import DeliveryTimeline from "@/app/components/diagrams/DeliveryTimeline";
import UseCaseVisual, {
  variantFromSlug,
} from "@/app/components/diagrams/UseCaseVisual";
import EditorialImage from "@/app/components/diagrams/EditorialImage";
import { ProofLabel } from "@/app/components/content/ProofLabel";
import {
  ButtonLink,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/app/components/marketing/ui";
import { homepageCopy } from "@/content/homepage";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import { siteConfig } from "@/content/site";
import { createMetadata, organizationJsonLd } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "Production AI Workflow Engineering | Axionvex Tech",
  description:
    "Axionvex Tech designs, builds, and operates governed AI workflows for B2B SaaS and operations-heavy teams.",
  path: "/",
});

const featured = caseStudies.filter((c) => c.featured).slice(0, 1);
const secondary = caseStudies.filter((c) => !c.featured).slice(0, 2);

export default function HomePage() {
  const h = homepageCopy;
  const jsonLd = organizationJsonLd();

  return (
    <MarketingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1: Cinematic light-dominant hero */}
      <Section bare className="hero-cinematic !pt-6 md:!pt-8 !pb-0">
        <div className="container-avx relative z-[1]">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-12 min-h-[min(78vh,760px)]">
            <div className="fade-up relative py-6 md:py-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-8 top-4 h-40 w-40 rounded-full bg-blue/15 blur-3xl"
              />
              <p className="text-lg font-semibold tracking-tight text-ink md:text-xl">
                {siteConfig.name}
              </p>
              <Eyebrow>{h.hero.eyebrow}</Eyebrow>
              <h1 className="mt-3 max-w-[11ch] text-[2.75rem] font-semibold tracking-tight text-ink leading-[1.02] text-balance md:text-6xl lg:text-[4.75rem]">
                {h.hero.heading}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-secondary md:text-[1.2rem]">
                {h.hero.body}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={h.hero.primaryCta.href}>{h.hero.primaryCta.label}</ButtonLink>
                <ButtonLink href={h.hero.secondaryCta.href} variant="secondary">
                  {h.hero.secondaryCta.label}
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Senior-led delivery", "Vendor-neutral", "Human-controlled"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium text-ink-secondary shadow-sm backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="fade-up depth-stage relative pb-8 lg:pb-12"
              style={{ animationDelay: "140ms" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full bg-cyan/20 blur-3xl"
                data-depth="0.14"
              />
              <div className="depth-scene relative" data-tilt>
                <div className="depth-plane depth-plane--back" data-depth="0.16" aria-hidden />
                <div className="depth-plane depth-plane--mid" data-depth="0.1" aria-hidden />
                <div data-depth="0.05">
                  <HeroAgencyVideo className="aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[5/4]" />
                </div>
                <div
                  className="depth-float relative z-[2] -mt-16 px-3 sm:-mt-20 sm:px-6 lg:-mt-24"
                  data-depth="0.02"
                >
                  <HeroWorkflowOverlay />
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-muted">{h.hero.visualMicrocopy}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Capability strip */}
      <CapabilityStrip />

      {/* Section 3: Buyer recognition */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Eyebrow>{h.recognition.eyebrow}</Eyebrow>
            <SectionHeading className="text-ink max-w-xl">{h.recognition.heading}</SectionHeading>
            <p className="mt-4 max-w-xl text-[var(--text-body)]">{h.recognition.intro}</p>
          </div>
          <PrototypeToProduction />
        </div>
      </Section>

      {/* Section 4: How intelligence moves (dark anchor) */}
      <Section dark>
        <Eyebrow onDark>{h.architecture.eyebrow}</Eyebrow>
        <SectionHeading className="text-white max-w-3xl">{h.architecture.heading}</SectionHeading>
        <p className="mt-4 max-w-2xl text-slate-300">{h.architecture.body}</p>
        <div className="mt-10">
          <InteractiveArchitecture />
        </div>
        <div className="mt-8">
          <ButtonLink href={h.architecture.cta.href} variant="dark-primary">
            {h.architecture.cta.label}
          </ButtonLink>
        </div>
      </Section>

      {/* Section 5: Operational transformation */}
      <Section className="section-soft">
        <Eyebrow>{h.transformation.eyebrow}</Eyebrow>
        <SectionHeading className="text-ink max-w-3xl">{h.transformation.heading}</SectionHeading>
        <div className="mt-10">
          <OperationalTransformation />
        </div>
      </Section>

      {/* Section 6: Primary use cases — three large panels */}
      <Section>
        <Eyebrow>{h.useCases.eyebrow}</Eyebrow>
        <SectionHeading className="text-ink max-w-3xl">{h.useCases.heading}</SectionHeading>
        <p className="mt-4 max-w-2xl text-[var(--text-body)]">{h.useCases.intro}</p>
        <div className="mt-10 space-y-8">
          {h.useCases.featured.map((uc, i) => (
            <article
              key={uc.slug}
              data-tilt
              data-glow
              className={`depth-lift grid items-center gap-8 overflow-hidden rounded-[20px] border border-border bg-surface p-5 md:p-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <UseCaseVisual
                  variant={variantFromSlug(uc.slug)}
                  className="h-full"
                  priority={i === 0}
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-ink">{uc.title}</h3>
                <p className="mt-3 text-[var(--text-body)]">{uc.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {uc.controls.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-border bg-surface-soft px-3 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <Link
                  href={uc.href}
                  className="mt-6 inline-flex text-sm font-semibold text-blue underline-offset-4 hover:underline"
                >
                  {uc.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {h.useCases.secondary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary underline-offset-4 hover:text-ink hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* Section 7: Engagement models */}
      <Section className="section-soft">
        <Eyebrow>{h.engagements.eyebrow}</Eyebrow>
        <SectionHeading className="text-ink max-w-3xl">{h.engagements.heading}</SectionHeading>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {h.engagements.items.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col p-6 md:p-7 ${
                item.tone === "technical"
                  ? "rounded-[18px] border border-navy/15 bg-navy text-white shadow-[var(--shadow-medium)]"
                  : item.tone === "ops"
                    ? "rounded-[18px] border border-border bg-gradient-to-b from-surface-blue to-surface shadow-[var(--shadow-soft)]"
                    : "surface-card"
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  item.tone === "technical" ? "text-white" : "text-ink"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  item.tone === "technical" ? "text-slate-300" : "text-ink-muted"
                }`}
              >
                {item.bestFor}
              </p>
              <ul
                className={`mt-5 flex-1 space-y-1.5 text-sm ${
                  item.tone === "technical" ? "text-slate-300" : "text-[var(--text-body)]"
                }`}
              >
                {item.scope.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
              <ButtonLink
                href={item.cta.href}
                variant={item.tone === "technical" ? "dark-primary" : "secondary"}
                className="mt-6"
              >
                {item.cta.label}
              </ButtonLink>
            </article>
          ))}
        </div>
        <p className="mt-6">
          <Link
            href={h.engagements.supporting.href}
            className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            {h.engagements.supporting.label} →
          </Link>
        </p>
      </Section>

      {/* Section 8: Selected work */}
      <Section>
        <Eyebrow>{h.proof.eyebrow}</Eyebrow>
        <SectionHeading className="text-ink">{h.proof.heading}</SectionHeading>
        <p className="mt-4 max-w-2xl text-[var(--text-body)]">{h.proof.body}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {featured.map((study) => (
            <article
              key={study.slug}
              className="group relative overflow-hidden rounded-[20px] border border-border bg-surface shadow-[var(--shadow-medium)]"
            >
              <div className="aspect-[16/9] overflow-hidden bg-surface-soft">
                <EditorialImage variant="architectureOverview" className="h-full rounded-none border-0" />
              </div>
              <div className="p-6 md:p-8">
                <ProofLabel type={study.proofType} />
                <h3 className="mt-4 text-2xl font-semibold text-ink">{study.title}</h3>
                <p className="mt-3 text-[var(--text-body)]">{study.summary}</p>
                <p className="mt-4 font-mono text-[11px] text-ink-muted">
                  {study.architecture.join(" · ")}
                </p>
                <p className="mt-3 text-sm text-ink">
                  <span className="font-medium">Controls:</span> {study.controls.join(", ")}
                </p>
                {study.results?.[0] ? (
                  <p className="mt-3 text-sm text-ink-secondary">
                    <span className="font-medium text-ink">Measurement:</span>{" "}
                    {study.results[0].status === "in_progress"
                      ? "In progress — numeric claims unpublished pending verification"
                      : study.results[0].statement}
                  </p>
                ) : null}
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-blue underline-offset-4 hover:underline"
                >
                  Read the implementation →
                </Link>
              </div>
            </article>
          ))}
          <div className="grid gap-5">
            {secondary.map((study) => (
              <article key={study.slug} className="surface-card flex flex-col p-6">
                <ProofLabel type={study.proofType} />
                <h3 className="mt-3 text-lg font-semibold text-ink">{study.title}</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--text-body)]">{study.summary}</p>
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-4 text-sm font-semibold text-blue underline-offset-4 hover:underline"
                >
                  View project →
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <ButtonLink href="/work" variant="secondary">
            View all work
          </ButtonLink>
        </div>
      </Section>

      {/* Section 9: AI standards (dark anchor) */}
      <Section dark>
        <Eyebrow onDark>{h.standards.eyebrow}</Eyebrow>
        <SectionHeading className="text-white max-w-3xl">{h.standards.heading}</SectionHeading>
        <p className="mt-4 max-w-2xl text-slate-300">{h.standards.body}</p>
        <div className="mt-10">
          <StandardsDashboard />
        </div>
        <div className="mt-8">
          <ButtonLink href={h.standards.cta.href} variant="dark-primary">
            {h.standards.cta.label}
          </ButtonLink>
        </div>
      </Section>

      {/* Section 10: Delivery process */}
      <Section>
        <Eyebrow>{h.delivery.eyebrow}</Eyebrow>
        <SectionHeading className="text-ink">{h.delivery.heading}</SectionHeading>
        <div className="mt-10">
          <DeliveryTimeline />
        </div>
        <div className="mt-8">
          <ButtonLink href={h.delivery.cta.href} variant="secondary">
            {h.delivery.cta.label}
          </ButtonLink>
        </div>
      </Section>

      {/* Section 11: Team and trust */}
      <Section className="section-warm">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading className="text-ink max-w-xl">{h.trust.heading}</SectionHeading>
            <p className="mt-4 max-w-xl text-[var(--text-body)]">{h.trust.body}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {h.trust.points.map((p) => (
                <li key={p} className="text-sm text-ink-secondary">
                  · {p}
                </li>
              ))}
            </ul>
            <dl className="mt-8 space-y-2 text-sm text-ink-secondary">
              <div>
                <dt className="inline font-medium text-ink">Operating model: </dt>
                <dd className="inline">{siteConfig.legal.operatingModel}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink">Coverage: </dt>
                <dd className="inline">{siteConfig.legal.primaryTimeZones}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink">Contact: </dt>
                <dd className="inline">
                  <a href={`mailto:${siteConfig.primaryEmail}`} className="underline">
                    {siteConfig.primaryEmail}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8">
              <ButtonLink href={h.trust.cta.href} variant="secondary">
                {h.trust.cta.label}
              </ButtonLink>
            </div>
          </div>
          <EditorialImage variant="workingSession" />
        </div>
      </Section>

      {/* Section 12: Insights */}
      <Section>
        <Eyebrow>{h.insights.eyebrow}</Eyebrow>
        <SectionHeading className="text-ink">{h.insights.heading}</SectionHeading>
        {insights.length === 0 ? (
          <p className="mt-6 max-w-xl text-[var(--text-body)]">{h.insights.empty}</p>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {insights.slice(0, 3).map((article) => (
              <article key={article.slug} className="surface-card p-5">
                <p className="font-mono text-[11px] text-ink-muted">{article.category}</p>
                <h3 className="mt-2 font-semibold text-ink">{article.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-body)]">{article.summary}</p>
                <Link
                  href={`/insights/${article.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-blue underline-offset-4 hover:underline"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* Section 13: Final CTA (dark anchor) */}
      <Section dark className="!bg-gradient-to-br !from-navy !via-[#102040] !to-[#0a1830]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
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
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 font-mono text-xs text-slate-300">
            <p className="text-cyan">workflow.status</p>
            <p className="mt-3">intake → context → reason → tools</p>
            <p className="mt-1 text-amber">approval.gate = required</p>
            <p className="mt-1">eval.suite = enabled</p>
            <p className="mt-1 text-cyan">production.state = stable</p>
            <p className="mt-4 text-[10px] text-slate-300/70">Illustrative status · not live data</p>
          </div>
        </div>
      </Section>
    </MarketingShell>
  );
}
