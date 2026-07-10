import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import UseCaseVisual, {
  variantFromSlug,
} from "@/app/components/diagrams/UseCaseVisual";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
} from "@/app/components/marketing/ui";
import type { UseCase } from "@/content/use-cases";
import { breadcrumbJsonLd } from "@/app/lib/seo";

export function UseCaseDetail({ useCase }: { useCase: UseCase }) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Use Cases", path: "/use-cases" },
    { name: useCase.shortTitle, path: useCase.href },
  ]);

  return (
    <MarketingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        eyebrow={useCase.shortTitle}
        title={useCase.title}
        body={useCase.problem}
        actions={
          <ButtonLink href={useCase.cta.href}>{useCase.cta.label}</ButtonLink>
        }
      />

      <Section>
        <UseCaseVisual
          variant={variantFromSlug(useCase.slug)}
          className="max-w-3xl aspect-[4/3]"
          priority
        />
        <p className="mt-3 text-sm text-slate-600">
          Conceptual interface for illustration. Not a live product console.
        </p>
      </Section>

      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">Example workflow</SectionHeading>
        <ol className="mt-6 space-y-3">
          {useCase.workflow.map((step, i) => (
            <li key={step} className="grid gap-2 md:grid-cols-[3rem_1fr]">
              <span className="font-mono text-sm text-slate-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[var(--text-body)]">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading className="text-ink-950">Controls</SectionHeading>
            <ul className="mt-4 space-y-2 text-[var(--text-body)]">
              {useCase.controls.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading className="text-ink-950">
              Outcomes to measure
            </SectionHeading>
            <ul className="mt-4 space-y-2 text-[var(--text-body)]">
              {useCase.outcomes.map((o) => (
                <li key={o}>· {o}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section dark>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Identify one workflow with repeatable volume.
        </h2>
        <div className="mt-6">
          <ButtonLink href={useCase.cta.href} variant="dark-primary">
            {useCase.cta.label}
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-slate-300">
          <Link href="/use-cases" className="underline underline-offset-4">
            All use cases
          </Link>
        </p>
      </Section>
    </MarketingShell>
  );
}
