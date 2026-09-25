'use client'
import Image from "next/image";
import { motion } from "framer-motion";


interface SkillItem {
  category: string;
  title: string;
  skills: string[];
  image: string;
  accentColor: string;
  borderColor: string;
  shadowGlow: string;
  glowBg: string;
  pillHoverBorder: string;
  pillHoverBg: string;
}

const skillsData: SkillItem[] = [
  {
    category: "Full Stack",
    title: "Web Development",
    skills: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
    image: "/images/web-dev.jpg",
    accentColor: "text-[#EF4444]",
    borderColor: "hover:border-[#EF4444]/70",
    shadowGlow: "hover:shadow-[0_15px_35px_rgba(239,68,68,0.35)]",
    glowBg: "bg-[#EF4444]/30",
    pillHoverBorder: "group-hover:border-[#EF4444]/50",
    pillHoverBg: "group-hover:bg-[#EF4444]/15",
  },
  {
    category: "AI / LLM",
    title: "Generative AI",
    skills: ["GenAI", "RAG", "LangChain", "LangGraph", "LLM Integration"],
    image: "/images/ai-platform.jpg",
    accentColor: "text-[#38BDF8]",
    borderColor: "hover:border-[#38BDF8]/70",
    shadowGlow: "hover:shadow-[0_15px_35px_rgba(56,189,248,0.35)]",
    glowBg: "bg-[#38BDF8]/30",
    pillHoverBorder: "group-hover:border-[#38BDF8]/50",
    pillHoverBg: "group-hover:bg-[#38BDF8]/15",
  },
  {
    category: "Systems",
    title: "Tools & Architecture",
    skills: ["Docker", "Kubernetes", "Redis", "AWS", "Socket.io", "REST APIs"],
    image: "/images/system-archi.jpg",
    accentColor: "text-[#2DD4BF]",
    borderColor: "hover:border-[#2DD4BF]/70",
    shadowGlow: "hover:shadow-[0_15px_35px_rgba(45,212,191,0.35)]",
    glowBg: "bg-[#2DD4BF]/30",
    pillHoverBorder: "group-hover:border-[#2DD4BF]/50",
    pillHoverBg: "group-hover:bg-[#2DD4BF]/15",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
      {/* Subtle Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-40 top-[-100px]
            h-[400px] w-[400px]
            rounded-full
            bg-pink-500/10 dark:bg-pink-500/15
            blur-[120px]
          "
        />
        <div
          className="
            absolute -right-40 bottom-[-100px]
            h-[400px] w-[400px]
            rounded-full
            bg-cyan-500/10 dark:bg-cyan-500/15
            blur-[130px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-center my-auto">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            What I work with
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
            Skills
          </h2>
        </div>

        {/* Cards Grid with Staggered Framer Motion Animation */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              data-cursor-img={skill.image}
              data-cursor-width="180px"
              data-cursor-height="180px"
              data-cursor-text={skill.category.toLowerCase()}
              className={`group relative flex min-h-[320px] sm:min-h-[350px] lg:min-h-[370px] flex-col justify-end overflow-hidden rounded-2xl border border-border/80 dark:border-border/50 shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 ${skill.borderColor} ${skill.shadowGlow}`}
            >
              {/* Background Image */}
              <Image
                src={skill.image}
                alt={skill.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/20" />

              {/* Image-Specific Ambient Glow on Hover */}
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full ${skill.glowBg} blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10 p-6 text-white transition-transform duration-300 ease-out group-hover:-translate-y-1">
                {/* Category tag */}
                <p className={`mb-1.5 text-xs font-bold uppercase tracking-[0.25em] ${skill.accentColor}`}>
                  {skill.category}
                </p>

                <h3 className="mb-3 font-[var(--font-cormorant)] text-2xl sm:text-3xl font-medium leading-snug text-white">
                  {skill.title}
                </h3>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.skills.map((item, i) => (
                    <span
                      key={i}
                      className={`rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-white/90 backdrop-blur-md transition-colors duration-300 ${skill.pillHoverBorder} ${skill.pillHoverBg}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-8 lg:mt-10 flex items-center justify-between border-t border-border/60 pt-6">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Full Stack + GenAI
            </p>

            <p className="mt-0.5 text-base sm:text-lg font-medium text-foreground">
              Sheryians Coding School
            </p>
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-accent">
            2026
          </span>
        </div>
      </div>

    </section>
  );
}
