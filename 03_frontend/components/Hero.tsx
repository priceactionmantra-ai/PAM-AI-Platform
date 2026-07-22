export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <p className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            🚀 AI Powered Trading Platform
          </p>

          <h1 className="text-6xl font-black leading-tight text-white md:text-7xl">

            Trade Smarter

            <br />

            Build Wealth

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              With Artificial Intelligence
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-400">

            PAM AI Platform combines AI research,
            stock scanners, trading bots,
            premium indicators, portfolio analytics,
            education and automation into one
            professional ecosystem.

          </p>

          <div className="mt-12 flex flex-wrap gap-6">

            <button className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105">
              Get Started
            </button>

            <button className="rounded-xl border border-gray-700 px-8 py-4 text-lg font-bold text-white transition hover:border-cyan-400">
              Watch Demo
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}