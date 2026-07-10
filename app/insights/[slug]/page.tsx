import { notFound } from "next/navigation";
import MarketingShell from "@/app/components/layout/MarketingShell";
import { ButtonLink, PageHero, Section } from "@/app/components/marketing/ui";
import { getInsight, insights } from "@/content/insights";
import { createMetadata } from "@/app/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.summary,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  return (
    <MarketingShell>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        body={article.summary}
      />
      <Section>
        <p className="text-sm text-slate-600">
          {article.author} · {article.publishedAt} · {article.readingTime}
        </p>
        <div className="mt-8 max-w-2xl space-y-4 text-[var(--text-body)]">
          {article.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-ink-950">Key takeaways</h2>
          <ul className="mt-3 space-y-2">
            {article.takeaways.map((t) => (
              <li key={t}>· {t}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <ButtonLink href="/assessment">Assess a Workflow</ButtonLink>
        </div>
      </Section>
    </MarketingShell>
  );
}
