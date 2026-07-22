export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Swing Trader",
      review:
        "PAM AI has completely changed the way I analyze the stock market. Everything is available in one platform.",
    },
    {
      name: "Priya Reddy",
      role: "Investor",
      review:
        "The AI Scanner and Portfolio Analytics save me hours every week. Highly recommended.",
    },
    {
      name: "Arjun Patel",
      role: "Professional Trader",
      review:
        "This platform feels like Bloomberg Terminal built specifically for Indian traders.",
    },
  ];

  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            What Our Users Say
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-8 transition hover:border-cyan-400 hover:-translate-y-2"
            >
              <div className="text-5xl">⭐⭐⭐⭐⭐</div>

              <p className="mt-6 leading-8 text-gray-300">
                "{item.review}"
              </p>

              <h3 className="mt-8 text-xl font-bold text-white">
                {item.name}
              </h3>

              <p className="text-cyan-400">
                {item.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}