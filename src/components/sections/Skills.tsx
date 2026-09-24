"use client";

import Image from "next/image";

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
    accentColor: "text-[#EF4444]", // Vibrant Red matching web-dev title
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
    accentColor: "text-[#38BDF8]", // Neon Cyan Blue matching AI Platform artwork
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
    accentColor: "text-[#2DD4BF]", // Teal / Mint Turquoise matching database architecture
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
      className="relative min-h-screen bg-[#f5f3ee] px-6 py-20 text-black md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            What I work with
          </p>

          <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold tracking-tight md:text-7xl">
            Skills
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              data-cursor-img={skill.image}
              data-cursor-width="180px"
              data-cursor-height="180px"
              data-cursor-text={skill.category.toLowerCase()}
              className={`group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl border border-black/10 shadow-lg transition-all duration-500 ease-out hover:-translate-y-2.5 ${skill.borderColor} ${skill.shadowGlow}`}
            >
              {/* Background Image scaling to card width & height */}
              <Image
                src={skill.image}
                alt={skill.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/65 group-hover:to-black/20" />

              {/* Image-Specific Ambient Accent Glow in top right corner on hover */}
              <div className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full ${skill.glowBg} blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100`} />

              {/* Content */}
              <div className="relative z-10 p-7 text-white transition-transform duration-300 ease-out group-hover:-translate-y-1">
                {/* Category tag matching image prominent color */}
                <p className={`mb-2 text-xs font-bold uppercase tracking-[0.25em] ${skill.accentColor}`}>
                  {skill.category}
                </p>

                <h3 className="mb-4 font-[var(--font-cormorant)] text-3xl font-medium leading-snug text-white">
                  {skill.title}
                </h3>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {skill.skills.map((item, i) => (
                    <span
                      key={i}
                      className={`rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md transition-colors duration-300 ${skill.pillHoverBorder} ${skill.pillHoverBg}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 flex items-center justify-between border-t border-black/10 pt-8">
          <div>
            <p className="text-sm text-black/50">
              Full Stack + GenAI
            </p>

            <p className="mt-1 text-xl font-medium">
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
