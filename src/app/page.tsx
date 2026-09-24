import Hero from "@/src/components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Journey from "../components/sections/Journey";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="snap-y overflow-x-hidden snap-mandatory">

      <section className="snap-start">
        <Hero />
      </section>

      <section className="snap-start">
        <About />
      </section>

      <section className="snap-start">
        <Skills />
      </section>

      <section className="snap-start">
        <Journey />
      </section>

      <section className="snap-start">
        <Projects />
      </section>

      <section className="snap-start">
        <Contact />
      </section>

    </main>
  );
}