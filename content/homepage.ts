export const homepageCopy = {
  hero: {
    eyebrow: "Production AI Workflow Engineering",
    heading: "Turn complex operations into governed AI systems.",
    body: "Axionvex Tech designs, builds, and operates production AI workflows that connect company data, software, people, and decisions. Every system is engineered with approvals, evaluations, audit trails, monitoring, and clear ownership.",
    primaryCta: { label: "Book an AI Workflow Assessment", href: "/assessment" },
    secondaryCta: { label: "Explore Production Systems", href: "/solutions/production-ai-workflows" },
    trustLine: "Senior-led delivery · Vendor-neutral architecture · Human-controlled automation",
    visualLabel: "Example production workflow",
    visualMicrocopy: "Reference architecture · Evaluation enabled · Human approval required",
  },
  recognition: {
    eyebrow: "Buyer recognition",
    heading: "The prototype worked. Production is the hard part.",
    intro:
      "AI initiatives usually fail after the demo, when real data, exceptions, permissions, human decisions, cost, and reliability enter the workflow. Axionvex Tech closes that gap.",
    prototype: {
      title: "Prototype",
      items: [
        "Single prompt",
        "Manual data copy",
        "No permissions",
        "No evaluation",
        "Unclear ownership",
      ],
    },
    production: {
      title: "Production system",
      items: [
        "Connected data",
        "Controlled tool access",
        "Human approvals",
        "Evaluation suite",
        "Monitoring",
        "Audit history",
        "Named owner",
      ],
    },
  },
  architecture: {
    eyebrow: "How intelligence moves",
    heading: "AI is one layer. The workflow is the product.",
    body: "Reliable AI systems combine models, data, tools, permissions, people, evaluation, and operational ownership.",
    layers: [
      {
        id: "signals",
        title: "Users and business events",
        detail:
          "Email, tickets, documents, CRM updates, and product events enter as structured signals.",
      },
      {
        id: "orchestration",
        title: "Workflow orchestration",
        detail:
          "State machines and business rules decide what happens next, including retries and branches.",
      },
      {
        id: "context",
        title: "Context and retrieval",
        detail:
          "Approved sources assemble the evidence the model is allowed to use for this case.",
      },
      {
        id: "routing",
        title: "Model routing",
        detail:
          "Route by task type, cost, latency, and quality requirements across model providers.",
      },
      {
        id: "tools",
        title: "Tool and API access",
        detail:
          "Permissioned tool calls update systems, create tasks, or fetch live records.",
      },
      {
        id: "approval",
        title: "Human approval gates",
        detail:
          "Amber checkpoints pause high-consequence actions until a person confirms.",
      },
      {
        id: "eval",
        title: "Evaluation and policy checks",
        detail:
          "Quality, policy, and confidence checks run before and after release.",
      },
      {
        id: "systems",
        title: "Business systems",
        detail:
          "Approved outcomes land in CRM, support, finance, or internal ops systems.",
      },
      {
        id: "observe",
        title: "Observability and audit",
        detail:
          "Every input, decision, tool call, approval, and outcome remains reviewable.",
      },
    ],
    cta: { label: "Review Our AI Standards", href: "/ai-standards" },
  },
  transformation: {
    eyebrow: "Operational transformation",
    heading: "Move work faster without removing control.",
    before: [
      "Email inbox",
      "Spreadsheet",
      "CRM",
      "PDFs",
      "Manual review",
      "Slack follow-up",
      "Repeated copying",
      "Delayed approvals",
    ],
    after: [
      "Structured intake",
      "Grounded AI decision",
      "Tool execution",
      "Human exception review",
      "Automatic updates",
      "Audit history",
      "Performance monitoring",
    ],
    outcomes: [
      {
        title: "Faster cycle time",
        body: "Automate repetitive analysis, routing, drafting, and follow-up while keeping exceptions visible.",
      },
      {
        title: "More consistent execution",
        body: "Apply the same rules, data sources, review requirements, and escalation paths across every case.",
      },
      {
        title: "Clear operational accountability",
        body: "Track what the system saw, decided, executed, and what a person approved.",
      },
    ],
  },
  useCases: {
    eyebrow: "Primary use cases",
    heading: "Start where the work is repetitive, expensive, and measurable.",
    intro:
      "Begin with one bounded workflow that has clear inputs, decisions, actions, and business consequences.",
    featured: [
      {
        slug: "customer-operations",
        title: "Customer operations",
        body: "Triage requests, retrieve account context, draft or execute approved actions, escalate exceptions, and keep every decision visible.",
        href: "/use-cases/customer-operations",
        cta: "Explore customer operations",
        controls: ["Context retrieval", "Suggested resolution", "Escalation", "Audit trail"],
      },
      {
        slug: "document-processing",
        title: "Document intelligence",
        body: "Extract, classify, validate, route, and review documents with confidence thresholds and human exception handling.",
        href: "/use-cases/document-processing",
        cta: "Explore document intelligence",
        controls: ["Structured extraction", "Confidence score", "Validation rules", "Exception queue"],
      },
      {
        slug: "reporting-automation",
        title: "Reporting and decision support",
        body: "Turn scattered operational data into grounded reports, alerts, and decision-ready summaries.",
        href: "/use-cases/reporting-automation",
        cta: "Explore reporting automation",
        controls: ["Data connectors", "Source citations", "KPI changes", "Distribution"],
      },
    ],
    secondary: [
      { label: "Client onboarding", href: "/use-cases/client-onboarding" },
      { label: "Internal knowledge", href: "/use-cases/internal-knowledge" },
      { label: "AI product features", href: "/use-cases/ai-product-features" },
    ],
  },
  engagements: {
    eyebrow: "Engagement models",
    heading: "Start with the smallest engagement that can prove business value.",
    items: [
      {
        title: "AI Workflow Assessment",
        bestFor: "Teams that need clarity before implementation.",
        scope: [
          "Workflow mapping",
          "Data and integration inventory",
          "Automation suitability",
          "Risk review",
          "Pilot architecture",
          "Implementation plan",
        ],
        cta: { label: "Scope an Assessment", href: "/assessment" },
        tone: "editorial" as const,
      },
      {
        title: "Production Agent Pilot",
        bestFor: "Teams ready to validate one real workflow.",
        scope: [
          "Production integrations",
          "Human approval",
          "Evaluation suite",
          "Monitoring",
          "Deployment",
          "Handoff",
        ],
        cta: { label: "Plan a Pilot", href: "/assessment" },
        tone: "technical" as const,
      },
      {
        title: "AI Operations Partnership",
        bestFor: "Teams operating and expanding production AI.",
        scope: [
          "Regression evaluation",
          "Failure analysis",
          "Cost optimization",
          "Model updates",
          "Workflow expansion",
          "Incident support",
        ],
        cta: { label: "Discuss AI Operations", href: "/solutions/ai-operations" },
        tone: "ops" as const,
      },
    ],
    supporting: {
      label: "Also available: AI Product Engineering",
      href: "/solutions/ai-product-engineering",
    },
  },
  proof: {
    eyebrow: "Selected work",
    heading: "Evidence, not AI theater.",
    body: "Each project shows the starting condition, architecture, controls, and measurement status. Conceptual work is labeled as reference architecture or technical demonstration.",
  },
  standards: {
    eyebrow: "AI standards",
    heading: "Quality and control are part of the build.",
    body: "Production AI needs evaluation coverage, permission boundaries, human escalation, cost visibility, and named ownership.",
    metrics: [
      { label: "Grounding status", value: "Enabled", note: "Illustrative" },
      { label: "Tool-call success", value: "Tracked", note: "Example view" },
      { label: "Evaluation coverage", value: "Suite", note: "Reference" },
      { label: "Human escalation", value: "Required", note: "Policy" },
      { label: "Latency", value: "Monitored", note: "Per workflow" },
      { label: "Cost per workflow", value: "Budgeted", note: "Controls" },
      { label: "Regression status", value: "Passing", note: "Illustrative" },
      { label: "Audit events", value: "Recorded", note: "Immutable log" },
      { label: "Fallback behavior", value: "Defined", note: "Branch ready" },
    ],
    areas: [
      "Workflow suitability",
      "Model strategy",
      "Context and retrieval",
      "Tool permissions",
      "Human approval",
      "Evaluation",
      "Observability",
      "Security and privacy",
      "Cost and latency",
      "Ownership",
    ],
    cta: { label: "Review Our AI Standards", href: "/ai-standards" },
  },
  delivery: {
    eyebrow: "Delivery process",
    heading: "Senior engineers stay close to the work.",
    stages: [
      {
        title: "Discover",
        outputs: [
          "Map the current operation",
          "Identify failure points",
          "Define measurable outcomes",
          "Confirm constraints",
        ],
      },
      {
        title: "Architect",
        outputs: [
          "Design data boundaries",
          "Define integrations",
          "Select model strategy",
          "Plan approvals and fallbacks",
        ],
      },
      {
        title: "Build",
        outputs: [
          "Implement workflow",
          "Connect tools and data",
          "Add evaluation",
          "Add monitoring",
        ],
      },
      {
        title: "Validate",
        outputs: [
          "Test real exceptions",
          "Review with operators",
          "Measure quality",
          "Resolve failure modes",
        ],
      },
      {
        title: "Operate",
        outputs: [
          "Deploy",
          "Monitor",
          "Optimize cost and latency",
          "Expand safely",
        ],
      },
    ],
    cta: { label: "See how we work", href: "/how-we-work" },
  },
  trust: {
    heading: "A focused engineering partner, not a delivery black box.",
    body: "Axionvex Tech combines AI engineering, product development, systems integration, and cloud operations. Engagements emphasize documented decisions, transparent project controls, and ownership after launch.",
    points: [
      "Senior-led delivery",
      "Direct communication",
      "Documented decisions",
      "Transparent project controls",
      "Security-aware implementation",
      "Ownership after launch",
    ],
    cta: { label: "About Axionvex Tech", href: "/about" },
  },
  insights: {
    eyebrow: "Insights",
    heading: "Practical guidance for production AI.",
    empty:
      "Engineering notes are being prepared. Published articles will appear here when ready.",
  },
  finalCta: {
    heading: "Bring us one workflow that is slow, expensive, or difficult to control.",
    body: "We will help map the operation, identify where AI can create measurable value, and define the controls required for production.",
    primaryCta: { label: "Book an AI Workflow Assessment", href: "/assessment" },
    secondaryCta: { label: "Send a Project Brief", href: "/contact" },
  },
} as const;
