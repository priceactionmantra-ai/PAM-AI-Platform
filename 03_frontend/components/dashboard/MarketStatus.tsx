"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function MarketStatus() {
  const [status, setStatus] = useState("Checking...");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    async function checkBackend() {
      try {
        const data = await api.health();

        if (data.status === "ok") {
          setConnected(true);
          setStatus("Backend Connected");
        } else {
          setConnected(false);
          setStatus("Backend Error");
        }
      } catch (error) {
        setConnected(false);
        setStatus("Backend Offline");
      }
    }

    checkBackend();
  }, []);

  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B1225] p-6">
      <h2 className="text-2xl font-bold text-white">
        Backend Status
      </h2>

      <div className="mt-6 flex items-center gap-4">

        <div
          className={`h-4 w-4 rounded-full ${
            connected ? "bg-green-500" : "bg-red-500"
          }`}
        />

        <p className="text-lg text-white">
          {status}
        </p>

      </div>
    </section>
  );
}