export type UseCase = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  problem: string;
  workflow: string[];
  controls: string[];
  outcomes: string[];
  href: string;
  cta: { label: string; href: string };
  homepageCta: string;
};

export const useCases: UseCase[] = [
  {
    slug: "customer-operations",
    shortTitle: "Customer operations",
    title: "Resolve more customer work without losing context or accountability.",
    summary:
      "Triage requests, assemble context, draft responses, update systems, route exceptions, and maintain a complete review trail.",
    problem:
      "A controlled customer-operations workflow can gather account history, classify intent, retrieve relevant policy or product context, draft the next action, update systems, and escalate exceptions.",
    workflow: [
      "Receive request from email, chat, form, or support platform.",
      "Identify customer, account, issue type, and urgency.",
      "Gather relevant history and product context.",
      "Recommend or draft a response.",
      "Apply policy and permission checks.",
      "Request human approval for defined cases.",
      "Send, route, update, or create follow-up work.",
      "Record the inputs, decision, action, and outcome.",
    ],
    controls: [
      "Approved knowledge sources",
      "Confidence and uncertainty handling",
      "Sensitive-topic escalation",
      "Account-level permissions",
      "Human review rules",
      "Response quality evaluation",
      "Complete interaction trace",
    ],
    outcomes: [
      "Time to first useful action",
      "Resolution cycle time",
      "Reopen rate",
      "Escalation rate",
      "Human review time",
      "Policy compliance",
      "Customer satisfaction",
    ],
    href: "/use-cases/customer-operations",
    cta: { label: "Assess the Workflow", href: "/assessment" },
    homepageCta: "Explore customer operations",
  },
  {
    slug: "client-onboarding",
    shortTitle: "Client onboarding",
    title: "Move clients from signed agreement to active service with fewer manual handoffs.",
    summary:
      "Collect information, validate documents, identify missing items, trigger follow-ups, and move approved accounts into downstream systems.",
    problem:
      "AI can help coordinate document collection, validation, missing-item detection, follow-up, internal review, data entry, and downstream setup while keeping people in control of approvals.",
    workflow: [
      "Create onboarding record.",
      "Request required information and documents.",
      "Classify and extract submitted content.",
      "Validate required fields and identify missing items.",
      "Trigger follow-up requests.",
      "Route exceptions to the appropriate reviewer.",
      "Create approved records in downstream systems.",
      "Confirm completion and maintain an audit history.",
    ],
    controls: [
      "Required-document rules",
      "Field validation",
      "Duplicate detection",
      "PII handling",
      "Approval gates",
      "Exception queues",
      "Retention policy",
    ],
    outcomes: [
      "Time to activation",
      "Missing-information rate",
      "Manual touches per account",
      "Rework rate",
      "Exception backlog",
      "Onboarding completion rate",
    ],
    href: "/use-cases/client-onboarding",
    cta: { label: "Assess the Workflow", href: "/assessment" },
    homepageCta: "Explore client onboarding",
  },
  {
    slug: "document-processing",
    shortTitle: "Document processing",
    title: "Convert documents into reliable structured work.",
    summary:
      "Classify documents, extract structured data, validate fields, flag uncertainty, and send exceptions to the correct reviewer.",
    problem:
      "A document workflow can classify content, extract fields, validate values, compare information across sources, identify uncertainty, and route exceptions for review.",
    workflow: [
      "Ingestion",
      "File validation",
      "Classification",
      "Extraction",
      "Normalization",
      "Cross-checking",
      "Confidence handling",
      "Human review",
      "System update",
      "Audit and retention",
    ],
    controls: [
      "Field-level validation",
      "Deterministic checks",
      "Source references",
      "Representative evaluation data",
      "Exception routing",
    ],
    outcomes: [
      "Extraction accuracy",
      "Exception rate",
      "Review time per document",
      "Downstream rework",
      "Cycle time to structured record",
    ],
    href: "/use-cases/document-processing",
    cta: { label: "Assess the Workflow", href: "/assessment" },
    homepageCta: "Explore document processing",
  },
  {
    slug: "reporting-automation",
    shortTitle: "Reporting automation",
    title: "Turn scattered operating data into decision-ready reporting.",
    summary:
      "Gather data from multiple systems, reconcile discrepancies, generate cited summaries, highlight anomalies, and prepare decision-ready reports.",
    problem:
      "Reporting workflows can collect information from multiple systems, reconcile mismatches, identify anomalies, generate cited narratives, and prepare a report for final review.",
    workflow: [
      "Collect data from approved systems.",
      "Reconcile mismatches and freshness gaps.",
      "Flag anomalies.",
      "Generate cited narrative summaries.",
      "Prepare report for human approval.",
      "Publish versioned output with source links.",
    ],
    controls: [
      "Source attribution",
      "Data freshness indicators",
      "Reconciliation rules",
      "Anomaly flags",
      "Narrative evaluation",
      "Human approval",
      "Version history",
    ],
    outcomes: [
      "Report cycle time",
      "Manual assembly hours",
      "Anomaly detection rate",
      "Revision count",
      "Decision latency",
    ],
    href: "/use-cases/reporting-automation",
    cta: { label: "Assess the Workflow", href: "/assessment" },
    homepageCta: "Explore reporting automation",
  },
  {
    slug: "internal-knowledge",
    shortTitle: "Internal knowledge",
    title: "Give teams answers grounded in approved internal sources.",
    summary:
      "Give employees controlled access to policies, product information, customer history, and operational guidance with source-grounded answers.",
    problem:
      "Internal knowledge systems can help employees find policies, procedures, product information, customer context, and operational guidance without exposing unauthorized data or inventing unsupported answers.",
    workflow: [
      "Receive employee question.",
      "Apply role and tenant retrieval boundaries.",
      "Retrieve approved sources.",
      "Generate source-grounded answer with citations.",
      "Escalate when evidence is missing or confidence is low.",
      "Capture feedback for content owners.",
    ],
    controls: [
      "Source-grounded answers",
      "Citation links",
      "Role-based retrieval",
      "Freshness metadata",
      "Feedback and correction",
      "Escalation for uncertain answers",
      "Content ownership workflow",
    ],
    outcomes: [
      "Time to answer",
      "Unsupported-answer rate",
      "Escalation rate",
      "Content freshness coverage",
      "Employee self-serve rate",
    ],
    href: "/use-cases/internal-knowledge",
    cta: { label: "Assess the Workflow", href: "/assessment" },
    homepageCta: "Explore internal knowledge",
  },
];

export const productFeatureUseCase = {
  slug: "ai-product-features",
  title: "AI product features",
  summary:
    "Add agentic workflows, copilots, search, generation, and automation to an existing SaaS product without compromising reliability or user control.",
  href: "/solutions/ai-product-engineering",
  homepageCta: "Explore AI product engineering",
} as const;

export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}
