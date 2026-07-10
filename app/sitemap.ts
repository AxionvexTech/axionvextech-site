import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { solutions } from "@/content/services";
import { useCases } from "@/content/use-cases";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import { jobs } from "@/content/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/solutions",
    "/use-cases",
    "/work",
    "/ai-standards",
    "/how-we-work",
    "/insights",
    "/about",
    "/careers",
    "/contact",
    "/assessment",
    "/privacy",
    "/terms",
    "/applicant-privacy",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...solutions.map((s) => ({
      url: `${base}${s.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...useCases.map((u) => ({
      url: `${base}${u.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((a) => ({
      url: `${base}/insights/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...jobs
      .filter((j) => j.status === "open")
      .map((j) => ({
        url: `${base}/careers/${j.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.5,
      })),
  ];
}
