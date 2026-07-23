"use client";

import Link from "next/link";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 py-20">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-black text-white">
            Create Account
          </h1>

          <p className="mt-3 text-gray-400">
            Join PAM AI Platform and start trading smarter.
          </p>

        </div>

        <form className="space-y-6">

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-[#0b1225] px-4">

              <User className="h-5 w-5 text-cyan-400" />

              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-[#0b1225] px-4">

              <Mail className="h-5 w-5 text-cyan-400" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-[#0b1225] px-4">

              <Lock className="h-5 w-5 text-cyan-400" />

              <input
                type="password"
                placeholder="Create Password"
                className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Confirm Password
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-[#0b1225] px-4">

              <Lock className="h-5 w-5 text-cyan-400" />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500"
              />

            </div>

          </div>

          <label className="flex items-start gap-3 text-sm text-gray-400">

            <input
              type="checkbox"
              className="mt-1"
            />

            <span>
              I agree to the Terms of Service and Privacy Policy.
            </span>

          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 py-4 text-lg font-bold text-black transition hover:bg-cyan-300"
          >

            Create Account

            <ArrowRight className="h-5 w-5" />

          </button>

        </form>

        <div className="mt-8 text-center text-gray-400">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Sign In
          </Link>

        </div>

      </div>

    </main>
  );
}