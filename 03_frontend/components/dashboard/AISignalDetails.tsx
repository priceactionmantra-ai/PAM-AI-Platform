"use client";

export default function AISignalDetails() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        AI Signal Details
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Selected Stock</span>
          <span className="font-bold text-white">RELIANCE</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">AI Score</span>
          <span className="font-bold text-cyan-400">92 / 100</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Trend</span>
          <span className="text-green-400">Bullish</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Volume</span>
          <span className="text-green-400">Strong</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Momentum</span>
          <span className="text-green-400">Strong</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">ATR</span>
          <span className="text-green-400">Rising</span>
        </div>

        <div className="mt-8 rounded-xl bg-green-500/10 p-5 text-center">

          <p className="text-sm text-gray-400">
            Final Recommendation
          </p>

          <h3 className="mt-2 text-4xl font-black text-green-400">
            BUY
          </h3>

        </div>

      </div>

    </section>
  );
}