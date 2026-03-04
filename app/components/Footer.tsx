import Link from "next/link";

interface FooterProps {
  page?: "home" | "recruiting";
}

export default function Footer({ page = "home" }: FooterProps) {
  return (
    <footer className="bg-white text-slate-700 py-12 border-t border-slate-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {page === "home" ? (
            <>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">AxionvexTech</h4>
                <p className="text-gray-700">
                  Global technical consulting, web development, and cloud
                  engineering for product teams that care about reliability.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#services"
                      className="hover:text-slate-900 transition"
                    >
                      Product-Focused Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-slate-900 transition"
                    >
                      Architecture & Technical Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-slate-900 transition"
                    >
                      Cloud, Reliability & Operations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#why-us"
                      className="hover:text-slate-900 transition"
                    >
                      Why Choose Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#process"
                      className="hover:text-slate-900 transition"
                    >
                      How We Work
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/recruiting"
                      className="hover:text-slate-900 transition"
                    >
                      Recruiting
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="mailto:manager@axionvextech.com"
                      className="hover:text-slate-900 transition"
                    >
                      manager@axionvextech.com
                    </a>
                  </li>
                  <li>Global, remote-first team</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">AxionvexTech</h4>
                <p className="text-gray-700">
                  Global technical consulting, web development, and cloud
                  engineering for product teams that care about reliability.
                </p>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Positions</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#positions"
                      className="hover:text-slate-900 transition"
                    >
                      Open Roles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#apply"
                      className="hover:text-slate-900 transition"
                    >
                      Apply Now
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-slate-900 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recruiting"
                      className="hover:text-slate-900 transition"
                    >
                      Recruiting
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="mailto:manager@axionvextech.com"
                      className="hover:text-slate-900 transition"
                    >
                      manager@axionvextech.com
                    </a>
                  </li>
                  <li>Global Offices</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="border-t border-[#444] pt-8 text-center text-sm">
          <p>&copy; 2026 AxionvexTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
