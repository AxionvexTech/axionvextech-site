import { notFound } from "next/navigation";
import { SolutionDetail } from "@/app/components/marketing/SolutionDetail";
import { Section, SectionHeading } from "@/app/components/marketing/ui";
import { getSolution } from "@/content/services";
import { createMetadata } from "@/app/lib/seo";

const slug = "systems-integration";

export const metadata = createMetadata({
  title: "Systems Integration",
  description:
    "Connect applications, data sources, and APIs so AI workflows can act on reliable context.",
  path: `/solutions/${slug}`,
});

export default function Page() {
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <SolutionDetail solution={solution}>
      <Section>
        <SectionHeading className="text-ink-950">Common systems</SectionHeading>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-[var(--text-body)]">
          {[
            "CRM",
            "Support platforms",
            "Email and messaging",
            "Document storage",
            "Databases and warehouses",
            "Billing and payments",
            "Identity providers",
            "Internal APIs",
            "Scheduling systems",
            "Analytics and reporting platforms",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">Integration standards</SectionHeading>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-[var(--text-body)]">
          {[
            "Least-privilege credentials",
            "Tenant and role boundaries",
            "Idempotent operations where applicable",
            "Retry and dead-letter behavior",
            "Schema validation",
            "Rate-limit handling",
            "Audit logs",
            "Secrets management",
            "Contract and integration tests",
            "Failure alerts",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
    </SolutionDetail>
  );
}
