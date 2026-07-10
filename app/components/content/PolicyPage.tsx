import MarketingShell from "@/app/components/layout/MarketingShell";
import { PageHero, Section } from "@/app/components/marketing/ui";
import type { PolicyDoc } from "@/content/legal";

export default function PolicyPage({ doc }: { doc: PolicyDoc }) {
  return (
    <MarketingShell>
      <PageHero
        title={doc.title}
        body={`Effective ${doc.effectiveDate}. Last updated ${doc.lastUpdated}.`}
      />
      <Section>
        <div className="prose-measure space-y-10 text-[var(--text-body)]">
          <p className="text-lg leading-relaxed">{doc.intro}</p>
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-ink-950">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <p className="border-t border-[var(--border-light)] pt-6 text-sm text-slate-600">
            {doc.contactNote}
          </p>
        </div>
      </Section>
    </MarketingShell>
  );
}
