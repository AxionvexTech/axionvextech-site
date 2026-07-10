import Link from "next/link";
import type { Metadata } from "next";
import MarketingShell from "@/app/components/layout/MarketingShell";
import { ButtonLink } from "@/app/components/marketing/ui";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Axionvex Tech" },
  description: "The requested Axionvex Tech page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <MarketingShell>
      <section className="section-avx hero-luminous">
        <div className="container-avx relative z-[1] max-w-2xl py-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
            404
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            This path is not in the system map.
          </h1>
          <p className="mt-4 text-lg text-ink-secondary">
            The page may have moved, or the route does not exist. Return to a known
            production path below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/">Home</ButtonLink>
            <ButtonLink href="/solutions" variant="secondary">
              Solutions
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              Work
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Looking for careers?{" "}
            <Link href="/careers" className="font-semibold text-blue underline-offset-4 hover:underline">
              Visit /careers
            </Link>
          </p>
        </div>
      </section>
    </MarketingShell>
  );
}
