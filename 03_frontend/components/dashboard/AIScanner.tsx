"use client";

const signals = [
  {
    symbol: "RELIANCE",
    timeframe: "15 Min",
    signal: "BUY",
    score: 92,
  },
  {
    symbol: "TCS",
    timeframe: "1 Hour",
    signal: "BUY",
    score: 88,
  },
  {
    symbol: "INFY",
    timeframe: "30 Min",
    signal: "HOLD",
    score: 73,
  },
  {
    symbol: "HDFCBANK",
    timeframe: "15 Min",
    signal: "SELL",
    score: 64,
  },
];

export default function AIScanner() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          AI Scanner
        </h2>

        <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
          AI Engine
        </span>

      </div>

      <div className="space-y-4">

        {signals.map((item) => (

          <div
            key={item.symbol}
            className="flex items-center justify-between rounded-xl border border-white/5 bg-[#111827] px-5 py-4"
          >

            <div>

              <p className="font-bold text-white">
                {item.symbol}
              </p>

              <p className="text-sm text-gray-400">
                {item.timeframe}
              </p>

            </div>

            <div className="text-center">

              <p className="text-lg font-bold text-cyan-400">
                {item.score}
              </p>

              <p className="text-xs text-gray-400">
                AI Score
              </p>

            </div>

            <span
              className={`rounded-lg px-3 py-1 text-sm font-bold ${
                item.signal === "BUY"
                  ? "bg-green-500/10 text-green-400"
                  : item.signal === "SELL"
                  ? "bg-red-500/10 text-red-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}
            >
              {item.signal}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}