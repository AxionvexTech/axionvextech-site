import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import SystemDiagram from "../../components/SystemDiagram";
import { createMetadata } from "@/app/lib/seo";

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
    client: "Client name withheld under NDA · Fintech payments platform",
    diagram: "payment-api" as const,

    overview:
      "The engagement redesigned a payment processing API that handled transaction initiation, provider communication, status tracking, and webhook processing. The prior system ran as a single synchronous flow with limited retry behavior and limited auditability.",

    problem: [
      "Peak-load failures were difficult to contain because the synchronous pipeline lacked queueing, backpressure, and dependable retry behavior.",
      "Webhook handling was tightly coupled to the main transaction flow, which made out-of-order provider events harder to process safely.",
      "Investigation depended on unstructured application logs rather than a searchable audit trail.",
      "Compliance review required stronger traceability for transaction state changes.",
    ],

    approach: [
      {
        title: "Mapped the existing transaction lifecycle",
        body: "We traced payment states and transitions to identify race conditions and failure points before changing architecture.",
      },
      {
        title: "Separated the pipeline into discrete events",
        body: "The process was broken into independent events such as initiation, provider submission, confirmation, and settlement, each with its own handler.",
      },
      {
        title: "Added idempotency and retry logic",
        body: "Handlers were designed to be idempotent. Failed events retry with backoff and move to a dead-letter path for review after repeated failure.",
      },
      {
        title: "Built a compliance-oriented audit log",
        body: "State transitions, external API calls, and webhook receipts were recorded with timestamps and payload context for end-to-end investigation.",
      },
      {
        title: "Rebuilt the webhook handler as a separate path",
        body: "Incoming webhooks are validated, logged, and queued instead of being processed inline with the primary transaction request.",
      },
    ],

    stackDetails: {
      backend: ["Node.js", "TypeScript", "Express"],
      data: ["PostgreSQL", "Redis (queue + cache)"],
      integrations: ["Stripe API", "ACH provider", "Slack notifications"],
      infrastructure: ["Docker", "AWS ECS", "GitHub Actions CI/CD"],
    },

    timeline: "Approximately 10 weeks (subject to verification)",
    team: "Senior Axionvex Tech engineer with client engineering counterparts",

    outcomes: [
      {
        label: "Load resilience",
        before: "Synchronous path with limited failure isolation",
        after: "Queued, idempotent processing with retry and dead-letter handling",
        status: "design_change" as const,
      },
      {
        label: "Traceability",
        before: "Unstructured logs for incident reconstruction",
        after: "Structured audit history for transaction investigation",
        status: "design_change" as const,
      },
      {
        label: "Measured production results",
        before: "Baseline metrics not yet published",
        after: "Numeric outcomes withheld pending verification",
        status: "pending_verification" as const,
      },
    ],

    closing:
      "Architecture, controls, and implementation notes are published. Measured before/after figures and client attribution remain pending verification.",
  },

  "internal-operations-platform": {
    category: "Internal Systems",
    categoryColor: "text-indigo-400",
    title: "Internal Operations Platform",
    metaTitle: "Internal Operations Platform — Case Study | AxionvexTech",
    metaDescription:
      "How a spreadsheet-heavy operations process was replaced with a custom platform with workflow stages, RBAC, and audit logging.",
    client: "Internal Axionvex system · Operations workflow platform",
    diagram: "ops-platform" as const,

    overview:
      "This internal system replaced fragmented spreadsheet, email, and chat-based operations work with a single platform for task flow, ownership, reporting support, and audit history.",

    problem: [
      "Operational data lived across spreadsheets, email, and informal chat queues, which made ownership and status hard to trust.",
      "Handoffs depended on messages that were easy to miss.",
      "Leadership reporting required manual assembly and was often stale by presentation time.",
      "Certain actions needed an audit trail that spreadsheets could not provide reliably.",
    ],

    approach: [
      {
        title: "Mapped the real operating workflow before design",
        body: "The build started from observed work patterns rather than an idealized process document.",
      },
      {
        title: "Built task pipelines with status automation",
        body: "Tasks move through defined stages with notifications tied to ownership changes.",
      },
      {
        title: "Role-based access with clear ownership",
        body: "Views and permissions were scoped by role so people see the work they own.",
      },
      {
        title: "Built-in audit logging",
        body: "Material actions are logged with actor, time, and change context.",
      },
      {
        title: "Parallel run before cutover",
        body: "Old and new processes ran together long enough to catch edge cases before full cutover.",
      },
    ],

    stackDetails: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "REST API"],
      data: ["PostgreSQL", "Prisma ORM"],
      infrastructure: ["AWS (EC2, RDS, S3)", "Vercel (frontend)"],
    },

    timeline: "Approximately 8 weeks (subject to verification)",
    team: "Senior Axionvex Tech engineer with internal operators as design partners",

    outcomes: [
      {
        label: "Workflow centralization",
        before: "Fragmented spreadsheets and chat handoffs",
        after: "Single system of record for task state and ownership",
        status: "design_change" as const,
      },
      {
        label: "Compliance support",
        before: "No dependable action history",
        after: "Audit log for material client-facing actions",
        status: "design_change" as const,
      },
      {
        label: "Measured production results",
        before: "Baseline metrics not yet published",
        after: "Numeric outcomes withheld pending verification",
        status: "pending_verification" as const,
      },
    ],

    closing:
      "Published as an internal system. Quantitative time-saved claims remain pending verification before public use.",
  },

  "backend-migration-cleanup": {
    category: "Cloud & Infrastructure",
    categoryColor: "text-slate-400",
    title: "Backend Migration & System Cleanup",
    metaTitle:
      "Backend Migration & System Cleanup — Case Study | AxionvexTech",
    metaDescription:
      "How a production backend moved from manual deploys and weak observability to containerized delivery with structured logging and rollback.",
    client: "Client name withheld under NDA · B2B SaaS backend",
    diagram: "backend-infra" as const,

    overview:
      "The engagement improved a production Node.js backend that lacked structured logging, reliable staging parity, and automated deployment with rollback.",

    problem: [
      "Production deploys depended on manual SSH sessions, which made release and recovery slow and error-prone.",
      "Logging was unstructured, which made incident investigation harder than it needed to be.",
      "Staging did not match production closely enough to catch environment-specific failures.",
      "On-call work lacked clear runbooks and fast rollback paths.",
    ],

    approach: [
      {
        title: "Replaced unstructured logging with structured output",
        body: "Log entries were standardized with severity, request context, and searchable fields.",
      },
      {
        title: "Set up centralized aggregation and alerting",
        body: "Logs and alerts were wired so on-call engineers receive actionable context rather than opaque failure pings.",
      },
      {
        title: "Containerized the application",
        body: "The same image path was used across environments to reduce parity drift.",
      },
      {
        title: "Built a deployment pipeline with rollback",
        body: "CI/CD covered build, test, staged promotion, and fast rollback for bad releases.",
      },
      {
        title: "Added health checks and an incident runbook",
        body: "Service health endpoints and written response procedures reduced dependence on tribal knowledge.",
      },
    ],

    stackDetails: {
      runtime: ["Node.js", "TypeScript"],
      containers: ["Docker", "AWS ECR"],
      infrastructure: ["AWS ECS", "Terraform", "ALB"],
      observability: ["CloudWatch", "Structured JSON logging", "Health checks"],
      cicd: ["GitHub Actions", "Staged rollout pipeline"],
    },

    timeline: "Approximately 6 weeks (subject to verification)",
    team: "Senior Axionvex Tech engineer with client engineering counterparts",

    outcomes: [
      {
        label: "Release control",
        before: "Manual SSH deploy and recovery",
        after: "Automated pipeline with staged promotion and rollback",
        status: "design_change" as const,
      },
      {
        label: "Observability",
        before: "Unstructured console logs",
        after: "Structured logging, aggregation, and alert context",
        status: "design_change" as const,
      },
      {
        label: "Measured production results",
        before: "Baseline metrics not yet published",
        after: "Numeric outcomes withheld pending verification",
        status: "pending_verification" as const,
      },
    ],

    closing:
      "Architecture and operating controls are documented. MTTR, deploy-time, and morale claims remain pending verification.",
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = studies[slug as keyof typeof studies];
  if (!study) return {};
  return createMetadata({
    title: study.title,
    description: study.metaDescription,
    path: `/work/${slug}`,
  });
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
      title={study.title}
      client={study.client}
      proofType={
        slug === "internal-operations-platform" ? "internal_system" : "nda_client"
      }
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
          <h2 className="text-sm font-bold text-white uppercase tracking-wide mb-3">
            Outcomes
          </h2>
          <p className="mb-8 text-sm text-slate-400">
            Design and control changes are listed below. Numeric claims stay
            unpublished until measurement is verified.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.outcomes.map((o) => (
              <div
                key={o.label}
                className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-white font-semibold text-sm">{o.label}</p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-slate-400">
                    {o.status === "pending_verification"
                      ? "Pending verification"
                      : "Design change"}
                  </span>
                </div>
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

          <div className="mt-12 border-t border-white/[0.06] pt-10">
            <p className="text-slate-400 leading-relaxed">{study.closing}</p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
