"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  TrendingUp,
  PieChart,
  Bot,
} from "lucide-react";

const metrics = [
  {
    title: "AI Accuracy",
    value: "96.8%",
    color: "text-cyan-400",
  },
  {
    title: "Daily Signals",
    value: "1,248",
    color: "text-green-400",
  },
  {
    title: "Strategies",
    value: "24",
    color: "text-purple-400",
  },
  {
    title: "Portfolio Return",
    value: "+32.4%",
    color: "text-orange-400",
  },
];

export default function DashboardPreview() {
  return (
    <section className="relative bg-[#08101d] py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
            PLATFORM DASHBOARD
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Professional Trading
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Manage your portfolio, monitor AI signals,
            track strategy performance and automate your
            trading from one enterprise dashboard.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <BrainCircuit className="h-7 w-7 text-cyan-400" />
              <span className="text-lg text-gray-300">
                AI-powered market intelligence
              </span>
            </div>

            <div className="flex items-center gap-4">
              <TrendingUp className="h-7 w-7 text-green-400" />
              <span className="text-lg text-gray-300">
                Real-time portfolio monitoring
              </span>
            </div>

            <div className="flex items-center gap-4">
              <PieChart className="h-7 w-7 text-purple-400" />
              <span className="text-lg text-gray-300">
                Institutional analytics
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Bot className="h-7 w-7 text-blue-400" />
              <span className="text-lg text-gray-300">
                Fully automated execution
              </span>
            </div>

          </div>

        </motion.div>

<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#111827] to-[#0B1220] p-8 shadow-2xl"
>

  <div className="mb-8 flex items-center justify-between">

    <div>
      <h3 className="text-2xl font-bold text-white">
        PAM AI Dashboard
      </h3>

      <p className="text-gray-400">
        Live Platform Overview
      </p>
    </div>

    <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-400 font-semibold">
      LIVE
    </div>

  </div>

  <div className="grid grid-cols-2 gap-6">

    {metrics.map((metric, index) => (

      <motion.div
        key={metric.title}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.03,
        }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6"
      >

        <p className="text-sm uppercase tracking-wider text-gray-500">
          {metric.title}
        </p>

        <h4 className={`mt-3 text-3xl font-black ${metric.color}`}>
          {metric.value}
        </h4>

      </motion.div>

    ))}

  </div>

  <div className="mt-10 space-y-6">

    <div>

      <div className="mb-2 flex justify-between text-sm text-gray-400">
        <span>AI Confidence</span>
        <span>96%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-800">
        <div className="h-3 w-[96%] rounded-full bg-cyan-400"></div>
      </div>

    </div>

    <div>

      <div className="mb-2 flex justify-between text-sm text-gray-400">
        <span>Portfolio Growth</span>
        <span>82%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-800">
        <div className="h-3 w-[82%] rounded-full bg-green-400"></div>
      </div>

    </div>

    <div>

      <div className="mb-2 flex justify-between text-sm text-gray-400">
        <span>Risk Score</span>
        <span>18%</span>
      </div>

      <div className="h-3 rounded-full bg-gray-800">
        <div className="h-3 w-[18%] rounded-full bg-purple-400"></div>
      </div>

    </div>

  </div>

</motion.div>

      </div>

    </section>
  );
}