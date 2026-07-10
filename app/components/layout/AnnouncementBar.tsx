import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function AnnouncementBar() {
  if (!siteConfig.showAnnouncement) return null;
  return (
    <div className="bg-ink-950 text-center text-sm text-slate-300">
      <div className="container-avx py-2.5">
        <Link href={siteConfig.announcement.href} className="hover:text-signal-mint">
          {siteConfig.announcement.text}
        </Link>
      </div>
    </div>
  );
}
