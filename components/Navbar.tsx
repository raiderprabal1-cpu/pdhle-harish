"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-black text-blue-500">
            PDHLE HARISH
          </h1>

          <p className="text-xs text-slate-400">
            Ab Is Baar Fateh Kro 🚀
          </p>
        </div>

        <div className="flex gap-6 font-semibold">

          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link href="/mock-tests" className="hover:text-blue-400">
            Mock Tests
          </Link>

          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>

          <Link href="/leaderboard" className="hover:text-blue-400">
            Leaderboard
          </Link>

        </div>

      </div>
    </nav>
  );
}