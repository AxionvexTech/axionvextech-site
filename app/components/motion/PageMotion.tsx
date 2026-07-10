"use client";

import { useEffect, useRef } from "react";

/**
 * Observes [data-reveal] elements and adds .is-revealed when they enter view.
 * Also enables subtle interactive pointer glow on [data-glow] panels.
 */
export default function PageMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduced) {
      nodes.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${Math.min(i % 6, 5) * 45}ms`);
      io.observe(el);
    });

    function onPointer(e: PointerEvent) {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-glow]");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      target.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    }

    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <div ref={rootRef} className="hidden" aria-hidden />;
}

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  return (
    <Tag data-reveal className={`reveal-on-scroll ${className}`}>
      {children}
    </Tag>
  );
}
