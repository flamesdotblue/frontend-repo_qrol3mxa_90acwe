import React from 'react';

export default function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700" />

      {/* Soft radial glows */}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-sky-500/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />

      {/* Tech grid with nodes */}
      <svg className="pointer-events-none absolute inset-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grad-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(147,197,253,0.12)" strokeWidth="1" />
          </pattern>
          <linearGradient id="wire-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(56,189,248,0.9)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.25)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad-grid)" />
        <g stroke="url(#wire-glow)" strokeWidth="1.6" fill="none">
          <path d="M 40 140 L 220 100 L 420 180 L 680 120" />
          <path d="M 120 340 L 360 280 L 520 360 L 860 300" />
          <path d="M 60 520 L 300 480 L 560 560 L 900 520" />
        </g>
        <g fill="rgba(125,211,252,0.95)">
          <circle cx="220" cy="100" r="3" />
          <circle cx="420" cy="180" r="3" />
          <circle cx="680" cy="120" r="3" />
          <circle cx="360" cy="280" r="3" />
          <circle cx="520" cy="360" r="3" />
          <circle cx="860" cy="300" r="3" />
          <circle cx="300" cy="480" r="3" />
          <circle cx="560" cy="560" r="3" />
          <circle cx="900" cy="520" r="3" />
        </g>
      </svg>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent,rgba(2,6,23,0.6))]" />
    </div>
  );
}
