import { siteConfig } from "./site";

/**
 * Edit About page copy here. The /about route renders from this file.
 */
export const aboutContent = {
  eyebrow: "About Axionvex Tech",
  title: "Engineering AI systems that businesses can actually operate.",
  heroBody:
    "Axionvex Tech is a senior-led AI and software engineering company focused on production workflows, SaaS product capabilities, systems integration, and ongoing AI operations.",
  statement: {
    heading: "Company statement",
    body: "We work at the boundary between software engineering and business operations. The goal is not to add AI everywhere. The goal is to identify where AI can improve a real workflow, then build the surrounding system required for safe and useful operation.",
  },
  principles: [
    {
      title: "Start with the workflow",
      body: "Technology choices follow the work, users, risks, and measurable outcome.",
    },
    {
      title: "Keep people in control",
      body: "Human approval and escalation belong where the consequences require judgment.",
    },
    {
      title: "Make quality measurable",
      body: "A system that cannot be evaluated cannot be responsibly improved.",
    },
    {
      title: "Design for ownership",
      body: "Architecture, code, documentation, monitoring, and runbooks should support long-term operation.",
    },
    {
      title: "Be honest about uncertainty",
      body: "AI systems have failure modes. We define, measure, and manage them rather than hiding them.",
    },
  ],
  whatWeDo: {
    heading: "What we do",
    body: "We help B2B SaaS and operations-heavy teams design, build, and operate governed AI workflows. That includes workflow design, model and orchestration strategy, systems integration, evaluation, human approval design, cloud deployment, and AI operations after launch.",
    bullets: [
      "Production AI workflow engineering",
      "AI product features for existing SaaS platforms",
      "Systems integration across CRM, support, documents, and data stores",
      "Evaluation, monitoring, and ongoing AI operations",
    ],
  },
  howWeOperate: {
    heading: "How we operate",
    body: "Axionvex Tech is a remote-first delivery company. Clients work directly with the senior people responsible for architecture and implementation. Engagements are scoped around clear outcomes, written decisions, and maintainable ownership.",
    bullets: [
      "Senior-led delivery with direct communication",
      "Written status, decision logs, and handoff documentation",
      "Vendor-neutral architecture choices",
      "Security and privacy handled as part of delivery scoping",
    ],
  },
  companyDetails: [
    { label: "Operating name", value: siteConfig.name },
    { label: "Legal entity", value: siteConfig.legal.entity },
    { label: "Jurisdiction", value: siteConfig.legal.jurisdiction },
    { label: "Correspondence", value: siteConfig.legal.address },
    { label: "Operating model", value: siteConfig.legal.operatingModel },
    { label: "Primary time zones", value: siteConfig.legal.primaryTimeZones },
    { label: "Business contact", value: siteConfig.primaryEmail },
    { label: "Security contact", value: siteConfig.legal.securityEmail },
    { label: "Privacy contact", value: siteConfig.legal.privacyEmail },
  ],
  leadershipNote:
    "Leadership biographies and photos are published when approved for public use. Until then, contact the team through the business email above.",
  cta: {
    label: "Book an Assessment",
    href: "/assessment",
  },
} as const;
