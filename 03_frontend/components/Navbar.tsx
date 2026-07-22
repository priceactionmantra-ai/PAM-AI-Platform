"use client";

import Link from "next/link";

export default function Navbar() {
  const menu = [
    "Home",
    "Products",
    "Courses",
    "Trading Bots",
    "Indicators",
    "Pricing",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-xl font-black text-black">
            PAM
          </div>

          <div>

            <h1 className="text-xl font-black text-white">
              PAM AI
            </h1>

            <p className="-mt-1 text-xs text-cyan-400">
              Next Generation Trading Platform
            </p>

          </div>

        </Link>

        {/* Menu */}

        <nav className="hidden gap-8 lg:flex">

          {menu.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {item}
            </Link>
          ))}

        </nav>

        {/* Buttons */}

        <div className="flex gap-4">

          <button className="rounded-xl border border-gray-700 px-5 py-2 text-white transition hover:border-cyan-400">
            Login
          </button>

          <button className="rounded-xl bg-cyan-500 px-6 py-2 font-bold text-black transition hover:scale-105">
            Get Started
          </button>

        </div>

      </div>
    </header>
  );
}