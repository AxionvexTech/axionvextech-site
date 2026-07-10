import MarketingShell from "@/app/components/layout/MarketingShell";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "AI Standards",
  description:
    "Production AI should be observable, controlled, and owned. Standards for suitability, models, tools, approval, evaluation, and operations.",
  path: "/ai-standards",
});

const sections = [
  {
    title: "Workflow suitability",
    items: [
      "Is the work repetitive enough to justify systemization?",
      "Are inputs available and lawful to use?",
      "Can quality be evaluated?",
      "Is the expected outcome measurable?",
      "Are exception paths known?",
      "Can a person review uncertain or high-impact decisions?",
      "Would deterministic automation be more appropriate?",
    ],
  },
  {
    title: "Model strategy",
    items: [
      "Avoid unnecessary vendor lock-in",
      "Use task-appropriate models",
      "Route by quality, latency, cost, and data constraints",
      "Keep model configuration versioned",
      "Define fallback behavior",
      "Test changes before broad release",
    ],
  },
  {
    title: "Context and retrieval",
    items: [
      "Use approved sources",
      "Track source identity and freshness",
      "Apply role and tenant boundaries",
      "Limit context to what the task requires",
      "Cite sources where the user needs verification",
      "Define behavior when evidence is missing",
    ],
  },
  {
    title: "Tool access",
    items: [
      "Least privilege",
      "Explicit action allowlists",
      "Validated inputs and outputs",
      "Idempotency where applicable",
      "Rate-limit handling",
      "Secrets management",
      "Audit logging",
      "Human confirmation for high-impact actions",
    ],
  },
  {
    title: "Human approval",
    items: [
      "Financial action",
      "Customer commitment",
      "Legal or compliance judgment",
      "Sensitive communication",
      "Account or permission change",
      "Irreversible system update",
      "Low-confidence exception",
    ],
  },
  {
    title: "Evaluation",
    items: [
      "Expected behavior",
      "Failure taxonomy",
      "Representative cases",
      "Edge cases",
      "Release thresholds",
      "Regression schedule",
      "Human review method",
    ],
  },
  {
    title: "Observability",
    items: [
      "What input triggered the workflow?",
      "What context was used?",
      "What model and configuration ran?",
      "What tools were called?",
      "What rule or person approved the action?",
      "What failed or required retry?",
      "What did the workflow cost?",
      "What was the final outcome?",
    ],
  },
  {
    title: "Security and privacy",
    items: [
      "Data minimization",
      "Encryption in transit and at rest",
      "Role and tenant isolation",
      "Retention rules",
      "Secrets management",
      "Vendor data-use review",
      "Incident logging",
      "Access review",
      "Environment separation",
    ],
  },
  {
    title: "Cost and latency",
    items: [
      "Establish cost per completed workflow",
      "Track cost by model and stage",
      "Use caching where appropriate",
      "Route simple tasks to appropriate models",
      "Set timeouts and fallbacks",
      "Avoid repeated context transfer",
      "Review expensive failure loops",
    ],
  },
  {
    title: "Ownership",
    items: [
      "Technical owner",
      "Business owner",
      "Runbook",
      "Architecture record",
      "Integration inventory",
      "Model and prompt version history",
      "Incident process",
      "Change approval process",
      "Support agreement",
    ],
  },
];

export default function AiStandardsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="AI Standards"
        title="Production AI should be observable, controlled, and owned."
        body="These standards guide how Axionvex Tech designs, evaluates, deploys, and operates AI-enabled workflows. The exact controls vary by business consequence, data sensitivity, and user need."
      />
      {sections.map((section, i) => (
        <Section key={section.title} className={i % 2 ? "bg-paper-100/70" : ""}>
          <SectionHeading className="text-ink-950">{section.title}</SectionHeading>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-[var(--text-body)]">
            {section.items.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </Section>
      ))}
      <Section dark>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Need to evaluate an existing AI workflow?
        </h2>
        <div className="mt-6">
          <ButtonLink href="/assessment" variant="dark-primary">
            Request an AI Operations Review
          </ButtonLink>
        </div>
      </Section>
    </MarketingShell>
  );
}
