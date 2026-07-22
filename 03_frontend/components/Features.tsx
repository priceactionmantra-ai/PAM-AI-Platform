"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  LineChart,
  BarChart3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Market Intelligence",
    description:
      "Advanced AI analyzes thousands of market signals every second.",
  },
  {
    icon: Bot,
    title: "Automated Trading Bots",
    description:
      "Deploy intelligent trading bots with professional risk management.",
  },
  {
    icon: LineChart,
    title: "Strategy Builder",
    description:
      "Create, optimize and backtest professional trading strategies.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description:
      "Track performance with institutional-grade analytics dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Multi-layer security, encrypted APIs and secure cloud infrastructure.",
  },
  {
    icon: Smartphone,
    title: "Trade Anywhere",
    description:
      "Access your portfolio, bots and AI from desktop, tablet or mobile.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
            PLATFORM FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need To Trade Smarter
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Designed for beginners, professionals and institutions with
            enterprise-grade AI infrastructure.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .1,
                  duration: .5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className="h-8 w-8 text-cyan-400 transition group-hover:scale-110" />

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

      </div>
    </section>
  );
}