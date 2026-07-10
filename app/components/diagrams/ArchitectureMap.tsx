import { homepageCopy } from "@/content/homepage";

export default function ArchitectureMap() {
  const { layers } = homepageCopy.architecture;

  return (
    <div className="space-y-3" aria-label="Production AI architecture layers">
      {layers.map((layer, index) => (
        <div key={layer.title} className="relative">
          <div className="surface-card-dark p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-signal-mint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-white">{layer.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-ink-950/50 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {index < layers.length - 1 ? (
            <div className="flex justify-center py-1" aria-hidden>
              <span className="text-signal-mint/70">↓</span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
