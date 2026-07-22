"use client";

import { motion } from "framer-motion";
import {
  Bot,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "96.8%",
    label: "AI Signal Accuracy",
    color: "text-cyan-400",
  },
  {
    icon: Bot,
    value: "24+",
    label: "Trading Bots",
    color: "text-blue-400",
  },
  {
    icon: Users,
    value: "15K+",
    label: "Community Members",
    color: "text-purple-400",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "Platform Uptime",
    color: "text-green-400",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
            PLATFORM STATISTICS
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Trusted By Modern Traders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Powerful AI infrastructure built for professional traders,
            investors and institutions.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-400/30"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className={`h-8 w-8 ${item.color}`} />

                </div>

                <h3 className={`text-5xl font-black ${item.color}`}>
                  {item.value}
                </h3>

                <p className="mt-4 text-lg text-gray-400">
                  {item.label}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}