import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import { ButtonLink, PageHero, Section } from "@/app/components/marketing/ui";
import { solutions } from "@/content/services";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Production AI workflows, AI product engineering, AI operations, and systems integration from Axionvex Tech.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Solutions"
        title="Production AI requires more than a model connection."
        body="Axionvex Tech combines workflow design, AI engineering, product development, systems integration, cloud deployment, evaluation, and ongoing operations."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s) => (
            <article key={s.slug} className="surface-card flex flex-col p-6">
              <h2 className="text-xl font-semibold text-ink-950">{s.shortTitle}</h2>
              <p className="mt-3 flex-1 text-[var(--text-body)]">{s.summary}</p>
              <Link
                href={s.href}
                className="mt-5 text-sm font-semibold underline underline-offset-4"
              >
                Explore {s.shortTitle}
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-paper-100/70">
        <h2 className="text-2xl font-semibold text-ink-950">
          Not sure which solution fits?
        </h2>
        <p className="mt-3 max-w-xl text-[var(--text-body)]">
          Start with the workflow and business outcome, not the technology label.
        </p>
        <div className="mt-6">
          <ButtonLink href="/assessment">Assess a Workflow</ButtonLink>
        </div>
      </Section>
    </MarketingShell>
  );
}
