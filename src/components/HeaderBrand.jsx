import React from 'react';

export default function HeaderBrand() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-10">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10 backdrop-blur" />
        <span className="text-lg font-semibold tracking-wide text-white/90">GradHub</span>
      </div>
      <div className="hidden text-sm text-sky-200/80 md:block">Futuristic Learning Platform</div>
    </header>
  );
}
