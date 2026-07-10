import Image from "next/image";
import { siteImages, type UseCaseImageKey } from "@/content/images";

export default function UseCaseVisual({
  variant,
  className = "",
  priority = false,
}: {
  variant: UseCaseImageKey | string;
  className?: string;
  priority?: boolean;
}) {
  const key = (
    variant in siteImages.useCases ? variant : "customer-operations"
  ) as UseCaseImageKey;
  const image = siteImages.useCases[key];

  return (
    <div className={`relative overflow-hidden rounded-[14px] bg-ink-950 ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-slate-300 backdrop-blur-sm">
        Conceptual UI
      </span>
    </div>
  );
}

export function variantFromSlug(slug: string): UseCaseImageKey {
  if (slug in siteImages.useCases) return slug as UseCaseImageKey;
  if (slug === "ai-product-features") return "ai-product-features";
  return "customer-operations";
}
