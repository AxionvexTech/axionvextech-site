"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { assessmentCta, primaryNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/app/lib/analytics";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container-avx flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={siteConfig.name}>
          <Image src="/icon.svg" alt="" width={28} height={28} priority />
          <span className="text-[0.95rem] font-semibold tracking-tight text-ink-950">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-ink-950"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span aria-hidden className="text-[10px]">
                    ▾
                  </span>
                </Link>
                {openMenu === item.label && (
                  <div className="absolute left-0 top-full min-w-[240px] pt-2">
                    <div className="surface-card p-2 shadow-sm">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-paper-100 hover:text-ink-950"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:text-ink-950"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={assessmentCta.href}
            className="btn btn-primary hidden sm:inline-flex"
            onClick={() => trackEvent("assessment_cta_clicked", { location: "header" })}
          >
            {assessmentCta.label}
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-light)]"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-ink-950 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink-950 transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink-950 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id={menuId}
          className="lg:hidden border-t border-[var(--border-light)] bg-paper-50"
        >
          <nav className="container-avx flex flex-col gap-1 py-4" aria-label="Mobile">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-[var(--border-light)] py-2">
                <Link
                  href={item.href}
                  className="block py-2 text-base font-semibold text-ink-950"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-1.5 pl-3 text-sm text-slate-600"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href={assessmentCta.href}
              className="btn btn-primary mt-3"
              onClick={() => {
                setOpen(false);
                trackEvent("assessment_cta_clicked", { location: "mobile_header" });
              }}
            >
              {assessmentCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
