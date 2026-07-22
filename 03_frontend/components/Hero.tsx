"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="grid w-full gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >

            <div className="mb-8 inline-flex w-fit items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
              🚀 AI Powered Trading Platform
            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Trade Smarter
              <br />
              Build Wealth
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                With Artificial
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              PAM AI Platform combines AI research, stock scanners,
              trading bots, premium indicators, portfolio analytics,
              education and automation into one professional ecosystem.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition hover:border-cyan-400">
                <PlayCircle size={20} />
                Watch Demo
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >

            <div className="relative w-full max-w-xl">

              {/* Dashboard */}

              <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

                <div className="mb-6 flex items-center justify-between">

                  <h2 className="text-xl font-bold text-white">
                    AI Dashboard
                  </h2>

                  <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
                    LIVE
                  </div>

                </div>

                <div className="space-y-5">

                  <div className="rounded-xl bg-[#111827] p-5">
                    <div className="text-sm text-gray-400">
                      Signal Accuracy
                    </div>

                    <div className="mt-2 text-4xl font-black text-cyan-400">
                      96.8%
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">

                    <div className="rounded-xl bg-[#111827] p-5">
                      <div className="text-sm text-gray-400">
                        Active Bots
                      </div>

                      <div className="mt-2 text-3xl font-bold text-white">
                        24
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#111827] p-5">
                      <div className="text-sm text-gray-400">
                        Strategies
                      </div>

                      <div className="mt-2 text-3xl font-bold text-white">
                        132
                      </div>
                    </div>

                  </div>

                  <div className="rounded-xl bg-[#111827] p-5">

                    <div className="mb-4 flex justify-between text-sm text-gray-400">
                      <span>Portfolio Growth</span>
                      <span className="text-green-400">
                        +38%
                      </span>
                    </div>

                    <div className="h-3 rounded-full bg-gray-700">
                      <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    </div>

                  </div>

                </div>

              </div>

              {/* Floating Card */}

              <div className="absolute -left-10 top-12 rounded-2xl border border-cyan-500/20 bg-[#0b1224] p-5 shadow-xl">

                <div className="text-sm text-gray-400">
                  Today's Signals
                </div>

                <div className="mt-2 text-3xl font-black text-green-400">
                  18
                </div>

              </div>

              <div className="absolute -right-10 bottom-10 rounded-2xl border border-cyan-500/20 bg-[#0b1224] p-5 shadow-xl">

                <div className="text-sm text-gray-400">
                  Win Rate
                </div>

                <div className="mt-2 text-3xl font-black text-cyan-400">
                  92%
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}