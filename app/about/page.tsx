import MarketingShell from "@/app/components/layout/MarketingShell";
import EditorialImage from "@/app/components/diagrams/EditorialImage";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
} from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";
import { aboutContent } from "@/content/about";

export const metadata = createMetadata({
  title: "About",
  description: aboutContent.heroBody,
  path: "/about",
});

export default function AboutPage() {
  const a = aboutContent;

  return (
    <MarketingShell>
      <PageHero eyebrow={a.eyebrow} title={a.title} body={a.heroBody} />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading className="text-ink-950">
              {a.statement.heading}
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-[var(--text-body)]">
              {a.statement.body}
            </p>
          </div>
          <EditorialImage variant="workingSession" priority />
        </div>
      </Section>

      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">{a.whatWeDo.heading}</SectionHeading>
        <p className="mt-4 max-w-2xl text-[var(--text-body)]">{a.whatWeDo.body}</p>
        <ul className="mt-6 space-y-2 text-[var(--text-body)]">
          {a.whatWeDo.bullets.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading className="text-ink-950">{a.howWeOperate.heading}</SectionHeading>
        <p className="mt-4 max-w-2xl text-[var(--text-body)]">{a.howWeOperate.body}</p>
        <ul className="mt-6 space-y-2 text-[var(--text-body)]">
          {a.howWeOperate.bullets.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>

      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">Principles</SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {a.principles.map((p) => (
            <article key={p.title}>
              <h3 className="font-semibold text-ink-950">{p.title}</h3>
              <p className="mt-2 text-[var(--text-body)]">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading className="text-ink-950">Company details</SectionHeading>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
          {a.companyDetails.map((item) => (
            <div key={item.label} className="surface-card p-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-slate-600">
                {item.label}
              </dt>
              <dd className="mt-1 text-ink-950">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-slate-600">{a.leadershipNote}</p>
        <div className="mt-8">
          <ButtonLink href={a.cta.href}>{a.cta.label}</ButtonLink>
        </div>
      </Section>
    </MarketingShell>
  );
}
