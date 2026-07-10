"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import MarketingShell from "@/app/components/layout/MarketingShell";
import ApplicationForm from "@/app/components/forms/ApplicationForm";
import {
  ButtonLink,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/app/components/marketing/ui";
import { recruitingConfig, siteConfig } from "@/content/site";
import { getOpenJobs } from "@/content/jobs";

const hiringStages = [
  {
    title: "Application",
    applicant: "Submit role preference, contact details, and work evidence.",
    axionvex: "Confirm receipt and route to the hiring track.",
    communication: "Email confirmation with next-step timing.",
    status: "Received",
  },
  {
    title: "Human review",
    applicant: "No action required unless clarification is requested.",
    axionvex: "A person reviews completeness and role fit.",
    communication: "Update if the application advances or needs more detail.",
    status: "In review",
  },
  {
    title: "Role-specific assessment",
    applicant: "Complete a short practical evaluation for the track.",
    axionvex: "Score against role criteria and document notes.",
    communication: "Evaluation link and deadline by email.",
    status: "Assessment",
  },
  {
    title: "Team discussion",
    applicant: "Join a conversation about collaboration and ownership.",
    axionvex: "Discuss tradeoffs, communication, and working terms.",
    communication: "Scheduling link and agenda.",
    status: "Interview",
  },
  {
    title: "Offer or talent network",
    applicant: "Review written terms or join future-role interest list.",
    axionvex: "Issue offer/agreement or retain for matching openings.",
    communication: "Written outcome from a verified Axionvex channel.",
    status: "Decision",
  },
] as const;

const talentCategories = [
  "AI and data",
  "Software engineering",
  "Product and design",
  "Delivery operations",
  "Recruiting and people operations",
  "Client delivery",
] as const;

export default function CareersPageClient() {
  const openJobs = getOpenJobs();
  const featured = openJobs.filter((j) => j.featured);
  const rest = openJobs.filter((j) => !j.featured);
  const orderedJobs = [...featured, ...rest];
  const mode = recruitingConfig.mode;
  const searchParams = useSearchParams();
  const roleFromQuery = searchParams.get("role") || "";
  const [selectedRole, setSelectedRole] = useState("");
  const [talentInterest, setTalentInterest] = useState<string>(talentCategories[0]);
  const activeRole = selectedRole || roleFromQuery;

  useEffect(() => {
    if (!roleFromQuery) return;
    const timer = window.setTimeout(() => {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [roleFromQuery]);

  function applyForRole(title: string) {
    setSelectedRole(title);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <MarketingShell>
      <Section bare className="careers-hero !pt-0 !pb-0">
        <div className="careers-hero__media" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/company/careers-interview-hero.webp"
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
          />
          <div className="careers-hero__veil" />
        </div>
        <div className="container-avx relative z-[1] flex min-h-[min(78vh,720px)] items-center py-16 md:py-20">
          <div className="max-w-xl">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink leading-[1.08] text-balance md:text-5xl lg:text-[3.5rem]">
              Build production systems with people who care how they work.
            </h1>
            <p className="mt-5 text-lg text-ink-secondary">
              Join a focused team working across AI workflows, SaaS products,
              integrations, and production operations. Every open role includes
              clear expectations, selection steps, and working terms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#roles">View Open Roles</ButtonLink>
              <ButtonLink href="#apply" variant="secondary">
                Apply Now
              </ButtonLink>
            </div>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2 text-sm text-ink-secondary">
              <div className="rounded-xl border border-border bg-surface/85 px-4 py-3 backdrop-blur-sm">
                <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
                  Open roles
                </dt>
                <dd className="mt-1 text-lg font-semibold text-ink">{openJobs.length}</dd>
              </div>
              <div className="rounded-xl border border-border bg-surface/85 px-4 py-3 backdrop-blur-sm">
                <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
                  Hiring status
                </dt>
                <dd className="mt-1 text-lg font-semibold text-ink">
                  {mode === "closed"
                    ? "Closed"
                    : mode === "talent_network"
                      ? "Talent network"
                      : "Actively hiring"}
                </dd>
              </div>
              {recruitingConfig.showRemotePolicy ? (
                <div className="rounded-xl border border-border bg-surface/85 px-4 py-3 backdrop-blur-sm sm:col-span-2">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
                    Location
                  </dt>
                  <dd className="mt-1 text-ink">
                    Remote-first · {siteConfig.legal.primaryTimeZones}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </Section>

      <Section id="roles" className="section-soft">
        <Eyebrow>Open roles</Eyebrow>
        <SectionHeading className="text-ink">Current openings</SectionHeading>
        <p className="mt-3 max-w-2xl text-[var(--text-body)]">
          Select a role to review details, or apply directly. Final progression
          decisions are made by people.
        </p>

        {mode === "closed" ? (
          <p className="mt-6 max-w-xl text-[var(--text-body)]">
            Applications are not being accepted at this time.
          </p>
        ) : orderedJobs.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {orderedJobs.map((job) => (
              <article
                key={job.slug}
                data-glow
                className="surface-card flex flex-col p-5 md:p-6 transition hover:-translate-y-0.5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted">
                    {job.department}
                  </p>
                  <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-success">
                    Open
                  </span>
                  {job.featured ? (
                    <span className="rounded-full border border-blue/25 bg-surface-blue px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-blue">
                      Featured
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-ink">{job.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {job.locationLabel} · {job.employmentType.replace("_", " ")}
                  {job.timezoneOverlap ? ` · ${job.timezoneOverlap}` : ""}
                </p>
                <p className="mt-3 flex-1 text-sm text-[var(--text-body)]">{job.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-sm font-semibold text-blue underline-offset-4 hover:underline"
                  >
                    View role
                  </Link>
                  <button
                    type="button"
                    className="text-sm font-semibold text-ink"
                    onClick={() => applyForRole(job.title)}
                  >
                    Apply →
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-6 max-w-xl text-[var(--text-body)]">
            There are no published openings right now. Join the talent network below.
          </p>
        )}
      </Section>

      <Section id="process">
        <Eyebrow>Hiring process</Eyebrow>
        <SectionHeading className="text-ink">A direct, respectful candidate journey</SectionHeading>
        <ol className="mt-8 space-y-4">
          {hiringStages.map((stage, i) => (
            <li
              key={stage.title}
              data-glow
              className="grid gap-4 rounded-[18px] border border-border bg-surface p-5 md:grid-cols-[8rem_1fr]"
            >
              <div>
                <p className="font-mono text-[11px] text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-semibold text-ink">{stage.title}</h3>
                <p className="mt-2 inline-flex rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-ink-muted">
                  {stage.status}
                </p>
              </div>
              <dl className="grid gap-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="font-medium text-ink">Applicant</dt>
                  <dd className="mt-1 text-ink-secondary">{stage.applicant}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Axionvex</dt>
                  <dd className="mt-1 text-ink-secondary">{stage.axionvex}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Communication</dt>
                  <dd className="mt-1 text-ink-secondary">{stage.communication}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="talent-network" className="section-warm">
        <Eyebrow>Talent network</Eyebrow>
        <SectionHeading className="text-ink">Future interest, separate from open roles</SectionHeading>
        <p className="mt-3 max-w-2xl text-[var(--text-body)]">
          Not ready for a specific opening? Share your category of interest and we
          will keep you in mind for future fits.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {talentCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setTalentInterest(cat);
                setSelectedRole("Other / Future Role");
              }}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                talentInterest === cat
                  ? "border-ink bg-ink text-white"
                  : "border-border bg-surface text-ink-secondary hover:border-border-strong"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Selected interest: <span className="font-medium text-ink">{talentInterest}</span>
        </p>
      </Section>

      {recruitingConfig.allowGeneralApplication || openJobs.length > 0 ? (
        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>Apply</Eyebrow>
              <SectionHeading className="text-ink">Submit your application</SectionHeading>
              <p className="mt-3 text-[var(--text-body)]">
                A short multi-step form. Your draft saves in this browser. After
                submitting, you will receive next steps by email when an evaluation
                is configured for your track.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-secondary">
                <li>· No application fees</li>
                <li>· Human review on every submission</li>
                <li>· Clear written communication</li>
              </ul>
              {activeRole ? (
                <p className="mt-6 rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-ink">
                  Applying for: <span className="font-semibold">{activeRole}</span>
                </p>
              ) : null}
            </div>
            <ApplicationForm initialRole={activeRole} />
          </div>
        </Section>
      ) : null}

      {recruitingConfig.showApplicantSafety ? (
        <Section className="bg-surface-soft">
          <SectionHeading className="text-ink">Applicant safety</SectionHeading>
          <p className="mt-4 max-w-3xl text-[var(--text-body)]">
            Axionvex Tech does not require applicants to pay an application fee, buy
            equipment from a designated individual, share private platform
            credentials, rent or sell personal accounts, impersonate another person,
            or allow hidden access to a personal device. Official communication
            should come from a verified Axionvex Tech channel.
          </p>
          <p className="mt-4 text-sm text-ink-secondary">
            Report suspicious contact:{" "}
            <a
              href={`mailto:${siteConfig.legal.applicantSafetyEmail}`}
              className="underline"
            >
              {siteConfig.legal.applicantSafetyEmail}
            </a>
          </p>
          <p className="mt-6 text-sm">
            <Link
              href="/applicant-privacy"
              className="font-semibold text-blue underline-offset-4 hover:underline"
            >
              Applicant privacy
            </Link>
          </p>
        </Section>
      ) : null}
    </MarketingShell>
  );
}
