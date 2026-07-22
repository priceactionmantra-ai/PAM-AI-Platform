export default function Stats() {
  const stats = [
    {
      number: "50K+",
      title: "Active Traders",
      description: "Trusted community across India",
    },
    {
      number: "120+",
      title: "Premium Indicators",
      description: "TradingView & MT4 tools",
    },
    {
      number: "15+",
      title: "AI Products",
      description: "Complete AI ecosystem",
    },
    {
      number: "98%",
      title: "Customer Satisfaction",
      description: "Professional support",
    },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            PLATFORM STATISTICS
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Trusted By Thousands Of Traders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            PAM AI Platform provides professional education,
            AI-powered scanners, automated trading bots,
            portfolio analytics and premium indicators
            for serious traders and investors.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-10 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h3>

              <h4 className="mt-5 text-2xl font-bold text-white">
                {item.title}
              </h4>

              <p className="mt-4 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}