export type RecruitingMode = "open_roles" | "talent_network" | "closed";

/**
 * Site-wide configuration. Update legal and contact fields here when details change.
 * Policy page bodies live in content/legal.ts. About copy lives in content/about.ts.
 */
export const siteConfig = {
  name: "Axionvex Tech",
  shortName: "Axionvex",
  url: "https://www.axionvextech.com",
  description:
    "Production AI workflow engineering for B2B SaaS and operations-heavy teams.",
  primaryEmail: "contact@axionvextech.com",
  assessmentPath: "/assessment",
  showAnnouncement: false,
  announcement: {
    text: "New: AI workflow assessment for B2B SaaS operations",
    href: "/assessment",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/axionvextech",
    github: "",
  },
  legal: {
    /** Update when registration details are confirmed */
    entity: "Axionvex Tech",
    jurisdiction: "United States",
    address: "Remote-first company. Business correspondence by email.",
    privacyEmail: "contact@axionvextech.com",
    securityEmail: "contact@axionvextech.com",
    applicantSafetyEmail: "contact@axionvextech.com",
    termsEffective: "July 10, 2026",
    privacyEffective: "July 10, 2026",
    operatingModel: "Remote-first professional services",
    primaryTimeZones: "US business hours, with overlap for distributed collaboration",
  },
} as const;

export const recruitingConfig = {
  mode: "talent_network" as RecruitingMode,
  showInPrimaryNav: false,
  showCompensation: false,
  allowGeneralApplication: true,
  showRemotePolicy: true,
  showApplicantSafety: true,
};
