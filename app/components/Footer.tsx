import Link from "next/link";

interface FooterProps {
  page?: "home" | "recruiting" | "work";
}

export default function Footer({ page = "home" }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <p className="text-white font-bold text-lg mb-3 tracking-tight">
              AxionvexTech
            </p>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              A fast-growing engineering agency focused on production systems,
              technical ownership, and reliable delivery.
            </p>
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Technical Strategy
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Cloud & Reliability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white text-sm font-semibold mb-4">Company</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#why" className="hover:text-white transition-colors">
                  Why AxionvexTech
                </Link>
              </li>
              <li>
                <Link href="/recruiting" className="hover:text-white transition-colors">
                  Recruiting
                </Link>
              </li>
              <li>
                <a href="mailto:manager@axionvextech.com" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            &copy; 2026 AxionvexTech. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="mailto:manager@axionvextech.com" className="hover:text-white transition-colors">
              manager@axionvextech.com
            </a>
            <span className="text-slate-700">Remote-first team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
