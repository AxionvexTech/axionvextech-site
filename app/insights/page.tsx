import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import { PageHero, Section } from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";
import { insights, insightBacklog } from "@/content/insights";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Practical guidance for production AI workflows, evaluation, operations, and delivery.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Engineering notes"
        title="Practical guidance for production AI."
        body="Articles appear here only after they are written and reviewed. No filler cards."
      />
      <Section>
        {insights.length === 0 ? (
          <div>
            <p className="max-w-2xl text-[var(--text-body)]">
              No published articles yet. Planned topics include:
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {insightBacklog.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((article) => (
              <article key={article.slug} className="surface-card p-6">
                <p className="font-mono text-[11px] text-slate-600">
                  {article.category}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-ink-950">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm text-[var(--text-body)]">
                  {article.summary}
                </p>
                <Link
                  href={`/insights/${article.slug}`}
                  className="mt-4 inline-block text-sm font-semibold underline"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>
    </MarketingShell>
  );
}
