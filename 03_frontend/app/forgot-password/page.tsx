"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 py-20">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-black text-white">
            Forgot Password
          </h1>

          <p className="mt-3 text-gray-400">
            Enter your registered email address and we'll send you a password reset link.
          </p>

        </div>

        <form className="space-y-6">

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

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 py-4 text-lg font-bold text-black transition hover:bg-cyan-300"
          >
            Send Reset Link
            <ArrowRight className="h-5 w-5" />
          </button>

        </form>

        <div className="mt-8 text-center text-gray-400">

          Remember your password?{" "}

          <Link
            href="/login"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </main>
  );
}