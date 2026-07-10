import Image from "next/image";
import { siteImages } from "@/content/images";

export default function HeroVisual() {
  const image = siteImages.heroControlPlane;

  return (
    <figure className="space-y-3">
      <div className="relative overflow-hidden rounded-[16px] border border-white/10 bg-ink-900">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          className="h-auto w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 bg-ink-950/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-signal-mint backdrop-blur-sm">
            {image.label}
          </span>
          <span className="rounded-full border border-white/15 bg-ink-950/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-slate-300 backdrop-blur-sm">
            Conceptual
          </span>
        </div>
      </div>
      <figcaption className="text-sm text-slate-300">{image.note}</figcaption>
    </figure>
  );
}
