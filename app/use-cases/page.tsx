import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import UseCaseVisual, {
  variantFromSlug,
} from "@/app/components/diagrams/UseCaseVisual";
import { PageHero, Section } from "@/app/components/marketing/ui";
import { useCases, productFeatureUseCase } from "@/content/use-cases";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "Use Cases",
  description:
    "Start with a workflow that has visible inputs, decisions, and outcomes. Customer operations, onboarding, documents, reporting, and internal knowledge.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  const cards = [
    ...useCases,
    {
      slug: productFeatureUseCase.slug,
      shortTitle: "AI product features",
      summary: productFeatureUseCase.summary,
      href: productFeatureUseCase.href,
      problem: productFeatureUseCase.summary,
      controls: ["Product permissions", "Evaluation", "Observability"],
      outcomes: ["Reliability", "User control", "Support readiness"],
      workflow: [],
      cta: { label: "Explore", href: productFeatureUseCase.href },
      homepageCta: productFeatureUseCase.homepageCta,
      title: productFeatureUseCase.title,
    },
  ];

  return (
    <MarketingShell>
      <PageHero
        eyebrow="Use Cases"
        title="Start with a workflow that has visible inputs, decisions, and outcomes."
        body="These use cases are strong candidates for production AI because they combine repetitive work with judgment, context, and measurable operational consequences."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <article key={card.slug} className="surface-card overflow-hidden">
              <UseCaseVisual
                variant={variantFromSlug(card.slug)}
                className="aspect-[16/10] rounded-none border-0"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-ink-950">
                  {card.shortTitle}
                </h2>
                <p className="mt-3 text-sm text-[var(--text-body)]">
                  <span className="font-medium text-ink-950">Problem:</span>{" "}
                  {card.summary}
                </p>
                {"controls" in card && card.controls[0] ? (
                  <p className="mt-3 text-sm text-slate-600">
                    Human control: {card.controls[0]}
                  </p>
                ) : null}
                {"outcomes" in card && card.outcomes[0] ? (
                  <p className="mt-2 text-sm text-slate-600">
                    Measure: {card.outcomes.slice(0, 2).join(", ")}
                  </p>
                ) : null}
                <Link
                  href={card.href}
                  className="mt-5 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  Explore {card.shortTitle}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </MarketingShell>
  );
}
