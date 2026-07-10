import type { JobPosting } from "@/content/jobs/types";

/** Open roles restored for the public careers experience. Update status to hide without code changes. */
export const jobs: JobPosting[] = [
  {
    slug: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    locationLabel: "Remote",
    workplaceType: "remote",
    remoteRegions: ["Worldwide with timezone overlap"],
    timezoneOverlap: "US business hours preferred",
    employmentType: "full_time",
    status: "open",
    featured: true,
    summary:
      "Senior engineers who own delivery from planning through production support. Strong async communication and documentation discipline required.",
    outcomes: [
      "Own scoped delivery from plan through production support",
      "Keep documentation and handoffs current",
      "Raise risk early and communicate clearly in writing",
    ],
    responsibilities: [
      "Build and maintain production systems with clear ownership",
      "Participate in code review and CI discipline",
      "Document decisions and operating notes for handoff",
      "Collaborate asynchronously across time zones",
    ],
    requirements: [
      "Production system ownership experience",
      "Async-first communication",
      "Code review and CI discipline",
      "Clear written English",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Role-relevant practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
  {
    slug: "full-stack-web-developer",
    title: "Full-Stack Web Developer",
    department: "Engineering",
    locationLabel: "Remote",
    workplaceType: "remote",
    employmentType: "full_time",
    status: "open",
    featured: true,
    summary:
      "Build and ship full-stack web applications with production quality, clear documentation, and reliable delivery habits.",
    outcomes: [
      "Ship features end to end across frontend and backend",
      "Maintain quality gates and review standards",
      "Document implementation decisions for the next owner",
    ],
    responsibilities: [
      "Implement product and internal tooling features",
      "Integrate APIs, data stores, and UI flows",
      "Write tests and maintain CI health",
      "Support releases and production fixes when needed",
    ],
    requirements: [
      "Full-stack web development experience",
      "Comfort with modern TypeScript/React or equivalent",
      "Production debugging and delivery discipline",
      "Clear written communication",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    locationLabel: "Remote",
    workplaceType: "remote",
    employmentType: "full_time",
    status: "open",
    summary:
      "Build accessible, maintainable product interfaces with strong attention to UX quality and delivery discipline.",
    outcomes: [
      "Ship polished UI with accessible interactions",
      "Keep component and state patterns maintainable",
      "Collaborate cleanly with backend and product partners",
    ],
    responsibilities: [
      "Implement responsive product interfaces",
      "Improve usability, accessibility, and performance",
      "Participate in reviews and release readiness",
    ],
    requirements: [
      "Modern frontend experience",
      "Strong HTML/CSS/TypeScript fundamentals",
      "Async collaboration habits",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    locationLabel: "Remote",
    workplaceType: "remote",
    employmentType: "full_time",
    status: "open",
    summary:
      "Design and operate reliable backend services, integrations, and data flows with clear ownership and observability.",
    outcomes: [
      "Deliver stable APIs and service boundaries",
      "Improve reliability, logging, and failure handling",
      "Document operating procedures for handoff",
    ],
    responsibilities: [
      "Build and maintain backend services and integrations",
      "Handle auth, data validation, and operational controls",
      "Support monitoring, incidents, and release quality",
    ],
    requirements: [
      "Backend or platform engineering experience",
      "API and data modeling fundamentals",
      "Production ownership mindset",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
  {
    slug: "client-facing-technical-lead",
    title: "Client-Facing Technical Lead",
    department: "Client Delivery",
    locationLabel: "Remote",
    workplaceType: "remote",
    employmentType: "full_time",
    status: "open",
    featured: true,
    summary:
      "Technical leads who translate business priorities into executable engineering plans and support client communication with clarity.",
    outcomes: [
      "Translate scope into clear delivery plans",
      "Keep clients informed with accurate technical status",
      "Protect quality and accountability across handoffs",
    ],
    responsibilities: [
      "Lead technical communication with clients",
      "Convert business needs into scoped engineering work",
      "Coordinate delivery updates and risk visibility",
    ],
    requirements: [
      "Technical communication strength",
      "Scope translation experience",
      "Client accountability and written clarity",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
  {
    slug: "recruiter-talent-sourcer",
    title: "Recruiter / Talent Sourcer",
    department: "Recruiting & People Operations",
    locationLabel: "Remote",
    workplaceType: "remote",
    employmentType: "full_time",
    status: "open",
    featured: true,
    summary:
      "Recruiters and talent operators who run structured, well-documented pipelines. Reliability and clear communication are the core requirements.",
    outcomes: [
      "Keep pipelines documented and current",
      "Communicate clearly with candidates",
      "Maintain process accountability",
    ],
    responsibilities: [
      "Source and screen candidates for open roles",
      "Maintain pipeline documentation",
      "Coordinate evaluation steps and follow-ups",
    ],
    requirements: [
      "Pipeline documentation discipline",
      "Candidate communication quality",
      "Process accountability",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
  {
    slug: "delivery-coordinator",
    title: "Delivery Coordinator",
    department: "Delivery Operations",
    locationLabel: "Remote",
    workplaceType: "remote",
    employmentType: "full_time",
    status: "open",
    featured: true,
    summary:
      "Operators who keep delivery systems, communication, and handoffs clean and reliable. Attention to process and documentation is essential.",
    outcomes: [
      "Keep delivery handoffs reliable",
      "Maintain process and documentation quality",
      "Surface blockers before they become incidents",
    ],
    responsibilities: [
      "Coordinate delivery communication and status",
      "Maintain handoff and documentation standards",
      "Support process reliability across teams",
    ],
    requirements: [
      "Handoff discipline",
      "Process reliability",
      "Documentation quality",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
  {
    slug: "talent-operations-coordinator",
    title: "Talent & Operations Coordinator",
    department: "Recruiting & People Operations",
    locationLabel: "Remote",
    workplaceType: "remote",
    employmentType: "full_time",
    status: "open",
    summary:
      "Coordinate recruiting and delivery operations with clean handoffs, reliable tracking, and clear written updates.",
    outcomes: [
      "Keep recruiting and ops workflows organized",
      "Reduce dropped handoffs",
      "Maintain accurate status records",
    ],
    responsibilities: [
      "Coordinate candidate and delivery operations tasks",
      "Track status and escalate blockers early",
      "Maintain documentation quality",
    ],
    requirements: [
      "Operations coordination experience",
      "Strong written communication",
      "Attention to process detail",
    ],
    process: [
      "Application review",
      "Introductory conversation",
      "Practical evaluation",
      "Team discussion",
      "Written offer or agreement",
    ],
    postedAt: "2026-07-10",
  },
];

/** Titles available in the application form, including general interest. */
export const applicationRoleOptions = [
  ...jobs.filter((j) => j.status === "open" || j.status === "paused").map((job) => job.title),
  "Other / Future Role",
] as const;

export function getOpenJobs() {
  return jobs.filter((j) => j.status === "open");
}

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
