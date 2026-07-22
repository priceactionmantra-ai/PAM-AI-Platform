export default function DashboardPreview() {
  const cards = [
    {
      title: "AI Market Scanner",
      value: "324",
      subtitle: "Stocks Scanned Today",
    },
    {
      title: "Trading Signals",
      value: "18",
      subtitle: "High Probability",
    },
    {
      title: "Portfolio",
      value: "₹12.8L",
      subtitle: "Current Value",
    },
    {
      title: "Win Rate",
      value: "87%",
      subtitle: "Last 30 Days",
    },
    {
      title: "Risk Score",
      value: "LOW",
      subtitle: "Portfolio Health",
    },
    {
      title: "AI Confidence",
      value: "96%",
      subtitle: "Market Prediction",
    },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            LIVE PLATFORM
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Professional Trading Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400">
            Everything you need is available inside one intelligent dashboard.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-8 transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <p className="text-gray-400">
                {card.title}
              </p>

              <h3 className="mt-4 text-5xl font-black text-cyan-400">
                {card.value}
              </h3>

              <p className="mt-3 text-gray-500">
                {card.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}