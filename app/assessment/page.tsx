import MarketingShell from "@/app/components/layout/MarketingShell";
import AssessmentForm from "@/app/components/forms/AssessmentForm";
import { PageHero, Section } from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: "AI Workflow Assessment",
  description:
    "Tell us where the work gets stuck. Describe one workflow, the systems involved, and the outcome you need.",
  path: "/assessment",
});

export default function AssessmentPage() {
  return (
    <MarketingShell>
      <PageHero
        title="Tell us where the work gets stuck."
        body="Describe one workflow, the systems involved, and the outcome you need. We will determine whether an assessment, pilot, product engagement, or operations review is the best next step."
      />
      <Section>
        <div className="max-w-2xl">
          <AssessmentForm />
        </div>
      </Section>
    </MarketingShell>
  );
}
