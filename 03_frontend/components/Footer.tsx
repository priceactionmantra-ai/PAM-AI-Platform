"use client";

import Link from "next/link";

import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black text-white">
              PAM AI
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Enterprise AI Trading Platform designed for traders,
              investors and financial institutions.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              Platform
            </h4>

            <div className="space-y-3 text-gray-400">
              <Link href="#">AI Scanner</Link>
              <br />
              <Link href="#">Trading Bots</Link>
              <br />
              <Link href="#">Portfolio</Link>
              <br />
              <Link href="#">Pricing</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              Company
            </h4>

            <div className="space-y-3 text-gray-400">
              <Link href="#">About</Link>
              <br />
              <Link href="#">Blog</Link>
              <br />
              <Link href="#">Support</Link>
              <br />
              <Link href="#">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              Contact
            </h4>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>support@pamai.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>Vijayawada, India</span>
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <Globe className="h-6 w-6 cursor-pointer text-gray-400 transition hover:text-cyan-400" />

<Globe className="h-6 w-6 cursor-pointer text-gray-400 transition hover:text-cyan-400" />
              <Mail className="h-6 w-6 cursor-pointer text-gray-400 transition hover:text-cyan-400" />

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          © 2026 PAM AI Platform. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}