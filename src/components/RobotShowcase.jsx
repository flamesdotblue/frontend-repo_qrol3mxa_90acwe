import React from 'react';
import Spline from '@splinetool/react-spline';
import { GraduationCap, BookOpen, Cpu, Sparkles } from 'lucide-react';

export default function RobotShowcase() {
  return (
    <div className="relative flex flex-col gap-6 p-6 md:p-8 lg:p-10">
      {/* Title */}
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center justify-center rounded-xl bg-white/10 p-2 ring-1 ring-white/10 backdrop-blur">
          <GraduationCap className="h-5 w-5 text-sky-300" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]">
          GradHub
        </h1>
      </div>
      <p className="max-w-md text-sky-100/80">
        Where learning meets cutting-edge tech. Sign in and continue your journey.
      </p>

      {/* Smartphone frame with Spline robot inside */}
      <div className="relative mx-auto w-full max-w-xl">
        <div className="relative mx-auto h-[420px] w-[260px] rounded-[2.5rem] border border-white/20 bg-gradient-to-b from-slate-900/60 to-slate-800/40 p-2 shadow-[0_20px_60px_-15px_rgba(14,165,233,0.45)] backdrop-blur">
          {/* Speaker notch */}
          <div className="mx-auto mb-2 mt-1 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="relative h-[360px] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* Soft blue reflections */}
            <div className="pointer-events-none absolute -left-6 top-10 h-40 w-40 rounded-full bg-sky-400/25 blur-2xl" />
            <div className="pointer-events-none absolute right-6 bottom-6 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
          </div>
        </div>

        {/* Floating UI icons around the phone */}
        <IconBadge className="absolute -left-6 top-8 animate-bounce" glowColor="from-sky-400 to-cyan-400">
          <BookOpen className="h-4 w-4" />
        </IconBadge>
        <IconBadge className="absolute -right-4 top-20 animate-pulse" glowColor="from-blue-500 to-sky-400">
          <Cpu className="h-4 w-4" />
        </IconBadge>
        <IconBadge className="absolute -right-10 bottom-10 animate-bounce" glowColor="from-indigo-400 to-sky-300">
          <Sparkles className="h-4 w-4" />
        </IconBadge>
      </div>
    </div>
  );
}

function IconBadge({ children, className = '', glowColor = 'from-sky-400 to-blue-400' }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className={`absolute inset-0 -z-0 blur-2xl bg-gradient-to-br ${glowColor} opacity-60 rounded-full`} />
      <div className="relative inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-sky-100 ring-1 ring-white/15 backdrop-blur">
        {children}
      </div>
    </div>
  );
}
