export default function About() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            ABOUT PAM AI
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            India's Next Generation AI Trading Platform
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            PAM AI Platform is being built as a complete ecosystem for
            traders and investors. Instead of using many different
            applications, everything will be available in one intelligent
            platform.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-400">
            Whether you are a beginner or a professional trader, our
            platform combines Artificial Intelligence, Professional
            Education, Stock Market Research, Trading Bots,
            Portfolio Analytics and Risk Management into one
            premium experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400">
              AI Assistant
            </span>

            <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400">
              Trading Bots
            </span>

            <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400">
              Stock Scanner
            </span>

            <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400">
              Premium Courses
            </span>

          </div>

        </div>

        {/* Right Side */}

        <div className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-12">

          <h3 className="text-3xl font-bold text-white">
            PAM AI Vision
          </h3>

          <ul className="mt-8 space-y-5 text-gray-300">

            <li>✅ AI Powered Market Scanner</li>

            <li>✅ Automated Trading Bots</li>

            <li>✅ Professional Trading Dashboard</li>

            <li>✅ Strategy Builder & Backtesting</li>

            <li>✅ Portfolio Analytics</li>

            <li>✅ AI Trading Assistant</li>

            <li>✅ Learning Academy</li>

            <li>✅ Premium Indicators</li>

            <li>✅ Mobile Application</li>

            <li>✅ Enterprise SaaS Platform</li>

          </ul>

        </div>

      </div>
    </section>
  );
}