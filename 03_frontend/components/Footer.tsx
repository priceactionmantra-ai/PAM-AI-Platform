export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#050816]">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">

        <div>

          <h2 className="text-3xl font-black text-cyan-400">
            PAM AI
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            India's Next Generation AI Trading Platform
            for Traders, Investors and Financial Professionals.
          </p>

        </div>

        <div>

          <h3 className="text-xl font-bold text-white">
            Products
          </h3>

          <ul className="mt-6 space-y-3 text-gray-400">

            <li>AI Scanner</li>
            <li>Trading Bots</li>
            <li>Portfolio Analytics</li>
            <li>Trading Academy</li>

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-bold text-white">
            Company
          </h3>

          <ul className="mt-6 space-y-3 text-gray-400">

            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-bold text-white">
            Legal
          </h3>

          <ul className="mt-6 space-y-3 text-gray-400">

            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
            <li>Support</li>

          </ul>

        </div>

      </div>

      <div className="border-t border-gray-800 py-8 text-center text-gray-500">

        © 2026 PAM AI Platform. All Rights Reserved.

      </div>

    </footer>
  );
}