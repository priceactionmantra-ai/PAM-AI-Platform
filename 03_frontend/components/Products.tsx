export default function Products() {
  const products = [
    {
      title: "AI Stock Scanner",
      description: "Find high probability trading opportunities using Artificial Intelligence.",
      icon: "📊",
    },
    {
      title: "AI Trading Bots",
      description: "Fully automated trading bots with advanced risk management.",
      icon: "🤖",
    },
    {
      title: "Strategy Builder",
      description: "Design, test and optimize professional trading strategies.",
      icon: "⚡",
    },
    {
      title: "Portfolio Analytics",
      description: "Analyze portfolio performance with professional metrics.",
      icon: "📈",
    },
    {
      title: "Trading Academy",
      description: "Premium trading education from beginner to expert.",
      icon: "🎓",
    },
    {
      title: "AI Research Assistant",
      description: "Market news, AI insights and intelligent trading research.",
      icon: "🧠",
    },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            PRODUCTS
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Complete AI Trading Ecosystem
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400">
            Everything a trader needs in one premium platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="text-6xl">
                {product.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {product.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {product.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}