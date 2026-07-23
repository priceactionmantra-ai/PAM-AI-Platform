"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#050816] px-8">

      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0B1225] px-4 py-3 w-[420px]">

        <Search className="h-5 w-5 text-cyan-400" />

        <input
          type="text"
          placeholder="Search AI Scanner, Stocks..."
          className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-xl border border-white/10 bg-[#0B1225] p-3 transition hover:border-cyan-400">

          <Bell className="h-5 w-5 text-white" />

        </button>

        <div className="flex items-center gap-3">

          <UserCircle2 className="h-10 w-10 text-cyan-400" />

          <div>

            <p className="font-semibold text-white">
              Demo User
            </p>

            <p className="text-sm text-gray-400">
              Premium Plan
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}