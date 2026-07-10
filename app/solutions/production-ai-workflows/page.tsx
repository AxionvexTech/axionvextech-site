import { notFound } from "next/navigation";
import { SolutionDetail } from "@/app/components/marketing/SolutionDetail";
import { Section, SectionHeading } from "@/app/components/marketing/ui";
import { getSolution } from "@/content/services";
import { createMetadata } from "@/app/lib/seo";

const slug = "production-ai-workflows";

export const metadata = createMetadata({
  title: "Production AI Workflows",
  description:
    "Turn a manual process into a controlled AI operating system with evaluation, human approval, and operational ownership.",
  path: `/solutions/${slug}`,
});

export default function Page() {
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <SolutionDetail solution={solution}>
      <Section>
        <SectionHeading className="text-ink-950">Best-fit workflows</SectionHeading>
        <ul className="mt-4 space-y-2 text-[var(--text-body)]">
          {[
            "Repetitive but not fully deterministic",
            "High volume or high coordination cost",
            "Multiple systems or data sources",
            "Clear business rules and exception paths",
            "Measurable cycle time or quality baseline",
            "Human review is possible for uncertain or high-impact cases",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
      <Section className="bg-paper-100/70">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading className="text-ink-950">What we build</SectionHeading>
            <ul className="mt-4 space-y-2 text-[var(--text-body)]">
              {[
                "Intake and classification",
                "Context assembly",
                "Retrieval and source grounding",
                "Decision support",
                "Draft generation",
                "Tool calls and system updates",
                "Review queues",
                "Escalation and exception handling",
                "Audit history",
                "Monitoring and evaluation",
              ].map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading className="text-ink-950">What is included</SectionHeading>
            <ol className="mt-4 space-y-2 text-[var(--text-body)]">
              {[
                "Workflow mapping",
                "Data and integration design",
                "Model and orchestration strategy",
                "Security and permission boundaries",
                "Human approval design",
                "Evaluation suite",
                "Production deployment",
                "Monitoring and runbooks",
                "Documentation and handoff",
              ].map((item, i) => (
                <li key={item}>
                  {i + 1}. {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading className="text-ink-950">What we do not recommend</SectionHeading>
        <ul className="mt-4 space-y-2 text-[var(--text-body)]">
          {[
            "Fully autonomous action where consequences are high and review is practical",
            "Replacing clear deterministic rules with an LLM",
            "Launching without representative test cases",
            "Giving a workflow broad tool or data access by default",
            "Binding the architecture unnecessarily to one model vendor",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
    </SolutionDetail>
  );
}
