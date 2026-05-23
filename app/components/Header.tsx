"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  page: "home" | "recruiting" | "work";
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const isPage = href.startsWith("/");
  const Comp = isPage ? Link : "a";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className="text-white hover:text-white transition-colors font-medium relative group"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-full transition-all duration-300 rounded-full" />
    </Comp>
  );
}

export default function Header({ page }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems =
    page === "home"
      ? [
          { label: "Services",      href: "#services" },
          { label: "Work",          href: "/work" },
          { label: "How We Deliver", href: "#process" },
          { label: "FAQ",           href: "#faq" },
          { label: "Careers",       href: "/recruiting" },
        ]
      : page === "recruiting"
      ? [
          { label: "Home",          href: "/" },
          { label: "How It Works",  href: "#process" },
          { label: "Open Roles",    href: "#roles" },
          { label: "Apply",         href: "#apply" },
        ]
      : [
          { label: "Home",          href: "/" },
          { label: "Services",      href: "/#services" },
          { label: "Careers",       href: "/recruiting" },
          { label: "Contact",       href: "/#contact" },
        ];

  const cta =
    page === "recruiting"
      ? { label: "Apply Now", href: "#apply" }
      : { label: "Book a Call", href: page === "home" ? "#contact" : "/#contact" };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/[0.07] ${
          scrolled
            ? "bg-[#020617]/96 shadow-lg shadow-black/40"
            : "bg-[#020617]/80"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-10 flex-shrink-0">
            <Image
              src="/icon.svg"
              alt="AxionvexTech Logo"
              width={28}
              height={28}
              className="h-7 w-7"
              priority
            />
            <span className="text-base font-bold text-white tracking-tight">
              AxionvexTech
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 text-sm">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}

            {cta.href.startsWith("/") ? (
              <Link href={cta.href} className="btn-primary !py-2 !px-4 !text-sm ml-1">
                {cta.label}
              </Link>
            ) : (
              <a href={cta.href} className="btn-primary !py-2 !px-4 !text-sm ml-1">
                {cta.label}
              </a>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white hover:text-white p-1.5 z-10"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className={`hamburger ${mobileOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#020617]/98 backdrop-blur-lg flex flex-col transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full px-6 pt-24 pb-10 flex flex-col">
          <div className="flex flex-col gap-1 mb-8">
            {navItems.map((item) => {
              const isPage = item.href.startsWith("/");
              const Comp = isPage ? Link : "a";
              return (
                <Comp
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-white transition-colors py-2 border-b border-white/[0.06]"
                >
                  {item.label}
                </Comp>
              );
            })}
          </div>

          {cta.href.startsWith("/") ? (
            <Link
              href={cta.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center"
            >
              {cta.label}
            </Link>
          ) : (
            <a
              href={cta.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center"
            >
              {cta.label}
            </a>
          )}

          <p className="text-white/60 text-sm mt-6">
            manager@axionvextech.com
          </p>
        </div>
      </div>
    </>
  );
}
