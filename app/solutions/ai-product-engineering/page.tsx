import { notFound } from "next/navigation";
import { SolutionDetail } from "@/app/components/marketing/SolutionDetail";
import { Section, SectionHeading } from "@/app/components/marketing/ui";
import { getSolution } from "@/content/services";
import { createMetadata } from "@/app/lib/seo";

const slug = "ai-product-engineering";

export const metadata = createMetadata({
  title: "AI Product Engineering",
  description:
    "Add dependable AI features to an existing SaaS product without making reliability optional.",
  path: `/solutions/${slug}`,
});

export default function Page() {
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <SolutionDetail solution={solution}>
      <Section>
        <SectionHeading className="text-ink-950">Feature categories</SectionHeading>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-[var(--text-body)]">
          {[
            "Product copilots",
            "Agentic task execution",
            "Enterprise search and retrieval",
            "Document understanding",
            "Classification and recommendation",
            "Content generation and transformation",
            "Voice or multimodal workflows",
            "AI-assisted administration",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">
          Product engineering responsibilities
        </SectionHeading>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-[var(--text-body)]">
          {[
            "User experience and interaction design",
            "Backend services and orchestration",
            "Model abstraction and routing",
            "Context and retrieval architecture",
            "Permissions and tenant isolation",
            "Usage limits and billing events",
            "Evaluation and feedback capture",
            "Observability and support tooling",
            "Deployment and release management",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionHeading className="text-ink-950">Key principle</SectionHeading>
        <p className="mt-4 max-w-2xl text-[var(--text-body)]">
          The AI feature must behave like part of the product, not a separate
          experiment. It should respect the same user roles, data boundaries,
          reliability expectations, support process, and product analytics as the
          rest of the application.
        </p>
      </Section>
    </SolutionDetail>
  );
}
