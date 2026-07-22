export default function FAQ() {
  const faqs = [
    {
      question: "What is PAM AI Platform?",
      answer:
        "PAM AI Platform is an all-in-one AI-powered trading ecosystem for Indian stock market traders and investors.",
    },
    {
      question: "Does it support automated trading?",
      answer:
        "Yes. The platform includes AI Trading Bots with advanced risk management and broker integrations.",
    },
    {
      question: "Can beginners use this platform?",
      answer:
        "Absolutely. The platform includes a complete Trading Academy with beginner to advanced courses.",
    },
    {
      question: "Which markets are supported?",
      answer:
        "Initially the platform focuses on NSE and BSE cash equity markets, with future expansion planned.",
    },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-800 bg-[#111827] p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}