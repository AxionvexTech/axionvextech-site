import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  page: "home" | "recruiting" | "work";
}

export default function Header({ page }: HeaderProps) {
  const navItems =
    page === "home"
      ? [
          { label: "Services", href: "#services" },
          { label: "Work", href: "/work" },
          { label: "Why AxionvexTech", href: "#why" },
          { label: "Recruiting", href: "/recruiting" },
          { label: "Contact", href: "#contact" },
        ]
      : page === "recruiting"
      ? [
          { label: "Home", href: "/" },
          { label: "How It Works", href: "#process" },
          { label: "Open Roles", href: "#positions" },
          { label: "Apply", href: "#apply" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Recruiting", href: "/recruiting" },
          { label: "Contact", href: "/#contact" },
        ];

  const cta =
    page === "recruiting"
      ? { label: "Apply Now", href: "#apply" }
      : { label: "Start a Project", href: page === "home" ? "#contact" : "/#contact" };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icon.svg"
            alt="AxionvexTech Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            AxionvexTech
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          {navItems.map((item) => {
            const isPage = item.href.startsWith("/");
            const Component = isPage ? Link : "a";
            return (
              <Component
                key={item.href}
                href={item.href}
                className="hover:text-slate-900 transition-colors font-medium"
              >
                {item.label}
              </Component>
            );
          })}

          {cta.href.startsWith("/") ? (
            <Link
              href={cta.href}
              className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              {cta.label}
            </Link>
          ) : (
            <a
              href={cta.href}
              className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
