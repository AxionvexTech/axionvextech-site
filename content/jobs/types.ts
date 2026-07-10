export type JobStatus = "open" | "paused" | "closed" | "talent-network";
export type EmploymentType =
  | "full_time"
  | "part_time"
  | "contract"
  | "internship"
  | "employee"
  | "contractor";

export type WorkplaceType = "remote" | "hybrid" | "onsite";

export interface JobPosting {
  slug: string;
  title: string;
  department: string;
  locationLabel: string;
  workplaceType?: WorkplaceType;
  remoteRegions?: string[];
  timezoneOverlap?: string;
  employmentType: EmploymentType;
  status: JobStatus;
  featured?: boolean;
  compensation?: {
    min?: number;
    max?: number;
    currency?: string;
    cadence?: "hour" | "month" | "year" | "project";
    period?: "hour" | "month" | "year" | "project";
    note?: string;
  };
  summary: string;
  outcomes: string[];
  responsibilities: string[];
  requirements: string[];
  preferred?: string[];
  process: string[];
  workAuthorization?: string;
  applicationUrl?: string;
  applicationEmail?: string;
  applicationDeadline?: string;
  postedAt: string;
  publishedAt?: string;
  updatedAt?: string;
  closesAt?: string;
}
