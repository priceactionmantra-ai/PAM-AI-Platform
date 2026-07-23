"use client";

import {
  TrendingUp,
  Wallet,
  Activity,
  Brain,
} from "lucide-react";

const cards = [
  {
    title: "Portfolio Value",
    value: "₹12,45,800",
    change: "+5.24%",
    icon: Wallet,
    color: "text-green-400",
  },
  {
    title: "Today's P&L",
    value: "+₹18,420",
    change: "+1.84%",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
  {
    title: "Active AI Signals",
    value: "18",
    change: "Live",
    icon: Brain,
    color: "text-purple-400",
  },
  {
    title: "Open Positions",
    value: "7",
    change: "Running",
    icon: Activity,
    color: "text-orange-400",
  },
];

export default function OverviewCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-[#0B1225] p-6"
          >

            <div className="mb-5 flex items-center justify-between">

              <Icon className={`h-8 w-8 ${card.color}`} />

              <span className={`text-sm font-semibold ${card.color}`}>
                {card.change}
              </span>

            </div>

            <p className="text-sm text-gray-400">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              {card.value}
            </h2>

          </div>
        );
      })}

    </section>
  );
}