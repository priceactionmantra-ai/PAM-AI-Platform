"use client";

const trades = [
  {
    stock: "RELIANCE",
    side: "BUY",
    entry: "₹3240.50",
    pnl: "+₹3,420",
  },
  {
    stock: "TCS",
    side: "BUY",
    entry: "₹4125.80",
    pnl: "+₹1,840",
  },
  {
    stock: "INFY",
    side: "SELL",
    entry: "₹1980.40",
    pnl: "-₹620",
  },
];

export default function RecentTrades() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Trades
      </h2>

      <div className="space-y-4">

        {trades.map((trade) => (

          <div
            key={trade.stock}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-[#111827] px-5 py-4"
          >

            <div>

              <p className="font-bold text-white">
                {trade.stock}
              </p>

              <p className="text-sm text-gray-400">
                {trade.entry}
              </p>

            </div>

            <span
              className={`rounded-lg px-3 py-1 text-sm font-bold ${
                trade.side === "BUY"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {trade.side}
            </span>

            <p
              className={`font-bold ${
                trade.pnl.startsWith("+")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {trade.pnl}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}