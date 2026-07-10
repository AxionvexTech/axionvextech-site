"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { assessmentCta, primaryNav } from "@/content/navigation";
import { siteConfig, recruitingConfig } from "@/content/site";
import { trackEvent } from "@/app/lib/analytics";

function useMounted() {
  return useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const mounted = useMounted();
  const menuId = useId();

  const nav = primaryNav.filter((item) => {
    if (item.label === "Careers") return recruitingConfig.showInPrimaryNav;
    return true;
  });

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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenMenu(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const mobileMenu =
    open && mounted
      ? createPortal(
          <div
            id={menuId}
            className="lg:hidden fixed inset-0 z-[100]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-navy/40"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-border bg-canvas shadow-[var(--shadow-medium)]">
              <div className="container-avx flex h-16 items-center justify-between gap-4">
                <Link
                  href="/"
                  className="flex items-center gap-2.5 shrink-0"
                  aria-label={siteConfig.name}
                  onClick={() => setOpen(false)}
                >
                  <Image src="/icon.svg" alt="" width={28} height={28} />
                  <span className="text-[0.95rem] font-semibold tracking-tight text-ink">
                    {siteConfig.name}
                  </span>
                </Link>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden className="relative block h-4 w-4">
                    <span className="absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 rotate-45 bg-ink" />
                    <span className="absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 -rotate-45 bg-ink" />
                  </span>
                </button>
              </div>
              <nav className="container-avx flex flex-col gap-1 pb-10 pt-2" aria-label="Mobile">
                {nav.map((item) => (
                  <div key={item.label} className="border-b border-border/70 py-2">
                    <Link
                      href={item.href}
                      className="block px-1 py-2.5 text-base font-semibold text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {(item.mega?.groups.flatMap((g) => g.items) ?? item.children)?.map(
                      (child) => (
                        <Link
                          key={`${item.label}-${child.href}-${child.label}`}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm text-ink-secondary"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                ))}
                <Link
                  href={assessmentCta.href}
                  className="btn btn-primary mt-5"
                  onClick={() => {
                    setOpen(false);
                    trackEvent("assessment_cta_clicked", { location: "mobile_nav" });
                  }}
                >
                  {assessmentCta.label}
                </Link>
              </nav>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : "is-transparent"}`}
    >
      <div className="container-avx flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={siteConfig.name}>
          <Image src="/icon.svg" alt="" width={28} height={28} priority />
          <span className="text-[0.95rem] font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {nav.map((item) =>
            item.mega || item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-secondary hover:text-ink"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onFocus={() => setOpenMenu(item.label)}
                >
                  {item.label}
                  <span aria-hidden className="text-[10px] opacity-60">
                    ▾
                  </span>
                </Link>
                {openMenu === item.label && item.mega ? (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                    <div className="mega-menu" role="menu">
                      <div className="grid gap-6 sm:grid-cols-2">
                        {item.mega.groups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                              {group.title}
                            </p>
                            <ul className="space-y-1">
                              {group.items.map((child) => (
                                <li key={`${group.title}-${child.label}`}>
                                  <Link
                                    href={child.href}
                                    className="block rounded-xl px-3 py-2.5 hover:bg-surface-blue"
                                    role="menuitem"
                                    onClick={() => setOpenMenu(null)}
                                  >
                                    <span className="block text-sm font-semibold text-ink">
                                      {child.label}
                                    </span>
                                    {child.description ? (
                                      <span className="mt-0.5 block text-xs leading-snug text-ink-muted">
                                        {child.description}
                                      </span>
                                    ) : null}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-border pt-3">
                        <Link
                          href={item.href}
                          className="text-sm font-semibold text-blue hover:underline"
                          onClick={() => setOpenMenu(null)}
                        >
                          View all solutions →
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
                {openMenu === item.label && !item.mega && item.children ? (
                  <div className="absolute left-0 top-full min-w-[240px] pt-2">
                    <div className="surface-card p-2 shadow-[var(--shadow-soft)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-ink-secondary hover:bg-surface-soft hover:text-ink"
                          onClick={() => setOpenMenu(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-secondary hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={assessmentCta.href}
            className="btn btn-primary header-cta-desktop"
            onClick={() => trackEvent("assessment_cta_clicked", { location: "header" })}
          >
            {assessmentCta.label}
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {mobileMenu}
    </header>
  );
}
