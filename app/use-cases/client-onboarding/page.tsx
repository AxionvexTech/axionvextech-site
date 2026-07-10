import { notFound } from "next/navigation";
import { UseCaseDetail } from "@/app/components/marketing/UseCaseDetail";
import { getUseCase } from "@/content/use-cases";
import { createMetadata } from "@/app/lib/seo";

const slug = "client-onboarding";
const titles: Record<string, { title: string; description: string }> = {
  "customer-operations": {
    title: "Customer Operations",
    description: "Resolve more customer work without losing context or accountability.",
  },
  "client-onboarding": {
    title: "Client Onboarding",
    description: "Move clients from signed agreement to active service with fewer manual handoffs.",
  },
  "document-processing": {
    title: "Document Processing",
    description: "Convert documents into reliable structured work.",
  },
  "reporting-automation": {
    title: "Reporting Automation",
    description: "Turn scattered operating data into decision-ready reporting.",
  },
  "internal-knowledge": {
    title: "Internal Knowledge",
    description: "Give teams answers grounded in approved internal sources.",
  },
};

export const metadata = createMetadata({
  title: titles[slug].title,
  description: titles[slug].description,
  path: `/use-cases/${slug}`,
});

export default function Page() {
  const useCase = getUseCase(slug);
  if (!useCase) notFound();
  return <UseCaseDetail useCase={useCase} />;
}
