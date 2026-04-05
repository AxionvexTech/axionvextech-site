import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import SystemDiagram from "../../components/SystemDiagram";

/* ────────────────────────────────────────────
   Case study data
   ──────────────────────────────────────────── */

const studies = {
  "payment-api-rebuild": {
    category: "Fintech",
    categoryColor: "text-blue-400",
    title: "Payment API Rebuild",
    metaTitle: "Payment API Rebuild — Case Study | AxionvexTech",
    metaDescription:
      "How we redesigned a synchronous payment pipeline into an event-driven architecture that handles peak load without transaction failures.",
    client: "Fintech startup · Series A · Payment processing platform",
    diagram: "payment-api" as const,

    overview:
      "The client operated a payment processing platform serving several hundred businesses. The core payment API handled transaction initiation, provider communication (Stripe and ACH), status tracking, and webhook processing. The system was built as a single synchronous flow — every payment went through one request-response cycle with no retry logic, no event separation, and no audit trail.",

    problem: [
      "Transactions failed silently under peak load because the synchronous pipeline could not handle concurrent requests above a certain threshold. There was no queue, no backpressure, and no retry mechanism.",
      "The Stripe webhook handler was tightly coupled to the main transaction flow. When Stripe sent a delayed webhook, the system sometimes processed it out of order, causing balance mismatches that required manual reconciliation.",
      "There was no audit trail. When a transaction failed or a client disputed a charge, the engineering team had to reconstruct what happened by reading application logs — which were unstructured console.log statements.",
      "The compliance team had flagged the lack of traceability as a blocker for their next regulatory review.",
    ],

    approach: [
      {
        title: "Mapped the existing transaction lifecycle",
        body: "We traced every payment from initiation to settlement, documenting the 14 distinct states a transaction could be in and the transitions between them. This revealed three race conditions that were causing the balance mismatches.",
      },
      {
        title: "Separated the pipeline into discrete events",
        body: "Instead of one synchronous flow, we broke the process into events: payment.initiated, payment.provider_submitted, payment.confirmed, payment.settled. Each event is processed independently with its own handler.",
      },
      {
        title: "Added idempotency and retry logic",
        body: "Every event handler is idempotent — processing the same event twice produces the same result. Failed events go into a retry queue with exponential backoff. After three failures, they move to a dead letter queue for manual review.",
      },
      {
        title: "Built a compliance-ready audit log",
        body: "Every state transition, every external API call, and every webhook received is logged in a structured audit table with timestamps, actor IDs, and payload snapshots. The compliance team can now trace any transaction end-to-end without engineering help.",
      },
      {
        title: "Rebuilt the webhook handler as a separate service",
        body: "Incoming webhooks are validated, logged, and placed into the event queue immediately. They are no longer processed inline with the transaction flow, eliminating the ordering problem entirely.",
      },
    ],

    stackDetails: {
      backend: ["Node.js", "TypeScript", "Express"],
      data: ["PostgreSQL", "Redis (queue + cache)"],
      integrations: ["Stripe API", "ACH provider", "Slack notifications"],
      infrastructure: ["Docker", "AWS ECS", "GitHub Actions CI/CD"],
    },

    timeline: "10 weeks",
    team: "1 senior engineer (AxionvexTech) + 2 internal engineers on the client side",

    outcomes: [
      {
        label: "Transaction failures under load",
        before: "Regular failures during peak hours",
        after: "Zero transaction-level failures in the 3 months following launch",
      },
      {
        label: "Balance reconciliation",
        before: "Weekly manual reconciliation taking 2–3 hours",
        after: "Automated — discrepancies flagged in real time",
      },
      {
        label: "Incident investigation",
        before: "Grep through logs, reconstruct manually",
        after: "Full audit trail searchable by transaction ID in seconds",
      },
      {
        label: "Compliance readiness",
        before: "Flagged as a blocker by compliance team",
        after: "Passed regulatory review without additional remediation",
      },
    ],

    closing:
      "The system has been in production for over six months. The client's CTO noted that the engineering team's confidence in the payment system changed noticeably — they went from avoiding payment-related tickets to actively picking them up.",
  },

  "internal-operations-platform": {
    category: "Internal Systems",
    categoryColor: "text-indigo-400",
    title: "Internal Operations Platform",
    metaTitle: "Internal Operations Platform — Case Study | AxionvexTech",
    metaDescription:
      "How we replaced a patchwork of spreadsheets with a custom operations platform that the team actually uses every day.",
    client: "Operations-heavy SMB · 40 employees · Manual workflow bottleneck",
    diagram: "ops-platform" as const,

    overview:
      "The client ran client onboarding, task assignment, weekly reporting, and compliance tracking across a combination of Google Sheets, email chains, a shared Notion database, and a Slack channel used as an informal task queue. Data was duplicated in at least five places. Nobody fully trusted the numbers in any of them.",

    problem: [
      "The operations manager spent roughly two hours every morning reconciling data across spreadsheets before the team could start their actual work. This was the single largest daily time sink in the company.",
      "Task handoffs between team members happened through Slack messages that were easy to miss, creating a recurring pattern of dropped tasks and duplicated effort.",
      "Reporting to leadership was a manual process that took most of a Friday afternoon. The data was always slightly out of date by the time it was presented.",
      "The company had compliance requirements that mandated an audit trail for certain client-facing actions. The spreadsheet-based system had no way to track who did what and when.",
    ],

    approach: [
      {
        title: "Shadowed the actual workflow before designing anything",
        body: "We spent five days embedded with the operations team, watching how they actually worked — not how the process was documented. This revealed that the documented workflow had diverged significantly from reality. We designed the system around what people actually did.",
      },
      {
        title: "Built task pipelines with status automation",
        body: "Tasks move through defined stages (assigned, in progress, review, complete) with automatic status updates. When a task moves to the next stage, the right person is notified. No more Slack messages getting lost.",
      },
      {
        title: "Role-based access with clear ownership",
        body: "Each user sees only what they need to see. Managers get dashboards. Team members get task lists. Admins get configuration and audit access. This replaced the shared-spreadsheet-for-everyone model that was causing confusion.",
      },
      {
        title: "Built-in audit logging for compliance",
        body: "Every action in the system is logged: who did it, when, what changed. This runs automatically with zero effort from the user. The compliance team can pull a full history for any client record in seconds.",
      },
      {
        title: "Two-week parallel run before cutover",
        body: "Both the old and new systems ran simultaneously for two weeks. The team logged discrepancies. We fixed edge cases. When we cut over, there were no surprises — the team had already been using the new system for their daily work.",
      },
    ],

    stackDetails: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "REST API"],
      data: ["PostgreSQL", "Prisma ORM"],
      infrastructure: ["AWS (EC2, RDS, S3)", "Vercel (frontend)"],
    },

    timeline: "8 weeks",
    team: "1 senior engineer (AxionvexTech) embedded with 3-person ops team on the client side",

    outcomes: [
      {
        label: "Morning reconciliation",
        before: "~2 hours every day",
        after: "Eliminated entirely — data is centralized and live",
      },
      {
        label: "Task handoff errors",
        before: "2–3 dropped tasks per week",
        after: "Near-zero — automated notifications replaced Slack-based handoffs",
      },
      {
        label: "Weekly reporting",
        before: "Most of Friday afternoon, always slightly stale",
        after: "Generated automatically, always current",
      },
      {
        label: "Adoption",
        before: "N/A",
        after: "Still in daily use over a year later — the strongest proof that it was built for real needs",
      },
    ],

    closing:
      "The operations manager told us that the first morning after cutover was the first time in two years she started her day working on strategy instead of spreadsheets. The system is still the central tool the team uses every day.",
  },

  "backend-migration-cleanup": {
    category: "Cloud & Infrastructure",
    categoryColor: "text-slate-400",
    title: "Backend Migration & System Cleanup",
    metaTitle:
      "Backend Migration & System Cleanup — Case Study | AxionvexTech",
    metaDescription:
      "How we took a production backend with no observability and manual deploys, and turned it into a system the on-call team stopped dreading.",
    client: "SaaS platform · B2B · Production system serving paying users",
    diagram: "backend-infra" as const,

    overview:
      "The client ran a Node.js backend serving a B2B SaaS product with several thousand active users. The application was deployed to a single EC2 instance via manual SSH sessions. There was no CI/CD pipeline, no structured logging, no alerting, and the staging environment was configured differently from production — so bugs found in staging were not reliable indicators of production behavior.",

    problem: [
      "Deployments were manual: an engineer would SSH into the production server, pull the latest code, run a build, and restart the process. This took 20–30 minutes and was error-prone. A bad deploy meant SSH-ing back in and reverting manually.",
      "There was no structured logging. The application used console.log for everything. When an incident occurred, the on-call engineer had to SSH into the server and grep through log files to figure out what happened. Two incidents in the past quarter had taken over four hours to resolve.",
      "The staging environment ran on a different OS version, different Node version, and had a different database schema migration applied. Bugs that passed staging regularly appeared in production.",
      "The on-call rotation was dreaded. Engineers would trade shifts to avoid it. The CTO described it as the single biggest morale problem on the team.",
    ],

    approach: [
      {
        title: "Replaced unstructured logging with structured JSON output",
        body: "Every log entry now includes a timestamp, severity level, request ID, user ID (when applicable), and structured context. This took about a week to migrate across the codebase — mostly mechanical work, but critical for everything else.",
      },
      {
        title: "Set up centralized log aggregation and alerting",
        body: "Logs ship to CloudWatch with structured queries. We defined alert thresholds for error rates, response times, and specific failure patterns. The on-call engineer gets a notification with context — not a generic 'server down' ping.",
      },
      {
        title: "Containerized the application",
        body: "We Dockerized the application so the exact same image runs in development, staging, and production. This eliminated the environment-parity problem entirely. The 'works on staging but not production' class of bugs disappeared.",
      },
      {
        title: "Built a deployment pipeline with rollback",
        body: "Push to main triggers: build → test → security scan → deploy to staging → manual approval → deploy to production. A bad deploy can be rolled back in under two minutes. The 20-minute manual SSH deploy became a one-click operation.",
      },
      {
        title: "Added health checks and an incident response runbook",
        body: "Each service has a /health endpoint checked every 30 seconds. We wrote a runbook covering the five most common incident types with step-by-step resolution procedures. New on-call engineers can follow the runbook without needing institutional knowledge.",
      },
    ],

    stackDetails: {
      runtime: ["Node.js", "TypeScript"],
      containers: ["Docker", "AWS ECR"],
      infrastructure: ["AWS ECS", "Terraform", "ALB"],
      observability: ["CloudWatch", "Structured JSON logging", "Health checks"],
      cicd: ["GitHub Actions", "Staged rollout pipeline"],
    },

    timeline: "6 weeks",
    team: "1 senior engineer (AxionvexTech) + 1 internal DevOps-leaning engineer on the client side",

    outcomes: [
      {
        label: "Mean time to resolution",
        before: "2–4 hours per incident",
        after: "Under 15 minutes for most incidents",
      },
      {
        label: "Deploy time",
        before: "20–30 minutes, manual SSH",
        after: "Under 5 minutes, automated with one-click rollback",
      },
      {
        label: "Staging reliability",
        before: "Bugs passed staging regularly",
        after: "Environment parity — staging catches what production would see",
      },
      {
        label: "On-call morale",
        before: "Engineers traded shifts to avoid on-call",
        after: "First rotation after launch: engineer said it was the first time they did not dread the shift",
      },
    ],

    closing:
      "The CTO told us that the infrastructure work changed how the team felt about the product. Before, they were scared of their own system. After, they had the confidence to ship faster because they could see what was happening and fix it quickly when something went wrong.",
  },
};

const studyOrder = [
  "payment-api-rebuild",
  "internal-operations-platform",
  "backend-migration-cleanup",
];

/* ────────────────────────────────────────────
   Static params + metadata
   ──────────────────────────────────────────── */

export function generateStaticParams() {
  return studyOrder.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = studies[params.slug as keyof typeof studies];
  if (!study) return {};
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: `https://axionvextech.com/work/${params.slug}` },
  };
}

/* ────────────────────────────────────────────
   Page component
   ──────────────────────────────────────────── */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = studies[slug as keyof typeof studies];
  if (!study) notFound();

  const currentIndex = studyOrder.indexOf(slug);
  const prevSlug = currentIndex > 0 ? studyOrder[currentIndex - 1] : undefined;
  const nextSlug =
    currentIndex < studyOrder.length - 1
      ? studyOrder[currentIndex + 1]
      : undefined;

  const prevStudy = prevSlug
    ? {
        slug: prevSlug,
        title: studies[prevSlug as keyof typeof studies].title,
      }
    : undefined;
  const nextStudy = nextSlug
    ? {
        slug: nextSlug,
        title: studies[nextSlug as keyof typeof studies].title,
      }
    : undefined;

  return (
    <CaseStudyLayout
      category={study.category}
      categoryColor={study.categoryColor}
      title={study.title}
      client={study.client}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
    >
      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-5">
            Overview
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-5">
            System Architecture
          </h2>
          <SystemDiagram variant={study.diagram} />
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-5">
            The Problem
          </h2>
          <div className="space-y-5">
            {study.problem.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 flex-shrink-0" />
                <p className="text-slate-600 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-8">
            Technical Approach
          </h2>
          <div className="space-y-10">
            {study.approach.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack + Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-5">
                Tech Stack
              </h2>
              <div className="space-y-4">
                {Object.entries(study.stackDetails).map(([group, techs]) => (
                  <div key={group}>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                      {group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-5">
                Engagement Details
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">
                    Timeline
                  </p>
                  <p className="text-slate-900 font-bold">{study.timeline}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">
                    Team
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {study.team}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-wide mb-8">
            Outcomes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.outcomes.map((o) => (
              <div
                key={o.label}
                className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-6"
              >
                <p className="text-white font-semibold text-sm mb-4">
                  {o.label}
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400/70 text-xs font-bold mt-0.5 flex-shrink-0">
                      Before
                    </span>
                    <p className="text-slate-400 text-sm">{o.before}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 text-xs font-bold mt-0.5 flex-shrink-0">
                      After
                    </span>
                    <p className="text-slate-300 text-sm">{o.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mt-12 border-t border-white/[0.06] pt-10">
            <p className="text-slate-400 leading-relaxed italic">
              &ldquo;{study.closing}&rdquo;
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
