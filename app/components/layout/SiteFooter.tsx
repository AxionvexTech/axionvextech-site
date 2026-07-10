import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

function Col({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-white">{title}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-slate-300">
      <div className="container-avx py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="text-lg font-semibold tracking-tight text-white">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
              Production AI workflow engineering for B2B SaaS and operations-heavy
              teams. Governed systems with evaluation, human approval, and
              operational ownership.
            </p>
            <p className="mt-5 text-sm">
              <a
                href={`mailto:${siteConfig.primaryEmail}`}
                className="text-signal-mint hover:underline"
              >
                {siteConfig.primaryEmail}
              </a>
            </p>
          </div>
          <Col title="Solutions" items={footerNav.solutions} />
          <Col title="Use Cases" items={footerNav.useCases} />
          <Col title="Company" items={footerNav.company} />
          <Col title="Resources" items={footerNav.resources} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300/80">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/applicant-privacy" className="hover:text-white">
              Applicant Privacy
            </Link>
            {siteConfig.social.linkedin ? (
              <a
                href={siteConfig.social.linkedin}
                className="hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
