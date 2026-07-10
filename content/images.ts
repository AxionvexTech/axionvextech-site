export const siteImages = {
  heroControlPlane: {
    src: "/images/hero/control-plane.png",
    alt: "Reference workflow control plane showing signals, orchestration, approval, and business actions",
    width: 1600,
    height: 900,
    label: "Reference workflow control plane",
    note: "Conceptual interface · not a live product console",
  },
  architectureOverview: {
    src: "/images/hero/architecture-overview.png",
    alt: "Production AI architecture layers from business signals through operations monitoring",
    width: 1600,
    height: 900,
    label: "Production architecture",
    note: "Conceptual diagram · labels also provided as text below",
  },
  workingSession: {
    src: "/images/company/working-session.png",
    alt: "Editorial workplace scene of engineers reviewing a workflow architecture diagram",
    width: 1600,
    height: 1200,
    label: "Editorial workplace photography",
    note: "Stock-style generated scene · not Axionvex Tech personnel",
  },
  careersInterview: {
    src: "/images/company/careers-interview-hero.png",
    alt: "Editorial photograph of a professional interview in a modern light office",
    width: 1920,
    height: 1080,
    label: "Editorial interview photography",
    note: "Generated scene · not Axionvex Tech personnel",
  },
  heroAgencyVideo: {
    src: "/videos/hero-agency.mp4",
    poster: "/videos/hero-agency-poster.png",
    alt: "Looping visualization of a global digital network representing connected production systems",
    label: "Agency hero video",
    note: "Pexels stock video · commercial license · decorative, muted",
  },
  useCases: {
    "customer-operations": {
      src: "/images/use-cases/customer-operations.png",
      alt: "Customer operations manager reviewing AI-assisted support triage on a laptop",
      width: 1600,
      height: 1200,
    },
    "client-onboarding": {
      src: "/images/use-cases/client-onboarding.png",
      alt: "Client onboarding workspace with document checklist and validation progress",
      width: 1600,
      height: 1200,
    },
    "document-processing": {
      src: "/images/use-cases/document-processing.png",
      alt: "Document extraction and human review interface with exception flags",
      width: 1600,
      height: 1200,
    },
    "reporting-automation": {
      src: "/images/use-cases/reporting-automation.png",
      alt: "Operations reporting dashboard with cited sources and anomaly flags",
      width: 1600,
      height: 1200,
    },
    "internal-knowledge": {
      src: "/images/use-cases/internal-knowledge.png",
      alt: "Internal knowledge assistant showing a source-grounded answer with citations",
      width: 1600,
      height: 1200,
    },
    "ai-product-features": {
      src: "/images/use-cases/ai-product-features.png",
      alt: "In-product AI copilot panel with permissions, evaluation, and usage controls",
      width: 1600,
      height: 1200,
    },
  },
} as const;

export type UseCaseImageKey = keyof typeof siteImages.useCases;
