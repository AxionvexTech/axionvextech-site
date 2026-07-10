import type { JobPosting } from "@/content/jobs/types";

export const jobs: JobPosting[] = [
  // No fabricated openings. Talent-network mode is the default until real roles are approved.
];

export function getOpenJobs() {
  return jobs.filter((j) => j.status === "open");
}

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
