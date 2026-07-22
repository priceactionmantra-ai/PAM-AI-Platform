export default function CTA() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-16 text-center">

        <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
          START TODAY
        </p>

        <h2 className="mt-6 text-5xl font-black text-white">
          Ready To Build Your Trading Future?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          Join thousands of traders using Artificial Intelligence,
          Professional Education and Automated Trading Technology
          inside one intelligent ecosystem.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <button className="rounded-xl bg-cyan-500 px-10 py-5 text-lg font-bold text-black transition hover:scale-105">
            Get Started
          </button>

          <button className="rounded-xl border border-cyan-400 px-10 py-5 text-lg font-bold text-white transition hover:bg-cyan-500 hover:text-black">
            Book Demo
          </button>

        </div>

      </div>

    </section>
  );
}