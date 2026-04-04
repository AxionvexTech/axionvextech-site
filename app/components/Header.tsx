import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  page: "home" | "recruiting";
}

export default function Header({ page }: HeaderProps) {
  const navItems =
    page === "home"
      ? [
          { label: "Services", href: "#services", internal: false },
          { label: "Our Work", href: "#work", internal: false },
          { label: "How We Work", href: "#process", internal: false },
          { label: "Contact", href: "#contact", internal: false },
        ]
      : [
          { label: "Home", href: "/", internal: true },
          { label: "Open Roles", href: "#positions", internal: false },
          { label: "Apply", href: "#apply", internal: false },
        ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="AxionvexTech Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            AxionvexTech
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          {navItems.map((item) =>
            item.internal ? (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-900 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-slate-900 transition-colors font-medium"
              >
                {item.label}
              </a>
            )
          )}

          {page === "home" ? (
            <Link
              href="/recruiting"
              className="ml-2 bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Join the Team
            </Link>
          ) : (
            <a
              href="#apply"
              className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Apply Now
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
