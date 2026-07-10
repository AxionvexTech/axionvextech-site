import Image from "next/image";
import { siteImages } from "@/content/images";

export default function EditorialImage({
  variant = "workingSession",
  className = "",
  priority = false,
  onDark = false,
}: {
  variant?: "workingSession" | "architectureOverview";
  className?: string;
  priority?: boolean;
  onDark?: boolean;
}) {
  const image =
    variant === "architectureOverview"
      ? siteImages.architectureOverview
      : siteImages.workingSession;

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-[16px] ${
          onDark
            ? "border border-white/10 bg-ink-900"
            : "border border-[var(--border-light)] bg-paper-100"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 640px"
        />
      </div>
      {"note" in image && image.note ? (
        <figcaption
          className={`mt-2 text-sm ${onDark ? "text-slate-300" : "text-slate-600"}`}
        >
          {image.note}
        </figcaption>
      ) : null}
    </figure>
  );
}
