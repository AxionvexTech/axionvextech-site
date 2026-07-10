import MarketingShell from "@/app/components/layout/MarketingShell";
import WorkIndexClient from "@/app/components/marketing/WorkIndexClient";
import { ButtonLink, PageHero, Section } from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "Implementation Work",
  description:
    "Case studies focused on problem, architecture, controls, and evidence. Client identities disclosed only with permission.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Implementation Work"
        title="See how the system was designed, controlled, and operated."
        body="Our case studies focus on the problem, architecture, implementation decisions, operating controls, and evidence. Client identities are disclosed only when permission exists."
      />
      <Section>
        <WorkIndexClient />
      </Section>
      <Section dark>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Have a similar workflow?
        </h2>
        <div className="mt-6">
          <ButtonLink href="/assessment" variant="dark-primary">
            Assess a Workflow
          </ButtonLink>
        </div>
      </Section>
    </MarketingShell>
  );
}
