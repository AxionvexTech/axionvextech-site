import { recruitingConfig } from "./site";

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  mega?: {
    groups: {
      title: string;
      items: NavChild[];
    }[];
  };
};

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    mega: {
      groups: [
        {
          title: "Production AI",
          items: [
            {
              label: "AI Workflow Systems",
              href: "/solutions/production-ai-workflows",
              description: "Governed workflows with approvals, evals, and audit trails.",
            },
            {
              label: "Agentic Automation",
              href: "/solutions/production-ai-workflows",
              description: "Tool-using agents with permission boundaries and fallbacks.",
            },
            {
              label: "Document Intelligence",
              href: "/use-cases/document-processing",
              description: "Extract, validate, route, and review with confidence thresholds.",
            },
            {
              label: "Knowledge and RAG Systems",
              href: "/use-cases/internal-knowledge",
              description: "Grounded retrieval with citations and ownership.",
            },
            {
              label: "AI Operations",
              href: "/solutions/ai-operations",
              description: "Regression evals, cost control, and incident support.",
            },
          ],
        },
        {
          title: "Engineering",
          items: [
            {
              label: "AI Product Engineering",
              href: "/solutions/ai-product-engineering",
              description: "Production AI features inside existing SaaS products.",
            },
            {
              label: "Systems Integration",
              href: "/solutions/systems-integration",
              description: "Connect CRM, support, data, and internal tools safely.",
            },
            {
              label: "Product Modernization",
              href: "/solutions/ai-product-engineering",
              description: "Stabilize and extend product platforms for AI workloads.",
            },
            {
              label: "Cloud Reliability",
              href: "/solutions/systems-integration",
              description: "Deploy, observe, and operate production systems.",
            },
          ],
        },
      ],
    },
    children: [
      { label: "Production AI Workflows", href: "/solutions/production-ai-workflows" },
      { label: "AI Product Engineering", href: "/solutions/ai-product-engineering" },
      { label: "AI Operations", href: "/solutions/ai-operations" },
      { label: "Systems Integration", href: "/solutions/systems-integration" },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    children: [
      { label: "Customer Operations", href: "/use-cases/customer-operations" },
      { label: "Client Onboarding", href: "/use-cases/client-onboarding" },
      { label: "Document Processing", href: "/use-cases/document-processing" },
      { label: "Reporting Automation", href: "/use-cases/reporting-automation" },
      { label: "Internal Knowledge", href: "/use-cases/internal-knowledge" },
      { label: "AI Product Features", href: "/use-cases/ai-product-features" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "AI Standards", href: "/ai-standards" },
  { label: "Insights", href: "/insights" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Careers stays out of primary buyer nav unless explicitly enabled. */
export const buyerPrimaryNav: NavItem[] = primaryNav.filter((item) => {
  if (item.label === "Careers") return recruitingConfig.showInPrimaryNav;
  return true;
});

export const footerNav = {
  solutions: [
    { label: "Production AI Workflows", href: "/solutions/production-ai-workflows" },
    { label: "AI Product Engineering", href: "/solutions/ai-product-engineering" },
    { label: "AI Operations", href: "/solutions/ai-operations" },
    { label: "Systems Integration", href: "/solutions/systems-integration" },
  ],
  useCases: [
    { label: "Customer Operations", href: "/use-cases/customer-operations" },
    { label: "Client Onboarding", href: "/use-cases/client-onboarding" },
    { label: "Document Processing", href: "/use-cases/document-processing" },
    { label: "Reporting Automation", href: "/use-cases/reporting-automation" },
    { label: "Internal Knowledge", href: "/use-cases/internal-knowledge" },
    { label: "AI Product Features", href: "/use-cases/ai-product-features" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Work", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "AI Standards", href: "/ai-standards" },
    { label: "Insights", href: "/insights" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Applicant Privacy", href: "/applicant-privacy" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Applicant Privacy", href: "/applicant-privacy" },
  ],
} as const;

export const assessmentCta = {
  label: "Book an Assessment",
  href: "/assessment",
} as const;

export const capabilitySignals = [
  "AI Agents",
  "Workflow Automation",
  "Product Engineering",
  "Evals",
  "Human Approval",
  "Systems Integration",
  "Observability",
  "AI Operations",
] as const;
