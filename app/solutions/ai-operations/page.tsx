import { notFound } from "next/navigation";
import { SolutionDetail } from "@/app/components/marketing/SolutionDetail";
import { Section, SectionHeading } from "@/app/components/marketing/ui";
import { getSolution } from "@/content/services";
import { createMetadata } from "@/app/lib/seo";

const slug = "ai-operations";

export const metadata = createMetadata({
  title: "AI Operations",
  description:
    "Keep production AI measurable after launch with evaluation, monitoring, and continuous improvement.",
  path: `/solutions/${slug}`,
});

export default function Page() {
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <SolutionDetail solution={solution}>
      <Section>
        <SectionHeading className="text-ink-950">Operational coverage</SectionHeading>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-[var(--text-body)]">
          {[
            "Evaluation regression runs",
            "Failure taxonomy maintenance",
            "Prompt and model change review",
            "Tool-call and integration monitoring",
            "Cost and latency tracking",
            "Exception and escalation review",
            "User feedback analysis",
            "Incident response",
            "Security and permission review",
            "Monthly improvement planning",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">Monthly operating review</SectionHeading>
        <ul className="mt-4 space-y-2 text-[var(--text-body)]">
          {[
            "Volume and completion rate",
            "Evaluation results",
            "Low-confidence and exception rate",
            "Human override and rejection patterns",
            "Cost per completed workflow",
            "Latency by stage",
            "Integration failures",
            "User feedback",
            "Recommended changes",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
    </SolutionDetail>
  );
}
