import { notFound } from "next/navigation";
import { UseCaseDetail } from "@/app/components/marketing/UseCaseDetail";
import { getUseCase } from "@/content/use-cases";
import { createMetadata } from "@/app/lib/seo";

const slug = "ai-product-features";

export const metadata = createMetadata({
  title: "AI Product Features",
  description:
    "Add agentic workflows, copilots, search, generation, and automation to an existing SaaS product with production controls.",
  path: `/use-cases/${slug}`,
});

export default function Page() {
  const useCase = getUseCase(slug);
  if (!useCase) notFound();
  return <UseCaseDetail useCase={useCase} />;
}
