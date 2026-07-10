export type InsightArticle = {
  slug: string;
  title: string;
  summary: string;
  category:
    | "Workflow Design"
    | "Agent Evaluation"
    | "AI Operations"
    | "Product Engineering"
    | "Integration Architecture"
    | "Security and Governance"
    | "Delivery Notes";
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  takeaways: string[];
  body: string[];
  relatedServices?: string[];
  relatedCaseStudy?: string;
};

export const insights: InsightArticle[] = [
  {
    slug: "first-production-ai-workflow",
    title: "How to select the first production AI workflow",
    summary:
      "Pick a bounded workflow with clear inputs, decisions, actions, and measurable consequences before you scale AI across the business.",
    category: "Workflow Design",
    author: "Axionvex Tech",
    publishedAt: "2026-07-10",
    readingTime: "7 min",
    relatedServices: ["/solutions/production-ai-workflows", "/assessment"],
    takeaways: [
      "Start with one workflow that already has volume and known exceptions.",
      "Prefer processes where a person can review uncertain or high-impact cases.",
      "Define the measurement baseline before the pilot begins.",
      "Avoid workflows that are fully deterministic or fully undefined.",
    ],
    body: [
      "Most teams do not fail at production AI because the model is weak. They fail because they pick the wrong first workflow. The first engagement should prove that AI can operate inside a real process with controls, not that a demo can generate fluent text.",
      "A strong first candidate is repetitive but not fully deterministic. It has enough volume to matter, enough judgment to justify a model, and enough structure to evaluate. Customer triage, document intake, onboarding checks, and recurring reporting often fit. Open-ended strategy work usually does not.",
      "Before design starts, write down the inputs, decisions, actions, and business consequences. If you cannot name the systems involved, the exception paths, or the owner of the outcome, the workflow is not ready. AI will amplify that ambiguity.",
      "Also decide what success means in operational terms. Cycle time, reopen rate, review burden, exception rate, and cost per completed case are more useful than vague claims about transformation. Capture a baseline while the current process is still manual.",
      "Finally, confirm that human review is practical for uncertain or high-impact cases. Production AI is easier to trust when the system can escalate. Fully autonomous action is a later decision, not a starting requirement.",
      "If you want a structured pass on suitability, architecture, and pilot scope, begin with a workflow assessment rather than a broad platform build.",
    ],
  },
  {
    slug: "evaluation-suite-for-agentic-workflows",
    title: "What an evaluation suite for an agentic workflow should contain",
    summary:
      "An agentic workflow needs more than prompt spot-checks. Define expected behavior, failure categories, release thresholds, and regression coverage before broad deployment.",
    category: "Agent Evaluation",
    author: "Axionvex Tech",
    publishedAt: "2026-07-10",
    readingTime: "8 min",
    relatedServices: ["/ai-standards", "/solutions/ai-operations"],
    takeaways: [
      "Evaluation starts with expected behavior and failure taxonomy, not model brand preference.",
      "Include representative, edge, and misuse cases in the suite.",
      "Set release thresholds before production traffic expands.",
      "Regression runs should cover tool selection, grounding, and escalation quality.",
    ],
    body: [
      "An agentic workflow can retrieve context, choose tools, draft actions, and request approval. That means evaluation has to cover more than answer quality. If you only spot-check a few happy-path prompts, you will learn too late where the system breaks.",
      "Start by defining expected behavior in plain language. What should the workflow do with complete inputs? What should it do when evidence is missing? When should it escalate instead of acting? Those statements become the backbone of the suite.",
      "Next, build a failure taxonomy. Common categories include incorrect classification, weak grounding, wrong tool selection, unsafe action proposals, missed escalations, and brittle handling of incomplete data. Every test case should map to one or more of those categories.",
      "The dataset should mix representative production-like cases, known edge cases, and adversarial or misuse cases where relevant. Synthetic examples help, but they are not a substitute for anonymized or sanitized examples drawn from real operating conditions.",
      "Release thresholds belong in the plan before launch. Decide what pass rate, escalation quality, and critical-failure rate are acceptable. Without thresholds, every demo looks good enough and every regression becomes a debate.",
      "After launch, keep the suite as a regression gate for prompt, model, and tool changes. Evaluation is not a one-time launch checklist. It is part of operating the workflow.",
    ],
  },
  {
    slug: "human-approval-confidence-and-fallbacks",
    title: "When to use human approval, confidence thresholds, and fallbacks",
    summary:
      "Use human approval where consequences are high, confidence thresholds where uncertainty is measurable, and fallbacks where systems or models fail predictably.",
    category: "Security and Governance",
    author: "Axionvex Tech",
    publishedAt: "2026-07-10",
    readingTime: "6 min",
    relatedServices: ["/ai-standards", "/solutions/production-ai-workflows"],
    takeaways: [
      "Approval belongs on consequence, uncertainty, reversibility, and policy.",
      "Model confidence is a signal, not proof of correctness.",
      "Fallbacks should be explicit for outages, low confidence, and integration failure.",
      "Document who owns each control after handoff.",
    ],
    body: [
      "Human approval is not a sign that the AI failed. It is a control for decisions with financial, legal, customer, or operational consequences. If an action is hard to reverse or creates an external commitment, keep a person in the path until evidence says otherwise.",
      "Confidence thresholds can reduce review burden, but they are easy to misuse. A high confidence score does not prove the answer is correct. Pair confidence with deterministic checks, source grounding, policy rules, and evaluation coverage. Treat confidence as one input to routing, not as a substitute for validation.",
      "Fallbacks cover the cases where the preferred path cannot complete safely. Unavailable models, incomplete context, tool timeouts, and low-confidence exceptions all need a defined next step. That may be a simpler model, a deterministic rule, a queue for human review, or a graceful stop with a clear user message.",
      "The design question is not whether the system is autonomous. The question is whether every material decision has an owner, a control, and a recoverable path when conditions change.",
      "Write those controls into the architecture and the runbook. If approval rules and fallbacks live only in a prompt, they will drift. Production systems need explicit policy, observable outcomes, and a named owner after launch.",
    ],
  },
];

export const insightBacklog = [
  "Why an AI prototype fails after real users arrive",
  "Model routing for quality, latency, and cost",
  "What to log in an AI workflow",
  "Designing safe tool access for agents",
  "How to measure the economics of a workflow pilot",
  "When deterministic automation is better than an LLM",
  "What belongs in an AI operations runbook",
] as const;

export function getInsight(slug: string) {
  return insights.find((a) => a.slug === slug);
}
