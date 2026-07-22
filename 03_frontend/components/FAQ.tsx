"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />

      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-white/5 px-8 py-20 text-center backdrop-blur-xl"
      >

        <h2 className="text-5xl font-black text-white">
          Ready To Transform
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Your Trading?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Join thousands of traders using AI-powered market intelligence,
          professional analytics and automation to trade smarter.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">

          <button className="rounded-xl bg-cyan-400 px-10 py-5 text-lg font-bold text-black transition hover:bg-cyan-300">
            Start Free Trial
          </button>

          <button className="flex items-center justify-center gap-3 rounded-xl border border-white/20 px-10 py-5 text-lg font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400">
            Book Live Demo
            <ArrowRight className="h-5 w-5" />
          </button>

        </div>

      </motion.div>

    </section>
  );
}