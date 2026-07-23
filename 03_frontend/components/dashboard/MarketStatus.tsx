"use client";

const markets = [
  {
    name: "NIFTY 50",
    value: "28,452.30",
    change: "+0.82%",
    color: "text-green-400",
  },
  {
    name: "BANK NIFTY",
    value: "63,214.80",
    change: "+0.61%",
    color: "text-green-400",
  },
  {
    name: "SENSEX",
    value: "93,418.55",
    change: "+0.73%",
    color: "text-green-400",
  },
];

export default function MarketStatus() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Live Market Status
      </h2>

      <div className="space-y-5">

        {markets.map((market) => (

          <div
            key={market.name}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-[#111827] px-5 py-4"
          >

            <div>

              <p className="font-semibold text-white">
                {market.name}
              </p>

              <p className="text-sm text-gray-400">
                Indian Equity Index
              </p>

            </div>

            <div className="text-right">

              <p className="text-xl font-bold text-white">
                {market.value}
              </p>

              <p className={`font-semibold ${market.color}`}>
                {market.change}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}