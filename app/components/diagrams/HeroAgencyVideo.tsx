"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function HeroAgencyVideo({
  className = "",
}: {
  className?: string;
}) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;
    if (visible) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [visible, reduced]);

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden rounded-[28px] border border-white/40 shadow-[var(--shadow-medium)] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#102445] to-[#07111f]" />
      {reduced ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/videos/hero-agency-poster.png"
          alt=""
          className="relative h-full w-full object-cover opacity-90"
        />
      ) : (
        <video
          ref={videoRef}
          className="relative h-full w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-agency-poster.png"
          aria-hidden
        >
          <source src="/videos/hero-agency.mp4" type="video/mp4" />
        </video>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/55 via-transparent to-cyan/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/70 to-transparent" />

      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/20 bg-navy/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-cyan backdrop-blur-md">
          Production systems
        </span>
        <span className="rounded-full border border-white/20 bg-navy/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-white/85 backdrop-blur-md">
          Human-controlled AI
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
        {[
          ["Intake", "Business signal"],
          ["Govern", "Approval + eval"],
          ["Operate", "Audit + monitor"],
        ].map(([title, body]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-cyan">
              {title}
            </p>
            <p className="mt-1 text-xs text-white/90">{body}</p>
          </div>
        ))}
      </div>

      <p className="sr-only">
        Short looping video of a global digital network visualization representing
        connected production AI systems. Decorative background media with no sound.
      </p>
    </div>
  );
}
