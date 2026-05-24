import Link from "next/link";

interface FooterProps {
  page?: "home" | "recruiting" | "work";
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isPageOnly = href.startsWith("/") && !href.includes("#");
  const Comp = isPageOnly ? Link : "a";
  return (
    <Comp href={href} className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
      {children}
    </Comp>
  );
}

export default function Footer({ page = "home" }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050C16]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-[#F8FAFC] font-bold text-lg mb-3 tracking-tight">
              AxionvexTech
            </p>
            <p className="text-sm leading-relaxed text-[#CBD5E1] max-w-sm mb-5">
              AI-powered software engineering agency. We build production systems,
              workflow automation, and embedded delivery for SaaS and
              operations-heavy teams.
            </p>
            <div className="flex items-center gap-2">
              <span className="live-dot" />
              <span className="text-xs text-emerald-400 font-medium">
                Active — currently taking on new engagements
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#F8FAFC] text-sm font-semibold mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "AI Engineering & Agents", href: "/#services" },
                { label: "Product Engineering",     href: "/#services" },
                { label: "Cloud & Reliability",     href: "/#services" },
                { label: "Embedded Delivery",       href: "/#services" },
              ].map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[#F8FAFC] text-sm font-semibold mb-4">Company</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Case Studies",      href: "/work" },
                { label: "Careers",           href: "/recruiting" },
                { label: "Applicant Privacy", href: "/recruiting#privacy" },
                { label: "Contact",           href: "mailto:contact@axionvextech.com" },
              ].map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            &copy; 2026 AxionvexTech. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#64748B]">
            <a
              href="mailto:contact@axionvextech.com"
              className="hover:text-[#CBD5E1] transition-colors"
            >
              contact@axionvextech.com
            </a>
            <span className="hidden sm:inline text-[#0F1729]">·</span>
            <span>
              {page === "recruiting"
                ? "Talent network · Remote-first"
                : "Client delivery · Remote-first"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
