export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      features: [
        "AI Scanner",
        "Basic Dashboard",
        "Portfolio Tracking",
        "Community Access",
      ],
    },
    {
      name: "Professional",
      price: "₹2,999",
      period: "/month",
      popular: true,
      features: [
        "Everything in Starter",
        "AI Trading Assistant",
        "Trading Bots",
        "Premium Indicators",
        "Backtesting",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Everything",
        "Dedicated Server",
        "API Access",
        "White Label",
        "Personal Support",
      ],
    },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            PRICING
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Choose Your Plan
          </h2>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`rounded-3xl border p-10 ${
                plan.popular
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-gray-800 bg-[#111827]"
              }`}
            >

              {plan.popular && (
                <div className="mb-6 inline-block rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-black text-white">
                {plan.name}
              </h3>

              <div className="mt-8">

                <span className="text-5xl font-black text-cyan-400">
                  {plan.price}
                </span>

                <span className="text-gray-400">
                  {plan.period}
                </span>

              </div>

              <ul className="mt-10 space-y-4">

                {plan.features.map((feature) => (

                  <li key={feature} className="text-gray-300">
                    ✅ {feature}
                  </li>

                ))}

              </ul>

              <button className="mt-10 w-full rounded-xl bg-cyan-500 py-4 font-bold text-black">
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}