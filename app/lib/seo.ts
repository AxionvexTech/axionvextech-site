import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const alreadyBranded =
    title.includes(siteConfig.name) || title.includes("|");
  const resolvedTitle = alreadyBranded
    ? { absolute: title }
    : title;

  return {
    title: resolvedTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: alreadyBranded ? title : `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-default.svg",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: alreadyBranded ? title : `${title} | ${siteConfig.name}`,
      description,
      images: ["/og-default.svg"],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.primaryEmail,
    sameAs: [siteConfig.social.linkedin].filter(Boolean),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
