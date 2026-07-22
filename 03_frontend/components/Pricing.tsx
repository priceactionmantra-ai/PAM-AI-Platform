"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    popular: false,
    features: [
      "AI Stock Scanner",
      "Market Screener",
      "Trading Journal",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "₹2,999",
    period: "/month",
    popular: true,
    features: [
      "Everything in Starter",
      "AI Backtester",
      "Strategy Builder",
      "Portfolio Analytics",
      "AI Research Assistant",
      "Broker Integration",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Everything in Professional",
      "API Access",
      "Multi-user Management",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Custom AI Models",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-[#08101d] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-400">
            PRICING
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Simple & Transparent Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Choose the plan that matches your trading journey,
            from individual traders to enterprise institutions.
          </p>

        </motion.div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

  {plans.map((plan, index) => (

    <motion.div
      key={plan.name}
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
      className={`relative rounded-3xl border p-10 backdrop-blur-xl transition-all ${
        plan.popular
          ? "border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20"
          : "border-white/10 bg-white/5 hover:border-cyan-400/30"
      }`}
    >

      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-black">
          MOST POPULAR
        </div>
      )}

      <h3 className="text-3xl font-bold text-white">
        {plan.name}
      </h3>

      <div className="mt-6 flex items-end">

        <span className="text-5xl font-black text-cyan-400">
          {plan.price}
        </span>

        <span className="ml-2 text-gray-400">
          {plan.period}
        </span>

      </div>

      <div className="mt-10 space-y-4">

        {plan.features.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-3"
          >

            <Check className="h-5 w-5 text-green-400" />

            <span className="text-gray-300">
              {feature}
            </span>

          </div>

        ))}

      </div>

      <button
        className={`mt-10 w-full rounded-xl py-4 text-lg font-bold transition-all ${
          plan.popular
            ? "bg-cyan-400 text-black hover:bg-cyan-300"
            : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
        }`}
      >
        Get Started
      </button>

    </motion.div>

  ))}

</div>

      </div>

    </section>
  );
}