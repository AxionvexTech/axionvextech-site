import type { ReactNode } from "react";
import SiteHeader from "@/app/components/layout/SiteHeader";
import SiteFooter from "@/app/components/layout/SiteFooter";
import AnnouncementBar from "@/app/components/layout/AnnouncementBar";
import PageMotion from "@/app/components/motion/PageMotion";
import DepthMotion from "@/app/components/motion/DepthMotion";

export default function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <PageMotion />
      <DepthMotion />
    </>
  );
}
