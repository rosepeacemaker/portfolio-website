export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen overflow-hidden bg-[#111111] px-6 py-12 text-[#f5f3ed] md:px-12"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute right-[-10%] top-[15%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

     <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between border-b border-white/15 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">
              01 — About Me
            </p>

            <h2 className="mt-5 max-w-4xl font-[var(--font-cormorant)] text-5xl font-medium leading-[0.95] md:text-8xl">
              Code meets
              <br />
              <span className="text-white/50">creativity.</span>
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.25em] text-white/40 md:block">
            2026
          </span>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

          {/* Intro */}
          <div>
            <p className="max-w-2xl text-xl leading-9 text-white/80 md:text-2xl">
              I’m Rozina Saleem, a Full Stack Developer focused on building
              modern web applications and AI-powered experiences.
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/50">
              I enjoy turning ideas into functional digital products —
              combining thoughtful interfaces, scalable backend systems and
              emerging AI technologies.
            </p>

            <div className="mt-12 h-px w-32 bg-accent" />
          </div>

          {/* Info */}
          <div className="grid gap-4">

            <div className="border border-white/15 p-6 backdrop-blur-sm transition duration-300 hover:border-accent/60">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Education
              </p>

              <p className="mt-4 text-lg">
                Sheryians Coding School
              </p>

              <p className="mt-1 text-sm text-white/50">
                Full Stack Development
              </p>
            </div>

            <div className="border border-white/15 p-6 backdrop-blur-sm transition duration-300 hover:border-accent/60">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Focus
              </p>

              <p className="mt-4 text-lg">
                Full Stack · GenAI · RAG
              </p>

              <p className="mt-1 text-sm text-white/50">
                System Design · AI Applications
              </p>
            </div>

            <div className="border border-white/15 p-6 backdrop-blur-sm transition duration-300 hover:border-accent/60">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Building
              </p>

              <p className="mt-4 text-lg">
                AI-powered web experiences
              </p>
            </div>

          </div>
        </div>

        {/* Bottom label */}
        <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-6">
          <span className="text-xs uppercase tracking-[0.25em] text-white/40">
            Full Stack Developer
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-accent">
            Scroll ↓
          </span>
        </div>

      </div>
    </section>
  );
}