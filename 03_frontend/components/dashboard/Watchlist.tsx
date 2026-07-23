"use client";

const watchlist = [
  {
    symbol: "RELIANCE",
    price: "₹3,245.60",
    change: "+1.25%",
    signal: "BUY",
  },
  {
    symbol: "TCS",
    price: "₹4,128.40",
    change: "+0.84%",
    signal: "HOLD",
  },
  {
    symbol: "INFY",
    price: "₹1,982.15",
    change: "-0.42%",
    signal: "SELL",
  },
  {
    symbol: "HDFCBANK",
    price: "₹2,156.80",
    change: "+0.91%",
    signal: "BUY",
  },
];

export default function Watchlist() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Live Watchlist
        </h2>

        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
          Live
        </span>

      </div>

      <div className="space-y-4">

        {watchlist.map((stock) => (

          <div
            key={stock.symbol}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-[#111827] px-5 py-4"
          >

            <div>

              <p className="font-bold text-white">
                {stock.symbol}
              </p>

              <p className="text-sm text-gray-400">
                {stock.price}
              </p>

            </div>

            <div className="text-right">

              <p
                className={`font-semibold ${
                  stock.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stock.change}
              </p>

              <span
                className={`text-sm font-bold ${
                  stock.signal === "BUY"
                    ? "text-green-400"
                    : stock.signal === "SELL"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {stock.signal}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}