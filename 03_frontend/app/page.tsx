import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <Stats />
    </main>
  );
}