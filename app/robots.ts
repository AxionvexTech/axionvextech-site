import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/portal/", "/api/", "/auth/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
