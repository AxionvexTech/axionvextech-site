import Link from "next/link";

interface FooterProps {
  page?: "home" | "recruiting";
}

export default function Footer({ page = "home" }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {page === "home" ? (
            <>
              <div className="md:col-span-2">
                <p className="text-white font-bold text-lg mb-3 tracking-tight">
                  AxionvexTech
                </p>
                <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
                  Engineering agency. Senior engineers only. We build
                  production systems for product teams that can&rsquo;t afford
                  to cut corners.
                </p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-4">
                  Services
                </p>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a
                      href="#services"
                      className="hover:text-white transition-colors"
                    >
                      Product Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-white transition-colors"
                    >
                      Technical Strategy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-white transition-colors"
                    >
                      Infrastructure & Ops
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-4">
                  Company
                </p>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a
                      href="#process"
                      className="hover:text-white transition-colors"
                    >
                      How We Work
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/recruiting"
                      className="hover:text-white transition-colors"
                    >
                      Join the Team
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:manager@axionvextech.com"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-2">
                <p className="text-white font-bold text-lg mb-3 tracking-tight">
                  AxionvexTech
                </p>
                <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
                  Engineering agency. Senior engineers only. We build
                  production systems for product teams that can&rsquo;t afford
                  to cut corners.
                </p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-4">
                  Positions
                </p>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a
                      href="#positions"
                      className="hover:text-white transition-colors"
                    >
                      Open Roles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#apply"
                      className="hover:text-white transition-colors"
                    >
                      Apply
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-4">
                  Company
                </p>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:manager@axionvextech.com"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            &copy; 2026 AxionvexTech. All rights reserved.
          </p>
          <a
            href="mailto:manager@axionvextech.com"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            manager@axionvextech.com
          </a>
        </div>
      </div>
    </footer>
  );
}
