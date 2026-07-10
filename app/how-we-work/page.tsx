import MarketingShell from "@/app/components/layout/MarketingShell";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "How We Work",
  description:
    "Clear decisions, senior ownership, and production evidence across discover, architect, build, validate, and operate.",
  path: "/how-we-work",
});

const phases = [
  {
    title: "Discover",
    activities: [
      "Stakeholder interviews",
      "Current workflow mapping",
      "System and data inventory",
      "Volume and exception analysis",
      "Baseline metrics",
      "Risk and consequence review",
    ],
    outputs: [
      "Problem definition",
      "Current-state map",
      "Opportunity analysis",
      "Assumptions and open questions",
    ],
  },
  {
    title: "Architect",
    activities: [
      "Target workflow design",
      "State and decision modeling",
      "Integration design",
      "Model strategy",
      "Human approval design",
      "Evaluation plan",
      "Security and data boundaries",
    ],
    outputs: [
      "Architecture diagram",
      "Delivery scope",
      "Evaluation plan",
      "Risk register",
      "Implementation sequence",
    ],
  },
  {
    title: "Build",
    activities: [
      "Integration development",
      "Orchestration",
      "Product interface",
      "Evaluation harness",
      "Monitoring",
      "Infrastructure",
      "Test automation",
    ],
    outputs: [
      "Working system",
      "Test and evaluation results",
      "Deployment configuration",
      "Documentation",
    ],
  },
  {
    title: "Validate",
    activities: [
      "User testing",
      "Shadow mode or limited release",
      "Failure analysis",
      "Quality and review measurement",
      "Cost and latency review",
    ],
    outputs: [
      "Release recommendation",
      "Known limitations",
      "Improvement backlog",
      "Operating thresholds",
    ],
  },
  {
    title: "Operate",
    activities: [
      "Production monitoring",
      "Incident support",
      "Evaluation regression",
      "Model and prompt changes",
      "Workflow optimization",
      "New integrations",
    ],
    outputs: [
      "Operating review",
      "Change record",
      "Quality trend",
      "Cost trend",
      "Roadmap",
    ],
  },
];

export default function HowWeWorkPage() {
  return (
    <MarketingShell>
      <PageHero
        title="Clear decisions, senior ownership, production evidence."
        body="Our delivery process is designed to reduce ambiguity before code, validate the highest-risk assumptions early, and leave the client with a system that can be operated and improved."
      />
      {phases.map((phase, i) => (
        <Section key={phase.title} className={i % 2 ? "bg-paper-100/70" : ""}>
          <p className="font-mono text-sm text-slate-600">
            Phase {i + 1}
          </p>
          <SectionHeading className="mt-2 text-ink-950">{phase.title}</SectionHeading>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-ink-950">Activities</h3>
              <ul className="mt-3 space-y-2 text-[var(--text-body)]">
                {phase.activities.map((a) => (
                  <li key={a}>· {a}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ink-950">Outputs</h3>
              <ul className="mt-3 space-y-2 text-[var(--text-body)]">
                {phase.outputs.map((o) => (
                  <li key={o}>· {o}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}
      <Section dark>
        <SectionHeading className="text-white">Communication expectations</SectionHeading>
        <ul className="mt-6 space-y-2 text-slate-300">
          {[
            "Direct access to delivery leads",
            "Written weekly status",
            "Decision log",
            "Risk and dependency visibility",
            "Demo or working-session cadence",
            "No hidden implementation handoff",
          ].map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/assessment" variant="dark-primary">
            Book an Assessment
          </ButtonLink>
        </div>
      </Section>
    </MarketingShell>
  );
}
