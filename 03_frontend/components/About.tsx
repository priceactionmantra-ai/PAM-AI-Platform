"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Landmark,
  Shield,
  Cpu,
} from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI First",
    description:
      "Artificial Intelligence powers every trading decision.",
    color: "text-cyan-400",
  },
  {
    icon: Landmark,
    title: "Indian Markets",
    description:
      "Designed specifically for NSE, BSE and Dhan integration.",
    color: "text-blue-400",
  },
  {
    icon: Cpu,
    title: "Enterprise Ready",
    description:
      "Modular architecture built for long-term scalability.",
    color: "text-purple-400",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description:
      "Security and reliability are core design principles.",
    color: "text-green-400",
  },
];

export default function About() {
  return (
    <section className="relative bg-[#050816] py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
            ABOUT PAM AI
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Building India's Next Generation
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Trading Ecosystem
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            PAM AI Platform is an enterprise-grade ecosystem that combines
            artificial intelligence, quantitative analytics, algorithmic
            trading, research, education and automation into one unified
            platform.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our mission is to help traders, investors and institutions make
            smarter, faster and more disciplined decisions using modern AI
            technology built specifically for the Indian financial markets.
          </p>

        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">

{highlights.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/10"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

        <Icon className={`h-8 w-8 ${item.color}`} />

      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {item.title}
      </h3>

      <p className="leading-7 text-gray-400">
        {item.description}
      </p>

    </motion.div>
  );
})}

        </div>

      </div>

    </section>
  );
}