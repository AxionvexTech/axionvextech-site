import { homepageCopy } from "@/content/homepage";

export default function ArchitectureMap() {
  const { layers } = homepageCopy.architecture;

  return (
    <div className="space-y-3" aria-label="Production AI architecture layers">
      {layers.map((layer, index) => (
        <div key={layer.id} className="relative">
          <div className="surface-card-dark p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-white">{layer.title}</h3>
              </div>
              <p className="max-w-xl text-sm text-slate-300">{layer.detail}</p>
            </div>
          </div>
          {index < layers.length - 1 ? (
            <div className="flex justify-center py-1" aria-hidden>
              <span className="text-cyan/70">↓</span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
