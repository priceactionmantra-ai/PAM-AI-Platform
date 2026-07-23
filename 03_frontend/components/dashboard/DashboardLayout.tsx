"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="flex min-h-screen bg-[#050816]">

      <Sidebar />

      <section className="flex flex-1 flex-col">

        <Topbar />

        <div className="flex-1 p-8">
          {children}
        </div>

      </section>

    </main>
  );
}