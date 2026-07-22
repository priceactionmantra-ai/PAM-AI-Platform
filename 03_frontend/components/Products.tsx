"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Search,
  BarChart3,
  FlaskConical,
  BookOpen,
  PieChart,
  Newspaper,
  GraduationCap,
  Smartphone,
  PlugZap,
  Users,
  Bot,
} from "lucide-react";

const products = [
  {
    icon: BrainCircuit,
    title: "AI Stock Scanner",
    description: "AI scans thousands of stocks to find high-probability opportunities.",
    status: "Available",
    color: "text-cyan-400",
  },
  {
    icon: Search,
    title: "Market Screener",
    description: "Advanced filtering based on technical and fundamental conditions.",
    status: "Available",
    color: "text-blue-400",
  },
  {
    icon: BarChart3,
    title: "Strategy Builder",
    description: "Create and optimize trading strategies without complexity.",
    status: "Available",
    color: "text-purple-400",
  },
  {
    icon: FlaskConical,
    title: "AI Backtester",
    description: "Validate trading strategies using historical market data.",
    status: "Available",
    color: "text-green-400",
  },
  {
    icon: BookOpen,
    title: "Trading Journal",
    description: "Automatically record and analyze every executed trade.",
    status: "Available",
    color: "text-orange-400",
  },
  {
    icon: PieChart,
    title: "Portfolio Analytics",
    description: "Monitor performance, risk, allocation and growth.",
    status: "Available",
    color: "text-pink-400",
  },
  {
    icon: Bot,
    title: "AI Research Assistant",
    description: "Instant market intelligence powered by AI.",
    status: "Coming Soon",
    color: "text-indigo-400",
  },
  {
    icon: Newspaper,
    title: "AI News Summary",
    description: "Daily market news summarized using AI.",
    status: "Coming Soon",
    color: "text-red-400",
  },
  {
    icon: GraduationCap,
    title: "AI Education Academy",
    description: "Professional trading education with structured learning.",
    status: "Coming Soon",
    color: "text-yellow-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Trade and monitor your portfolio anywhere.",
    status: "Coming Soon",
    color: "text-emerald-400",
  },
  {
    icon: PlugZap,
    title: "API Platform",
    description: "Developer APIs for automation and integrations.",
    status: "Coming Soon",
    color: "text-sky-400",
  },
  {
    icon: Users,
    title: "Community",
    description: "Collaborate with traders and investors worldwide.",
    status: "Coming Soon",
    color: "text-violet-400",
  },
];

export default function Products() {
  return (
    <section className="relative bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
            PAM AI ECOSYSTEM
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Complete Product Suite
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Everything required for modern trading, investing,
            automation and financial intelligence in one platform.
          </p>

        </motion.div>

<div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

  {products.map((product, index) => {
    const Icon = product.icon;

    return (
      <motion.div
        key={product.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.06,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/10"
      >

        <div className="mb-6 flex items-center justify-between">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
            <Icon className={`h-8 w-8 ${product.color}`} />
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              product.status === "Available"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {product.status}
          </span>

        </div>

        <h3 className="text-2xl font-bold text-white">
          {product.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {product.description}
        </p>

      </motion.div>
    );
  })}

</div>

      </div>

    </section>
  );
}