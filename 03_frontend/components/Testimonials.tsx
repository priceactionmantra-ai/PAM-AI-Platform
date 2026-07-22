"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Professional Swing Trader",
    company: "Hyderabad",
    review:
      "PAM AI completely changed how I analyze stocks. The AI Scanner alone saves me hours every day and significantly improves my decision making.",
  },
  {
    name: "Priya Sharma",
    role: "Portfolio Investor",
    company: "Bengaluru",
    review:
      "Portfolio Analytics and AI Backtester helped me build a disciplined investment process. The platform feels professional and reliable.",
  },
  {
    name: "Arjun Reddy",
    role: "Algorithmic Trader",
    company: "Vijayawada",
    review:
      "Strategy Builder combined with Broker Integration makes automation extremely easy. It feels like institutional software.",
  },
];

export default function Testimonials() {
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
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Trusted By Professional Traders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Thousands of traders and investors rely on PAM AI Platform
            every day to improve their market decisions.
          </p>

        </motion.div>

  <div className="mt-20 grid gap-8 lg:grid-cols-3">

  {testimonials.map((item, index) => (

    <motion.div
      key={item.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-white/10"
    >

      <div className="mb-6 flex">

        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      <p className="leading-8 text-gray-300 italic">
        "{item.review}"
      </p>

      <div className="mt-8 border-t border-white/10 pt-6">

        <h3 className="text-xl font-bold text-white">
          {item.name}
        </h3>

        <p className="mt-1 text-cyan-400">
          {item.role}
        </p>

        <p className="text-sm text-gray-500">
          {item.company}
        </p>

      </div>

    </motion.div>

  ))}

</div>

      </div>

    </section>
  );
}