"use client";

import { useEffect, useRef } from "react";

/**
 * Adds perspective depth: pointer tilt on [data-tilt], scroll parallax on [data-depth].
 * Only writes CSS variables so layered translateZ / rotate rules stay intact.
 */
export default function DepthMotion() {
  const frame = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tilts = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));

    function onPointer(e: PointerEvent) {
      tilts.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        if (!inside) {
          el.style.setProperty("--tilt-x", "0deg");
          el.style.setProperty("--tilt-y", "0deg");
          return;
        }
        el.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        el.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      });
    }

    function onScroll() {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const layers = document.querySelectorAll<HTMLElement>("[data-depth]");
        const vh = window.innerHeight;
        layers.forEach((el) => {
          const depth = Number(el.dataset.depth || "0.08");
          const rect = el.getBoundingClientRect();
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          el.style.setProperty(
            "--parallax-y",
            `${(-progress * depth * 80).toFixed(1)}px`
          );
        });
      });
    }

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return null;
}
