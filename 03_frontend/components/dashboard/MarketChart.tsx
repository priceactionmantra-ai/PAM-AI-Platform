"use client";

export default function MarketChart() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Market Chart
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Professional Trading Workspace
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="rounded-lg bg-cyan-500 px-3 py-1 text-sm font-semibold text-white">
            5M
          </button>

          <button className="rounded-lg border border-white/10 px-3 py-1 text-sm text-gray-300 transition hover:border-cyan-400">
            15M
          </button>

          <button className="rounded-lg border border-white/10 px-3 py-1 text-sm text-gray-300 transition hover:border-cyan-400">
            1H
          </button>

          <button className="rounded-lg border border-white/10 px-3 py-1 text-sm text-gray-300 transition hover:border-cyan-400">
            4H
          </button>

          <button className="rounded-lg border border-white/10 px-3 py-1 text-sm text-gray-300 transition hover:border-cyan-400">
            1D
          </button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="mt-6 flex h-[450px] items-center justify-center rounded-xl border border-dashed border-cyan-500/30 bg-[#111827]">
        <div className="text-center">
          <h3 className="text-4xl font-black text-cyan-400">
            Trading Chart
          </h3>

          <p className="mt-4 text-gray-400">
            TradingView / Lightweight Charts
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Live Dhan Market Feed will be connected here
          </p>
        </div>
      </div>

      {/* Bottom Statistics */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl bg-[#111827] p-4">
          <p className="text-sm text-gray-400">
            Symbol
          </p>

          <p className="mt-2 text-lg font-bold text-white">
            RELIANCE
          </p>
        </div>

        <div className="rounded-xl bg-[#111827] p-4">
          <p className="text-sm text-gray-400">
            Current Price
          </p>

          <p className="mt-2 text-lg font-bold text-green-400">
            ₹3,245.60
          </p>
        </div>

        <div className="rounded-xl bg-[#111827] p-4">
          <p className="text-sm text-gray-400">
            Trend
          </p>

          <p className="mt-2 text-lg font-bold text-cyan-400">
            Bullish
          </p>
        </div>

        <div className="rounded-xl bg-[#111827] p-4">
          <p className="text-sm text-gray-400">
            AI Recommendation
          </p>

          <p className="mt-2 text-lg font-bold text-green-400">
            BUY
          </p>
        </div>

      </div>
    </section>
  );
}