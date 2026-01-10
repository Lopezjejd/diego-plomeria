import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="grow">
        <Hero />
      </main>
    </div>
  );
}

