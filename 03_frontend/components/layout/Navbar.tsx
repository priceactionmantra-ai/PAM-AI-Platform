"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 font-bold text-black">
            PAM
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              PAM AI Platform
            </h1>

            <p className="text-xs text-gray-400">
              AI Powered Trading
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="#"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="#"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            Products
          </Link>

          <Link
            href="#"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            AI Scanner
          </Link>

          <Link
            href="#"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            Academy
          </Link>

          <Link
            href="#"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            Pricing
          </Link>

        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          <button className="rounded-xl border border-gray-700 px-5 py-2 text-sm text-white transition hover:border-cyan-400">
            Login
          </button>

          <button className="rounded-xl bg-cyan-500 px-5 py-2 text-sm font-bold text-black transition hover:bg-cyan-400">
            Get Started
          </button>

        </div>

        {/* Mobile */}

        <button className="lg:hidden">
          <Menu className="h-7 w-7 text-white" />
        </button>

      </div>
    </header>
  );
}