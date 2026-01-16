import Hero from "./components/sections/Hero";
import ServiceCarousel from "./components/sections/ServiceCarousel";
import Features from "./components/sections/Features";
import Zonas from "./components/sections/Zonas";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="grow">
        <Hero />

        <Features />
        <Zonas />
        <ServiceCarousel />
      </main>
    </div>
  );
}

