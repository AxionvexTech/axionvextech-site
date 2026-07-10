import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import { ButtonLink, PageHero, Section } from "@/app/components/marketing/ui";
import type { Solution } from "@/content/services";
import { breadcrumbJsonLd } from "@/app/lib/seo";

export function SolutionDetail({
  solution,
  children,
}: {
  solution: Solution;
  children: React.ReactNode;
}) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: solution.shortTitle, path: solution.href },
  ]);

  return (
    <MarketingShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        body={solution.body}
        actions={
          <>
            <ButtonLink href={solution.primaryCta.href}>
              {solution.primaryCta.label}
            </ButtonLink>
            {solution.secondaryCta ? (
              <ButtonLink href={solution.secondaryCta.href} variant="secondary">
                {solution.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </>
        }
      />
      {children}
      <Section className="bg-paper-100/70">
        <h2 className="text-2xl font-semibold text-ink-950">
          Start with one bounded workflow.
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--text-body)]">
          We will identify the inputs, decisions, actions, controls, and evidence
          required for a production pilot.
        </p>
        <div className="mt-6">
          <ButtonLink href="/assessment">Book an Assessment</ButtonLink>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          <Link href="/solutions" className="underline underline-offset-4">
            All solutions
          </Link>
        </p>
      </Section>
    </MarketingShell>
  );
}
