import Hero from "@/src/components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory">
      <div className="h-screen snap-start">
        <Hero />
      </div>

      <div className="h-screen snap-start">
        <About />
      </div>

      <div className="h-screen snap-start">
        <Skills />
      </div>
    </main>
  );
}