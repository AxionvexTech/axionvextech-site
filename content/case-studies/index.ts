export type ProofType =
  | "verified_client"
  | "nda_client"
  | "internal_system"
  | "technical_demonstration";

export const proofLabels: Record<ProofType, string> = {
  verified_client: "Verified client work",
  nda_client: "Client name withheld under NDA",
  internal_system: "Internal system",
  technical_demonstration: "Technical demonstration",
};

export type CaseStudy = {
  slug: string;
  proofType: ProofType;
  title: string;
  summary: string;
  industry?: string;
  businessType?: string;
  problem: string;
  constraints: string[];
  architecture: string[];
  implementation: string[];
  controls: string[];
  evaluation?: string[];
  results?: {
    statement: string;
    method?: string;
    period?: string;
    status: "measured" | "estimated" | "client_reported" | "in_progress";
  }[];
  stack?: string[];
  featured?: boolean;
  filter: "production_ai" | "ai_product" | "integration" | "reliability" | "internal" | "demo";
  publishedAt: string;
  updatedAt?: string;
  /** Legacy detail content still lives in page until fully migrated */
  legacyDetail?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "payment-api-rebuild",
    proofType: "nda_client",
    title: "Payment API Rebuild",
    summary:
      "Redesigned a synchronous payment pipeline into event-driven architecture with retry logic and an audit trail.",
    industry: "Fintech",
    businessType: "Payments",
    problem:
      "Transactions failed under peak load in a synchronous pipeline without queueing, backpressure, or reliable retries.",
    constraints: ["Peak load", "Compliance audit needs", "Existing Stripe integration"],
    architecture: ["Event-driven pipeline", "Queue and retry", "Audit trail"],
    implementation: ["Node.js services", "PostgreSQL", "Redis"],
    controls: ["Retry policy", "Audit trail", "Observability"],
    results: [
      {
        statement: "Outcome details require verification before publication of numeric claims.",
        status: "in_progress",
      },
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe"],
    featured: true,
    filter: "reliability",
    publishedAt: "2026-03-01",
    legacyDetail: true,
  },
  {
    slug: "internal-operations-platform",
    proofType: "internal_system",
    title: "Internal Operations Platform",
    summary:
      "Custom ops platform replacing spreadsheets and manual steps with workflow automation, RBAC, and audit logging.",
    businessType: "Internal operations",
    problem: "Operational work lived in spreadsheets and ad-hoc handoffs.",
    constraints: ["Role-based access", "Audit logging", "Process fit"],
    architecture: ["Workflow automation", "RBAC", "Audit logging"],
    implementation: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    controls: ["RBAC", "Audit logging"],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    filter: "internal",
    publishedAt: "2026-02-01",
    legacyDetail: true,
  },
  {
    slug: "backend-migration-cleanup",
    proofType: "nda_client",
    title: "Backend Migration & System Cleanup",
    summary:
      "Added observability, container-based deploys, and environment parity to a production backend with manual SSH deploys.",
    businessType: "B2B SaaS",
    problem: "No structured logging, alerting, or reliable staging parity.",
    constraints: ["Live production users", "Manual deploy history", "Environment drift"],
    architecture: ["Container deploys", "Structured logging", "Environment parity"],
    implementation: ["Docker", "AWS ECS", "Terraform", "CloudWatch"],
    controls: ["Monitoring", "Deploy controls"],
    stack: ["Docker", "AWS ECS", "Terraform", "CloudWatch", "Node.js"],
    filter: "reliability",
    publishedAt: "2026-01-01",
    legacyDetail: true,
  },
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "production_ai", label: "Production AI Workflow" },
  { id: "ai_product", label: "AI Product Feature" },
  { id: "integration", label: "Integration" },
  { id: "reliability", label: "Reliability and Migration" },
  { id: "internal", label: "Internal System" },
  { id: "demo", label: "Technical Demonstration" },
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
