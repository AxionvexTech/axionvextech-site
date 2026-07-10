import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import UseCaseVisual, {
  variantFromSlug,
} from "@/app/components/diagrams/UseCaseVisual";
import { PageHero, Section } from "@/app/components/marketing/ui";
import { useCases } from "@/content/use-cases";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "Use Cases",
  description:
    "Start with a workflow that has visible inputs, decisions, and outcomes. Customer operations, onboarding, documents, reporting, knowledge, and AI product features.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Use Cases"
        title="Start with a workflow that has visible inputs, decisions, and outcomes."
        body="These use cases are strong candidates for production AI because they combine repetitive work with judgment, context, and measurable operational consequences."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {useCases.map((card) => (
            <article key={card.slug} className="surface-card overflow-hidden">
              <UseCaseVisual
                variant={variantFromSlug(card.slug)}
                className="aspect-[16/10] rounded-none border-0"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-ink">{card.shortTitle}</h2>
                <p className="mt-3 text-sm text-[var(--text-body)]">{card.summary}</p>
                <p className="mt-3 text-sm text-ink-muted">
                  Controls: {card.controls.slice(0, 2).join(", ")}
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Measure: {card.outcomes.slice(0, 2).join(", ")}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-block text-sm font-semibold text-blue underline-offset-4 hover:underline"
                >
                  Explore {card.shortTitle} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </MarketingShell>
  );
}
