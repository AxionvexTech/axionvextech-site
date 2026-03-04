"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selector = ".avx-fade-in-up, .avx-fade-in-up-delay, .avx-hero-graphic";
    const elements = Array.from(document.querySelectorAll(selector));
    if (!('IntersectionObserver' in window)) {
      // If IO not supported, reveal all
      elements.forEach((el) => el.classList.add('avx-in'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('avx-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
