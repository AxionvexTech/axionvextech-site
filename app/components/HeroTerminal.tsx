"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: true, text: "git push origin main" },
  { prompt: false, text: "Enumerating objects: 14, done." },
  { prompt: false, text: "Compressing objects: 100% (12/12)" },
  { prompt: false, text: "Writing objects: 100% (14/14), 3.21 KiB" },
  { prompt: false, text: "remote: Resolving deltas: 100% (8/8)" },
  { prompt: false, text: "To github.com:client/platform-api.git" },
  { prompt: false, text: "   a3f1e2d..c7b8a9f  main -> main", highlight: true },
  { prompt: true, text: "curl -s https://api.client.com/health" },
  { prompt: false, text: '{ "status": "healthy", "latency": "12ms" }', highlight: true },
  { prompt: true, text: "_" },
];

export default function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Terminal window */}
      <div className="bg-slate-900/80 backdrop-blur border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-3 text-xs text-slate-500 font-mono">
            production — ssh deploy@client
          </span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed space-y-1 min-h-[260px]">
          {lines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className={`${
                line.highlight
                  ? "text-emerald-400"
                  : line.prompt
                  ? "text-slate-300"
                  : "text-slate-500"
              }`}
            >
              {line.prompt && (
                <span className="text-blue-400 select-none">$ </span>
              )}
              {line.text === "_" ? (
                <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse align-middle" />
              ) : (
                line.text
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating status badge */}
      <div className="absolute -bottom-4 -right-4 bg-emerald-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
        deployed to production
      </div>
    </div>
  );
}
