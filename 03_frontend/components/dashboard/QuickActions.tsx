"use client";

import {
  Search,
  Brain,
  FlaskConical,
  Wallet,
} from "lucide-react";

const actions = [
  {
    title: "AI Scanner",
    icon: Search,
  },
  {
    title: "Strategy Builder",
    icon: Brain,
  },
  {
    title: "Backtester",
    icon: FlaskConical,
  },
  {
    title: "Portfolio",
    icon: Wallet,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#111827] p-6 transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Icon className="mb-3 h-8 w-8 text-cyan-400" />

              <span className="font-medium text-white">
                {action.title}
              </span>
            </button>
          );
        })}

      </div>

    </section>
  );
}