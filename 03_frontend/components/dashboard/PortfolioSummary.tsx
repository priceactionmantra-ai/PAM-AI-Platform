"use client";

const positions = [
  {
    symbol: "RELIANCE",
    qty: "120",
    pnl: "+₹12,450",
    color: "text-green-400",
  },
  {
    symbol: "TCS",
    qty: "50",
    pnl: "+₹4,120",
    color: "text-green-400",
  },
  {
    symbol: "HDFCBANK",
    qty: "80",
    pnl: "-₹1,280",
    color: "text-red-400",
  },
];

export default function PortfolioSummary() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Portfolio Summary
      </h2>

      <div className="space-y-4">

        {positions.map((item) => (

          <div
            key={item.symbol}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-[#111827] px-5 py-4"
          >

            <div>

              <p className="font-semibold text-white">
                {item.symbol}
              </p>

              <p className="text-sm text-gray-400">
                Qty : {item.qty}
              </p>

            </div>

            <p className={`text-lg font-bold ${item.color}`}>
              {item.pnl}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}