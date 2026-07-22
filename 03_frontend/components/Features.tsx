export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Assistant",
      description:
        "Advanced artificial intelligence that helps analyze the market, generate ideas and improve trading decisions.",
    },
    {
      icon: "📊",
      title: "Market Scanner",
      description:
        "Scan thousands of NSE & BSE stocks in seconds using professional AI filters.",
    },
    {
      icon: "⚡",
      title: "Strategy Builder",
      description:
        "Create, optimize and backtest your own professional trading strategies.",
    },
    {
      icon: "📈",
      title: "Portfolio Analytics",
      description:
        "Monitor portfolio growth, drawdown, risk analysis and long-term performance.",
    },
    {
      icon: "🤖",
      title: "Trading Bots",
      description:
        "Deploy AI-powered automated trading bots with advanced risk management.",
    },
    {
      icon: "🎓",
      title: "Premium Academy",
      description:
        "Learn from beginner to professional using structured trading courses.",
    },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            EVERYTHING YOU NEED
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            One Platform. Unlimited Possibilities.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            Build your complete trading journey with AI research,
            stock scanners, portfolio analytics, premium indicators,
            automated trading bots and professional education.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-10 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="text-6xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}