import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // For demo only
    alert(`Welcome to GradHub, ${email || 'Guest'}!`);
  };

  return (
    <div className="relative p-6 md:p-8 lg:p-10">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-gradient-to-b from-white to-slate-50 shadow-xl shadow-blue-900/20 ring-1 ring-slate-200">
        <div className="px-6 py-6 md:px-8 md:py-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Login</h2>
          <p className="mt-1 text-sm text-slate-500">Access your courses, tracks, and progress.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@school.edu"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-sky-400 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)]"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-sky-400 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.15)]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-2.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:from-sky-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Login
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between text-sm">
            <a href="#" className="text-sky-600 hover:text-sky-500">Create an account</a>
            <a href="#" className="text-slate-500 hover:text-slate-700">Forget password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
