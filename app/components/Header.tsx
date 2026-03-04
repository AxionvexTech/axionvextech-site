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
          { label: "Why Us", href: "#why-us", internal: false },
          { label: "Process", href: "#process", internal: false },
          { label: "Recruiting", href: "/recruiting", internal: true },
          { label: "Contact", href: "#contact", internal: false },
        ]
      : [
          { label: "Home", href: "/", internal: true },
          { label: "Positions", href: "#positions", internal: false },
          { label: "Apply", href: "#apply", internal: false },
        ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AxionvexTech Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="text-2xl font-bold text-blue-600">AxionvexTech</span>
        </Link>
        <div className="hidden md:flex gap-8 text-gray-700">
          {navItems.map((item) =>
            item.internal ? (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
