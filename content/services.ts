export type Solution = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  body: string;
  href: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const solutions: Solution[] = [
  {
    slug: "production-ai-workflows",
    eyebrow: "Production AI Workflows",
    shortTitle: "Production AI Workflows",
    title: "Turn a manual process into a controlled AI operating system.",
    summary:
      "Automate multi-step business processes with real integrations, permissions, review checkpoints, evaluation, and operational monitoring.",
    body: "We design and implement workflows that gather context, apply AI, follow business rules, call approved tools, involve people at the right points, and leave a complete operational record.",
    href: "/solutions/production-ai-workflows",
    primaryCta: { label: "Plan a workflow assessment", href: "/assessment" },
    secondaryCta: { label: "Review use cases", href: "/use-cases" },
  },
  {
    slug: "ai-product-engineering",
    eyebrow: "AI Product Engineering",
    shortTitle: "AI Product Engineering",
    title: "Add AI to your product without making reliability optional.",
    summary:
      "Add dependable AI features to an existing SaaS product, including agentic workflows, copilots, search, document intelligence, and multimodal experiences.",
    body: "We help SaaS teams design and ship AI features that fit the existing product, data model, permission system, billing model, and support operation.",
    href: "/solutions/ai-product-engineering",
    primaryCta: { label: "Discuss the Product", href: "/assessment" },
  },
  {
    slug: "ai-operations",
    eyebrow: "AI Operations",
    shortTitle: "AI Operations",
    title: "Keep production AI measurable after launch.",
    summary:
      "Maintain quality after launch through evaluation regression checks, model changes, cost controls, monitoring, incident review, and continuous improvement.",
    body: "Models change, user behavior changes, integrations fail, costs drift, and edge cases accumulate. AI operations provides the evaluation, monitoring, review, and improvement process needed to keep the workflow useful.",
    href: "/solutions/ai-operations",
    primaryCta: { label: "Request an Operations Review", href: "/assessment" },
  },
  {
    slug: "systems-integration",
    eyebrow: "Systems Integration",
    shortTitle: "Systems Integration",
    title: "Give AI workflows reliable access to the systems where work happens.",
    summary:
      "Connect business applications, APIs, databases, event streams, and internal services so AI workflows can act on reliable context.",
    body: "We connect applications, data sources, APIs, events, and internal services with clear permissions, validation, retries, and observability.",
    href: "/solutions/systems-integration",
    primaryCta: { label: "Discuss the Systems", href: "/assessment" },
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
