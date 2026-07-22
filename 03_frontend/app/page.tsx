import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import About from "../components/About";
import DashboardPreview from "../components/DashboardPreview";
import Products from "../components/Products";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <About />
      <DashboardPreview />
      <Products />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}