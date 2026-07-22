"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  BarChart3,
  BookOpen,
  Wallet,
  LineChart,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Stock Scanner",
    description:
      "Find high-probability trading opportunities using AI-powered market scanning.",
    color: "text-cyan-400",
  },
  {
    icon: Bot,
    title: "Auto Trading",
    description:
      "Execute rule-based strategies automatically with broker integration.",
    color: "text-blue-400",
  },
  {
    icon: BarChart3,
    title: "Strategy Builder",
    description:
      "Build, test and optimize professional trading strategies visually.",
    color: "text-purple-400",
  },
  {
    icon: Wallet,
    title: "Portfolio Analytics",
    description:
      "Track returns, risk, drawdowns and portfolio performance in real time.",
    color: "text-green-400",
  },
  {
    icon: BookOpen,
    title: "Trading Journal",
    description:
      "Automatically record trades and improve decision making with AI insights.",
    color: "text-orange-400",
  },
  {
    icon: LineChart,
    title: "Market Research",
    description:
      "Institutional-grade market analysis with AI-generated reports.",
    color: "text-pink-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Platform",
    description:
      "Trade, monitor and receive alerts anywhere from your mobile device.",
    color: "text-yellow-400",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Bank-grade security, encryption and secure cloud infrastructure.",
    color: "text-emerald-400",
  },
];

export default function Features() {
  return (
    <section className="relative bg-[#08101d] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
            ENTERPRISE FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need
            <br />
            To Trade Smarter
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            One AI platform combining research, automation,
            education, portfolio management and institutional tools.
          </p>

        </motion.div>

<div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

  {features.map((feature, index) => {
    const Icon = feature.icon;

    return (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/10"
      >

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:scale-110">

          <Icon className={`h-8 w-8 ${feature.color}`} />

        </div>

        <h3 className="mb-4 text-2xl font-bold text-white">
          {feature.title}
        </h3>

        <p className="leading-7 text-gray-400">
          {feature.description}
        </p>

      </motion.div>
    );
  })}

</div>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-20 text-center"
>

  <button className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-cyan-400">
    Explore All Features
  </button>

</motion.div>

      </div>

    </section>
  );
}