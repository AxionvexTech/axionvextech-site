import { Suspense } from "react";
import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";
import { createMetadata } from "@/app/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  description:
    "Explore engineering, recruiting, delivery, and operations opportunities at Axionvex Tech.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <Suspense fallback={null}>
      <CareersPageClient />
    </Suspense>
  );
}
