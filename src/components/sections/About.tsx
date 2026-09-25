"use client";

import { motion } from "framer-motion";


export default function About() {
  const infoCards = [
    {
      label: "Education",
      title: "Sheryians Coding School",
      subtitle: "Full Stack Development",
    },
    {
      label: "Focus",
      title: "Full Stack · GenAI · RAG",
      subtitle: "System Design · AI Applications",
    },
    {
      label: "Building",
      title: "AI-powered web experiences",
      subtitle: "Modern & Scalable Solutions",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        lg:h-screen
        lg:max-h-screen
        flex
        flex-col
        justify-center
        overflow-hidden
        bg-background
        text-foreground
        px-4
        sm:px-6
        lg:px-12
        py-10
        lg:py-6
        transition-colors
        duration-300
      "
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Pink Glow */}
      <div className="pointer-events-none absolute right-[-5%] top-[15%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-center my-auto">
        {/* Header */}
        <div className="mb-6 lg:mb-8 flex items-end justify-between border-b border-border/60 pb-5">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent font-semibold">
              01 — About Me
            </p>

            <h2 className="mt-3 max-w-4xl font-[var(--font-cormorant)] text-4xl sm:text-6xl lg:text-7xl font-medium leading-[0.95] text-foreground">
              Code meets{" "}
              <span className="text-muted-foreground/60">creativity.</span>
            </h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground/60 md:block font-medium">
            2026
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left: Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed text-foreground">
              I’m Rozina Saleem, a Full Stack Developer focused on building
              modern web applications and AI-powered experiences.
            </p>

            <p className="mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base leading-relaxed text-muted-foreground">
              I enjoy turning ideas into functional digital products —
              combining thoughtful interfaces, scalable backend systems and
              emerging AI technologies.
            </p>

            <div className="mt-6 lg:mt-8 h-px w-32 bg-accent" />
          </motion.div>

          {/* Right: Info Cards with Staggered Entrance Animation */}
          <div className="lg:col-span-6 grid gap-3.5">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="
                  rounded-2xl
                  border border-border/80
                  bg-card dark:bg-card/40
                  p-4 sm:p-5
                  backdrop-blur-md
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-accent/60
                  hover:shadow-md
                "
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                  {card.label}
                </p>

                <p className="mt-2 text-base sm:text-lg font-semibold text-foreground">
                  {card.title}
                </p>

                <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom label */}
        <div className="mt-6 lg:mt-8 flex items-center justify-between border-t border-border/60 pt-4">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Full Stack Developer
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Scroll ↓
          </span>
        </div>
      </div>

    </section>
  );
}