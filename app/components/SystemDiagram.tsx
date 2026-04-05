interface SystemDiagramProps {
  variant: "payment-api" | "ops-platform" | "backend-infra";
}

function DiagramBox({
  label,
  sublabel,
  className = "",
}: {
  label: string;
  sublabel?: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-slate-800/60 border border-slate-700/50 rounded-lg px-4 py-3 text-center ${className}`}
    >
      <p className="text-white text-xs font-semibold">{label}</p>
      {sublabel && (
        <p className="text-slate-500 text-[10px] mt-0.5">{sublabel}</p>
      )}
    </div>
  );
}

function Arrow({ direction = "down" }: { direction?: "down" | "right" }) {
  if (direction === "right") {
    return (
      <div className="flex items-center justify-center px-2">
        <div className="w-6 h-px bg-slate-600 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-slate-600" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center py-1.5">
      <div className="w-px h-5 bg-slate-600 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[5px] border-t-slate-600" />
      </div>
    </div>
  );
}

export default function SystemDiagram({ variant }: SystemDiagramProps) {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700/50 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/50">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-600" />
        </div>
        <span className="ml-2 text-[10px] text-slate-500 font-mono">
          {variant === "payment-api"
            ? "architecture — payment-service"
            : variant === "ops-platform"
            ? "architecture — ops-platform"
            : "architecture — infrastructure"}
        </span>
      </div>

      <div className="p-5">
        {variant === "payment-api" && (
          <div className="space-y-0">
            <div className="grid grid-cols-3 gap-3">
              <DiagramBox label="Client App" sublabel="React SPA" />
              <DiagramBox label="API Gateway" sublabel="Rate limiting + auth" />
              <DiagramBox label="Webhook Receiver" sublabel="External events" />
            </div>
            <Arrow />
            <DiagramBox
              label="Payment Service"
              sublabel="Event-driven · Idempotent"
              className="border-blue-500/30 bg-blue-500/10"
            />
            <Arrow />
            <div className="grid grid-cols-3 gap-3">
              <DiagramBox label="PostgreSQL" sublabel="Transactions" />
              <DiagramBox label="Event Bus" sublabel="Async processing" />
              <DiagramBox label="Audit Log" sublabel="Compliance trail" />
            </div>
            <Arrow />
            <div className="grid grid-cols-2 gap-3">
              <DiagramBox label="Payment Provider" sublabel="Stripe / ACH" />
              <DiagramBox label="Notification Service" sublabel="Email + Slack" />
            </div>
          </div>
        )}

        {variant === "ops-platform" && (
          <div className="space-y-0">
            <DiagramBox
              label="Ops Dashboard"
              sublabel="Next.js · Role-based access"
              className="border-indigo-500/30 bg-indigo-500/10"
            />
            <Arrow />
            <div className="grid grid-cols-2 gap-3">
              <DiagramBox label="Task Pipeline" sublabel="Status workflows" />
              <DiagramBox label="Automation Engine" sublabel="Trigger-based" />
            </div>
            <Arrow />
            <DiagramBox label="API Layer" sublabel="Node.js · REST" />
            <Arrow />
            <div className="grid grid-cols-3 gap-3">
              <DiagramBox label="PostgreSQL" sublabel="Primary store" />
              <DiagramBox label="Audit Log" sublabel="Every action traced" />
              <DiagramBox label="File Storage" sublabel="S3 · Attachments" />
            </div>
          </div>
        )}

        {variant === "backend-infra" && (
          <div className="space-y-0">
            <div className="grid grid-cols-2 gap-3">
              <DiagramBox label="GitHub" sublabel="Push to main" />
              <DiagramBox label="CI Pipeline" sublabel="Build + test + scan" />
            </div>
            <Arrow />
            <DiagramBox
              label="Container Registry"
              sublabel="ECR · Versioned images"
              className="border-emerald-500/30 bg-emerald-500/10"
            />
            <Arrow />
            <div className="grid grid-cols-2 gap-3">
              <DiagramBox label="Staging" sublabel="Parity with prod" />
              <DiagramBox label="Production" sublabel="ECS · Auto-scaling" />
            </div>
            <Arrow />
            <div className="grid grid-cols-3 gap-3">
              <DiagramBox label="CloudWatch" sublabel="Structured logs" />
              <DiagramBox label="Alerts" sublabel="Threshold-based" />
              <DiagramBox label="Health Checks" sublabel="Every 30s" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
