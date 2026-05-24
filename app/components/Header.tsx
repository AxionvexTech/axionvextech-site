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
  isActive = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}) {
  // Only use Next.js Link for pure page routes (no hash fragments)
  const isPageOnly = href.startsWith("/") && !href.includes("#");
  const Comp = isPageOnly ? Link : "a";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`relative group font-medium transition-colors duration-200 flex items-center gap-1.5 ${
        isActive
          ? "text-[#38BDF8]"
          : "text-[#AAB8CC] hover:text-[#38BDF8]"
      }`}
    >
      {isActive && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] flex-shrink-0" />
      )}
      {children}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] rounded-full transition-all duration-300 ${
          isActive ? "w-full opacity-70" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
      />
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

  const isActive = (href: string) => {
    if (href === "/work") return page === "work";
    if (href === "/recruiting") return page === "recruiting";
    if (href === "/") return page === "home";
    return false;
  };

  const navItems =
    page === "home"
      ? [
          { label: "Services",       href: "#services" },
          { label: "Work",           href: "/work" },
          { label: "How We Deliver", href: "#process" },
          { label: "FAQ",            href: "#faq" },
          { label: "Careers",        href: "/recruiting" },
        ]
      : page === "recruiting"
      ? [
          { label: "Home",           href: "/" },
          { label: "How It Works",   href: "#process" },
          { label: "Open Roles",     href: "#roles" },
          { label: "Apply",          href: "#apply" },
        ]
      : [
          { label: "Home",           href: "/" },
          { label: "Services",       href: "/#services" },
          { label: "Careers",        href: "/recruiting" },
          { label: "Contact",        href: "/#contact" },
        ];

  const cta =
    page === "recruiting"
      ? { label: "Apply Now", href: "#apply" }
      : { label: "Book a Call", href: "https://calendly.com/manager-axionvextech/30min" };

  // All CTA hrefs that contain # should use <a> for native hash scroll
  const ctaIsPageOnly = cta.href.startsWith("/") && !cta.href.includes("#");

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/[0.05] ${
          scrolled
            ? "bg-[#07111F]/96 shadow-lg shadow-black/50"
            : "bg-[#07111F]/75"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-[18px] flex items-center justify-between">
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
              <NavLink key={item.label} href={item.href} isActive={isActive(item.href)}>
                {item.label}
              </NavLink>
            ))}

            {ctaIsPageOnly ? (
              <Link href={cta.href} className="btn-primary !py-2 !px-4 !text-sm ml-1">
                {cta.label}
              </Link>
            ) : (
              <a href={cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-4 !text-sm ml-1">
                {cta.label}
              </a>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-[#CBD5E1] p-1.5 z-10"
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
        className={`fixed inset-0 z-40 bg-[#07111F]/98 backdrop-blur-lg flex flex-col transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full px-6 pt-24 pb-10 flex flex-col">
          <div className="flex flex-col gap-1 mb-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isPageOnly = item.href.startsWith("/") && !item.href.includes("#");
              const Comp = isPageOnly ? Link : "a";
              return (
                <Comp
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-semibold transition-colors py-3 border-b border-white/[0.06] flex items-center gap-3 ${
                    active
                      ? "text-[#38BDF8]"
                      : "text-[#CBD5E1] hover:text-[#38BDF8]"
                  }`}
                >
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] flex-shrink-0" />
                  )}
                  {item.label}
                </Comp>
              );
            })}
          </div>

          {ctaIsPageOnly ? (
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
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center"
            >
              {cta.label}
            </a>
          )}

          <p className="text-[#94A3B8] text-sm mt-6">
            contact@axionvextech.com
          </p>
        </div>
      </div>
    </>
  );
}
