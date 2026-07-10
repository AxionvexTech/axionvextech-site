export type JobStatus = "open" | "paused" | "closed";
export type EmploymentType =
  | "full_time"
  | "part_time"
  | "contract"
  | "internship";

export interface JobPosting {
  slug: string;
  title: string;
  department: string;
  locationLabel: string;
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
  postedAt: string;
  updatedAt?: string;
  closesAt?: string;
}
