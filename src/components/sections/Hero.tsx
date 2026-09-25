import FlipCard from "../ui/FlipCard"
import SectionDividerTicker from "../ui/SectionDividerTicker"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center md:justify-end md:pr-16 lg:pr-24 md:translate-x-[2%]">

        <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
          <div className="hero-card-glow h-[420px] w-[420px] rounded-full bg-[#E8A6B8]/40 blur-[100px]" />
        </div>

        <div className="pointer-events-auto relative z-[9999]">
          <FlipCard />
        </div>

      </div>
      {/* Big text behind the image */}

      <div className="absolute inset-0 z-0 flex items-center justify-center translate-x-[12%] translate-y-[12%]">
        <h1 className="hero-name-breathe font-[var(--font-cormorant)] text-[13vw] font-medium leading-none tracking-tight blur-[2px]">
          Full Stack Developer
        </h1>
      </div>

      {/* Profile image  */}
      {/* <div  className="absolute inset-y-0 right-0 z-10 flex w-full items-center justify-center md:right-12 md:w-auto">
  <FlipCard />
  </div> */}

      {/* Left intro content */}
      <div className="pointer-events-none relative z-20 flex min-h-screen items-center px-10 md:px-12">
        <div className="max-w-xl text-reveal">

          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Hello, I’m
          </p>

          <h2 className="mt-4 font-[var(--font-cormorant)] text-6xl font-semibold leading-[0.9] md:text-8xl">
            Rozina
            <br />
            Saleem
          </h2>

          <p className="mt-6 text-lg md:text-xl">
            Full Stack Developer
          </p>

          <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/70 md:text-base">
            I build modern web experiences and AI-powered applications
            with a focus on clean design and thoughtful user experiences.
          </p>
          <div className="mt-8 flex items-center gap-4">

            <a
              href="#projects"
              className="hero-btn pointer-events-auto rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:opacity-80"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="pointer-events-auto rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background"
            >
              Resume
            </a>

          </div>
        </div>

      </div>
      <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
        <span className="text-xs uppercase tracking-[0.25em] text-accent">
          Scroll ↓
        </span>
      </div>
      <SectionDividerTicker />
    </section>
  );
}
