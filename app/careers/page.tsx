import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import EditorialImage from "@/app/components/diagrams/EditorialImage";
import {
  ButtonLink,
  Eyebrow,
  PageHero,
  Section,
  SectionHeading,
} from "@/app/components/marketing/ui";
import { createMetadata } from "@/app/lib/seo";
import { recruitingConfig, siteConfig } from "@/content/site";
import { getOpenJobs } from "@/content/jobs";

export const metadata = createMetadata({
  title: "Careers at Axionvex Tech",
  description:
    "Explore engineering, product, delivery, and operations opportunities at Axionvex Tech.",
  path: "/careers",
});

export default function CareersPage() {
  const openJobs = getOpenJobs();
  const mode = recruitingConfig.mode;

  return (
    <MarketingShell>
      <PageHero
        eyebrow="Careers"
        title="Build systems people depend on."
        body="We work with senior engineers, product builders, delivery operators, and client-facing specialists who value clear ownership, direct communication, and reliable execution."
        actions={
          mode === "open_roles" ? (
            <ButtonLink href="#roles">View Open Roles</ButtonLink>
          ) : mode === "talent_network" ? (
            <ButtonLink href="#talent-network">Join the Talent Network</ButtonLink>
          ) : undefined
        }
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading className="text-ink-950">
              High ownership without unnecessary ceremony.
            </SectionHeading>
            <div className="mt-8 grid gap-6">
              {[
                {
                  t: "Clear outcomes",
                  b: "Work is organized around defined deliverables, decisions, users, and operating consequences.",
                },
                {
                  t: "Senior collaboration",
                  b: "Team members are expected to explain tradeoffs, surface risk, document decisions, and help others move work forward.",
                },
                {
                  t: "Remote discipline",
                  b: "Remote work requires dependable communication, realistic availability, written context, and respect for time zones.",
                },
              ].map((item) => (
                <article key={item.t}>
                  <h3 className="font-semibold text-ink-950">{item.t}</h3>
                  <p className="mt-2 text-[var(--text-body)]">{item.b}</p>
                </article>
              ))}
            </div>
          </div>
          <EditorialImage variant="workingSession" priority />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              t: "Practical AI use",
              b: "AI-assisted development is welcome when outputs are reviewed, tested, secure, and consistent with project requirements.",
            },
            {
              t: "Honest status",
              b: "Risks, blockers, mistakes, and uncertainty should be raised early. Hidden problems are more expensive than visible ones.",
            },
          ].map((item) => (
            <article key={item.t}>
              <h3 className="font-semibold text-ink-950">{item.t}</h3>
              <p className="mt-2 text-[var(--text-body)]">{item.b}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="roles" className="bg-paper-100/70">
        <Eyebrow>Open roles</Eyebrow>
        <SectionHeading className="text-ink-950">Current openings</SectionHeading>
        {mode === "closed" ? (
          <p className="mt-4 max-w-xl text-[var(--text-body)]">
            Applications are not being accepted at this time.
          </p>
        ) : mode === "open_roles" && openJobs.length > 0 ? (
          <div className="mt-8 grid gap-4">
            {openJobs.map((job) => (
              <article key={job.slug} className="surface-card p-5">
                <h3 className="text-lg font-semibold text-ink-950">{job.title}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {job.department} · {job.locationLabel} · {job.employmentType.replace("_", " ")}
                </p>
                <p className="mt-3 text-[var(--text-body)]">{job.summary}</p>
                <Link
                  href={`/careers/${job.slug}`}
                  className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  View role
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-4 max-w-xl text-[var(--text-body)]">
            There are no published openings right now. Qualified candidates can
            join the talent network for future consideration.
          </p>
        )}
      </Section>

      {mode !== "closed" ? (
        <Section id="talent-network">
          <SectionHeading className="text-ink-950">Talent network</SectionHeading>
          <p className="mt-4 max-w-2xl text-[var(--text-body)]">
            Submit a general profile for future consideration. Do not share
            platform credentials, government ID, or bank details in the initial
            application.
          </p>
          <div className="mt-6">
            <ButtonLink href={`mailto:${siteConfig.primaryEmail}?subject=Talent%20Network`}>
              Email your profile
            </ButtonLink>
          </div>
        </Section>
      ) : null}

      <Section className="bg-paper-100/70">
        <SectionHeading className="text-ink-950">A direct, respectful process.</SectionHeading>
        <ol className="mt-6 space-y-4">
          {[
            ["Application review", "We review relevant experience, communication, work samples, and role alignment."],
            ["Introductory conversation", "A short conversation about the role, availability, working conditions, and expectations."],
            ["Practical evaluation", "Depending on the role, this may be a technical discussion, portfolio review, paid work sample, or role-relevant exercise. Any unpaid exercise must be limited and must not produce client work."],
            ["Team discussion", "Meet the people responsible for the work and discuss real operating scenarios."],
            ["Written offer or agreement", "Compensation, scope, schedule, ownership, confidentiality, and termination terms are confirmed in writing."],
          ].map(([t, b], i) => (
            <li key={t} className="grid gap-1 md:grid-cols-[4rem_1fr]">
              <span className="font-mono text-sm text-slate-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-ink-950">{t}</h3>
                <p className="text-[var(--text-body)]">{b}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {recruitingConfig.showApplicantSafety ? (
        <Section dark>
          <SectionHeading className="text-white">Applicant safety</SectionHeading>
          <p className="mt-4 max-w-3xl text-slate-300">
            Axionvex Tech does not charge application fees. Applicants are not
            required to rent or transfer online accounts, share personal platform
            credentials, impersonate another person, purchase equipment from a
            named individual, or provide hidden remote access to a personal
            device. Official communication should come from a verified Axionvex
            Tech channel.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Report suspicious contact: {siteConfig.legal.applicantSafetyEmail}
          </p>
          <p className="mt-6 text-sm text-slate-300">
            <Link href="/applicant-privacy" className="underline underline-offset-4">
              Applicant privacy
            </Link>
          </p>
        </Section>
      ) : null}
    </MarketingShell>
  );
}
