import { notFound } from "next/navigation";
import MarketingShell from "@/app/components/layout/MarketingShell";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/app/components/marketing/ui";
import { getJob, jobs } from "@/content/jobs";
import { recruitingConfig, siteConfig } from "@/content/site";
import { createMetadata } from "@/app/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return createMetadata({
    title: job.title,
    description: job.summary,
    path: `/careers/${job.slug}`,
  });
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job || job.status === "closed") notFound();

  return (
    <MarketingShell>
      <PageHero
        eyebrow={job.department}
        title={job.title}
        body={job.summary}
        actions={
          <ButtonLink
            href={
              job.applicationUrl ||
              `mailto:${job.applicationEmail || siteConfig.primaryEmail}?subject=${encodeURIComponent(job.title)}`
            }
          >
            Apply
          </ButtonLink>
        }
      />
      <Section>
        <p className="text-sm text-slate-600">
          {job.locationLabel}
          {job.timezoneOverlap ? ` · ${job.timezoneOverlap}` : ""}
          {" · "}
          {job.employmentType.replace("_", " ")}
        </p>
        {recruitingConfig.showCompensation && job.compensation ? (
          <p className="mt-3 text-[var(--text-body)]">
            Compensation: {job.compensation.note || "Shared during process"}
          </p>
        ) : null}
      </Section>
      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">Outcomes in the first 90 days</SectionHeading>
        <ul className="mt-4 space-y-2">
          {job.outcomes.map((o) => (
            <li key={o}>· {o}</li>
          ))}
        </ul>
      </Section>
      <Section>
        <SectionHeading className="text-ink-950">Responsibilities</SectionHeading>
        <ul className="mt-4 space-y-2">
          {job.responsibilities.map((o) => (
            <li key={o}>· {o}</li>
          ))}
        </ul>
      </Section>
      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">Requirements</SectionHeading>
        <ul className="mt-4 space-y-2">
          {job.requirements.map((o) => (
            <li key={o}>· {o}</li>
          ))}
        </ul>
      </Section>
      {recruitingConfig.showApplicantSafety ? (
        <Section dark>
          <SectionHeading className="text-white">Applicant safety</SectionHeading>
          <p className="mt-4 max-w-3xl text-slate-300">
            Axionvex Tech does not charge application fees and does not require
            credential sharing, account rental, impersonation, or hidden device
            access.
          </p>
        </Section>
      ) : null}
    </MarketingShell>
  );
}
