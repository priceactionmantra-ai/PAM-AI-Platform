"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is PAM AI Platform?",
    answer:
      "PAM AI Platform is an enterprise-grade AI trading ecosystem designed for traders, investors and institutions. It combines AI-powered market analysis, automation and portfolio management.",
  },
  {
    question: "Which brokers are supported?",
    answer:
      "The platform is designed with broker integrations in mind and supports future connectivity with major Indian brokers such as Dhan, Zerodha, Upstox and others.",
  },
  {
    question: "Can beginners use the platform?",
    answer:
      "Yes. The platform is built for everyone—from beginners to professional traders—with guided workflows, education and AI-assisted insights.",
  },
  {
    question: "Does the platform provide automated trading?",
    answer:
      "Yes. Automated strategy execution is supported for compatible brokers while maintaining configurable risk controls.",
  },
  {
    question: "Is my trading data secure?",
    answer:
      "Absolutely. We use secure authentication, encrypted communication and enterprise-grade cloud infrastructure to protect your data.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#08101d] py-28">

      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Everything you need to know about PAM AI Platform.
          </p>

        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >

          {faqs.map((faq, index) => (

            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-white/10 bg-white/5 px-6"
            >

              <AccordionTrigger className="text-left text-lg font-semibold text-white">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 leading-7 text-gray-400">
                {faq.answer}
              </AccordionContent>

            </AccordionItem>

          ))}

        </Accordion>

      </div>

    </section>
  );
}