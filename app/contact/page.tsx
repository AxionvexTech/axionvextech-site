import MarketingShell from "@/app/components/layout/MarketingShell";
import ContactFormLite from "@/app/components/forms/ContactFormLite";
import { ButtonLink, PageHero, Section } from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Axionvex Tech about a production AI workflow, product feature, or operations review.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <MarketingShell>
      <PageHero
        title="Send project context."
        body="Share the workflow, systems, and outcome you care about. For a structured qualification path, use the assessment form."
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <p className="text-[var(--text-body)]">
            Prefer email? Write to{" "}
            <a
              href={`mailto:${siteConfig.primaryEmail}`}
              className="font-medium text-ink-950 underline underline-offset-4"
            >
              {siteConfig.primaryEmail}
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Useful starting information: current process, systems involved,
            users, volume, exception rate, desired outcome, and target timing.
          </p>
          <p className="mt-4 text-sm">
            <ButtonLink href="/assessment" variant="text">
              Or open the AI Workflow Assessment →
            </ButtonLink>
          </p>

          <div className="mt-8">
            <ContactFormLite />
          </div>
        </div>
      </Section>
    </MarketingShell>
  );
}
