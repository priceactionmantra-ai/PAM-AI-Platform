"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Search,
  LineChart,
  Brain,
  FlaskConical,
  Wallet,
  BookOpen,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "AI Scanner",
    icon: Search,
    href: "#",
  },
  {
    title: "Market Screener",
    icon: LineChart,
    href: "#",
  },
  {
    title: "Strategy Builder",
    icon: Brain,
    href: "#",
  },
  {
    title: "Backtester",
    icon: FlaskConical,
    href: "#",
  },
  {
    title: "Portfolio",
    icon: Wallet,
    href: "#",
  },
  {
    title: "Trading Journal",
    icon: BookOpen,
    href: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-[#0B1225] p-8">

      <h1 className="mb-12 text-3xl font-black text-cyan-400">
        PAM AI
      </h1>

      <nav className="space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 rounded-xl px-4 py-3 text-gray-400 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <Icon className="h-5 w-5" />

              <span>{item.title}</span>

            </Link>
          );
        })}

      </nav>

    </aside>
  );
}