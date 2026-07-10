import { recruitingConfig } from "./site";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
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
      ...(recruitingConfig.showInPrimaryNav
        ? [{ label: "Careers", href: "/careers" }]
        : []),
      { label: "Contact", href: "/contact" },
    ],
  },
];

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
} as const;

export const assessmentCta = {
  label: "Book an Assessment",
  href: "/assessment",
} as const;
