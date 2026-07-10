export const homepageCopy = {
  hero: {
    eyebrow: "Production AI Workflow Engineering",
    heading: "Build AI systems that do the work, not just demo it.",
    body: "Axionvex Tech helps B2B SaaS and operations-heavy teams replace manual workflows with production AI systems connected to their data, tools, and people. Every deployment is engineered with evaluation, human approval, auditability, monitoring, and operational ownership.",
    primaryCta: { label: "Assess a Workflow", href: "/assessment" },
    secondaryCta: { label: "View Implementation Work", href: "/work" },
    trustLine: "Senior-led delivery · Vendor-neutral architecture · Human-controlled automation",
    visualLabel: "Reference workflow control plane",
    visualMicrocopy: "From incoming signal to approved action, with every decision observable.",
  },
  recognition: {
    eyebrow: "Where AI projects stall",
    heading: "The prototype worked. Production is the hard part.",
    intro:
      "Most AI initiatives do not fail because the model cannot generate an answer. They fail because the system cannot reliably operate inside the business.",
    cards: [
      {
        title: "Fragmented workflow",
        body: "The process is spread across inboxes, documents, spreadsheets, CRM records, and employee memory.",
      },
      {
        title: "Uncontrolled behavior",
        body: "The prototype lacks permissions, human approval, exception handling, or a dependable audit trail.",
      },
      {
        title: "Unknown quality",
        body: "There is no evaluation suite, regression baseline, failure taxonomy, or production monitoring.",
      },
      {
        title: "No operational owner",
        body: "The internal team can launch the experiment but cannot absorb another system to maintain.",
      },
    ],
    closing:
      "Axionvex Tech closes the gap between a promising demonstration and a dependable operating system.",
  },
  outcomes: {
    eyebrow: "What changes",
    heading: "Move work faster without removing control.",
    items: [
      {
        title: "Faster cycle time",
        body: "Automate repetitive analysis, routing, drafting, data movement, and follow-up while keeping exceptions visible.",
      },
      {
        title: "More consistent execution",
        body: "Apply the same rules, data sources, review requirements, and escalation paths across every case.",
      },
      {
        title: "Clear operational accountability",
        body: "Track what the system saw, what it decided, what tools it used, what a person approved, and what happened next.",
      },
    ],
  },
  useCases: {
    eyebrow: "High-value workflows",
    heading: "Start where the work is repetitive, expensive, and measurable.",
    intro:
      "The best starting point is usually one bounded workflow with clear inputs, decisions, actions, and business consequences.",
  },
  engagements: {
    eyebrow: "Ways to engage",
    heading: "Start with the smallest engagement that can prove business value.",
    items: [
      {
        title: "AI Workflow Assessment",
        bestFor: "Teams that know where the pain is but need a production plan.",
        scope: [
          "Current-state workflow map",
          "Systems and data inventory",
          "Automation suitability analysis",
          "Risk and governance review",
          "Target architecture",
          "Pilot recommendation",
          "Delivery scope and decision memo",
        ],
        duration: "1 to 2 weeks, subject to access and complexity",
        cta: { label: "Assess a workflow", href: "/assessment" },
      },
      {
        title: "Production Agent Pilot",
        bestFor: "Teams ready to implement one bounded workflow with real integrations and users.",
        scope: [
          "Working production-oriented workflow",
          "Required integrations",
          "Human review and escalation",
          "Evaluation suite",
          "Monitoring and audit history",
          "Cost and latency controls",
          "Deployment and handoff",
        ],
        duration: "4 to 8 weeks, subject to scope and dependencies",
        cta: { label: "Plan a pilot", href: "/assessment" },
      },
      {
        title: "AI Operations Retainer",
        bestFor: "Teams that need ongoing quality, optimization, support, and workflow expansion.",
        scope: [
          "Evaluation regression checks",
          "Failure analysis",
          "Model and prompt changes",
          "Cost and latency optimization",
          "New tool integrations",
          "Incident support",
          "Workflow improvements",
          "Monthly operating review",
        ],
        duration: "Ongoing",
        cta: { label: "Discuss AI operations", href: "/solutions/ai-operations" },
      },
      {
        title: "AI Product Engineering",
        bestFor: "SaaS teams adding production AI features to an existing product.",
        scope: [
          "Product and system architecture",
          "AI feature implementation",
          "Usage and billing controls",
          "Security and permission design",
          "Evaluation and observability",
          "Cloud deployment",
          "Team handoff",
        ],
        duration: "Scoped per feature",
        cta: { label: "Discuss a product feature", href: "/solutions/ai-product-engineering" },
      },
    ],
  },
  architecture: {
    eyebrow: "Production architecture",
    heading: "AI is one layer. The workflow is the product.",
    body: "A dependable AI system combines models with business rules, real data, secure tool access, review checkpoints, fallback behavior, and observable outcomes. The architecture must be designed around the work, not around a single model vendor.",
    layers: [
      {
        title: "Business signals",
        items: ["Email", "Documents", "CRM", "Support", "Product events", "Databases"],
      },
      {
        title: "Workflow orchestration",
        items: ["State", "Business rules", "Context assembly", "Tool selection", "Retry logic"],
      },
      {
        title: "Intelligence layer",
        items: ["Model routing", "Retrieval", "Classification", "Extraction", "Generation"],
      },
      {
        title: "Control layer",
        items: ["Permissions", "Human approval", "Policy checks", "Data boundaries", "Fallbacks"],
      },
      {
        title: "Business action",
        items: ["Update system", "Send response", "Create task", "Generate report", "Escalate"],
      },
      {
        title: "Operations layer",
        items: ["Evaluation", "Audit log", "Monitoring", "Cost", "Latency", "Incident review"],
      },
    ],
    bullets: [
      "Vendor-neutral model selection",
      "Role-based tool access",
      "Human review where consequences require it",
      "Evaluation before and after release",
      "Traceable inputs, decisions, and actions",
      "Operational handoff and documented ownership",
    ],
    cta: { label: "Review our AI standards", href: "/ai-standards" },
  },
  proof: {
    eyebrow: "Implementation evidence",
    heading: "Evidence, not AI theater.",
    body: "Case studies should show the starting condition, architecture, implementation decisions, operational controls, and measured result. When a client name cannot be disclosed, the page must state that clearly.",
  },
  standards: {
    eyebrow: "Built for accountable use",
    heading: "Quality and control are part of the build.",
    cards: [
      {
        title: "Evaluation",
        body: "Define expected behavior, failure categories, test datasets, and release thresholds before broad deployment.",
      },
      {
        title: "Human control",
        body: "Place approval and escalation at the decisions that carry financial, legal, customer, or operational consequences.",
      },
      {
        title: "Security and data boundaries",
        body: "Limit what each workflow can access, what tools it can call, and what data may be retained or exposed.",
      },
      {
        title: "Observability",
        body: "Track model behavior, tool calls, exceptions, cost, latency, review outcomes, and user feedback.",
      },
      {
        title: "Fallbacks",
        body: "Design predictable behavior for unavailable models, low confidence, incomplete data, and integration failure.",
      },
      {
        title: "Ownership",
        body: "Document architecture, operating procedures, dependencies, and handoff responsibilities.",
      },
    ],
    cta: { label: "See the complete standards", href: "/ai-standards" },
  },
  howWeWork: {
    eyebrow: "Delivery model",
    heading: "Senior engineers stay close to the work.",
    steps: [
      {
        title: "Map the operation",
        body: "Understand the current process, systems, exceptions, users, risk, and measurable cost of delay.",
      },
      {
        title: "Design the controlled workflow",
        body: "Define boundaries, decision logic, model strategy, tool access, review points, evaluation, and fallback behavior.",
      },
      {
        title: "Build against real conditions",
        body: "Use representative data, real integrations, realistic edge cases, and production-oriented infrastructure.",
      },
      {
        title: "Validate with users",
        body: "Measure quality, review burden, time saved, exception behavior, and operational fit.",
      },
      {
        title: "Deploy and operate",
        body: "Release with monitoring, runbooks, ownership, improvement cadence, and a clear support model.",
      },
    ],
    supporting:
      "Clients work directly with the senior people responsible for architecture and delivery. No hidden handoff between sales and an unknown implementation team.",
    cta: { label: "See how we work", href: "/how-we-work" },
  },
  trust: {
    heading: "A focused engineering partner, not a delivery black box.",
    body: "Axionvex Tech combines AI engineering, full-stack product development, systems integration, and cloud operations. Engagements are scoped around accountable outcomes, documented decisions, and maintainable ownership.",
    cta: { label: "About Axionvex Tech", href: "/about" },
  },
  insights: {
    eyebrow: "Engineering notes",
    heading: "Practical guidance for production AI.",
  },
  finalCta: {
    heading: "Bring us one workflow that is slow, expensive, or difficult to control.",
    body: "We will help determine whether AI is appropriate, what a safe production architecture requires, and what evidence should justify further investment.",
    primaryCta: { label: "Book an AI Workflow Assessment", href: "/assessment" },
    secondaryCta: { label: "Send Project Context", href: "/contact" },
    formTeaser:
      "Useful starting information: current process, systems involved, users, volume, exception rate, desired outcome, and target timing.",
  },
} as const;
