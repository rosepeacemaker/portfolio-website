'use client'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


interface SkillGroup {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    number: "01",
    label: "Frontend",
    title: "Frontend Development",
    description:
      "Building responsive, interactive and modern user interfaces with a focus on performance and user experience.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Three.js / R3F",
      "Zustand",
      "TanStack",
      "ShadCN",
    ],
  },
  {
    id: "backend",
    number: "02",
    label: "Backend",
    title: "Backend Development",
    description:
      "Developing scalable APIs, authentication systems, real-time features and database-driven applications.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Socket.io",
      "Redis",
      "JWT",
      "Google Auth",
      "Payment Gateway",
      "ImageKit",
    ],
  },
  {
    id: "ai",
    number: "03",
    label: "AI + System Design",
    title: "AI & System Design",
    description:
      "Exploring LLM-powered applications, RAG pipelines, AI agents and scalable system architecture.",
    skills: [
      "GenAI",
      "LLM Integration",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Message Queue",
      "Load Balancer",
      "Docker",
      "Kubernetes",
      "Microservices",
    ],
  },
];

export default function Skills() {
 const [activeSkill, setActiveSkill] = useState<string | null>(null);

 const activeGroup = skillGroups.find(
  (group) => group.id === activeSkill
);

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
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            What I work with
          </p>

          <div className="flex items-end justify-between gap-4">
            <h2
              className="
                font-[var(--font-cormorant)]
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-semibold
                tracking-tight
              "
            >
              Skills
            </h2>

            <span className="hidden sm:block text-xs uppercase tracking-[0.25em] text-muted-foreground">
              2026
            </span>
          </div>
        </div>

        {/* Skill Buttons */}
        <div className="grid gap-3 sm:grid-cols-3">
          {skillGroups.map((group) => {
            const isActive = activeSkill === group.id;

            return (
              <button
                key={group.id}
                type="button"
              onClick={() =>
  setActiveSkill((current) =>
    current === group.id ? null : group.id
  )
}
                aria-pressed={isActive}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  p-5
                  text-left
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-[#FF7AF7]/70 bg-[#FF7AF7]/10"
                      : "border-border/70 bg-card/40 hover:border-[#FF7AF7]/40 hover:bg-[#FF7AF7]/5"
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      ${
                        isActive
                          ? "text-[#FF7AF7]"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {group.number}
                  </span>

                  <span
                    className={`
                      text-lg
                      transition-transform
                      duration-300
                      ${
                        isActive
                          ? "translate-x-0 text-[#FF7AF7]"
                          : "-translate-x-1 text-muted-foreground"
                      }
                    `}
                  >
                    →
                  </span>
                </div>

                <h3
                  className={`
                    mt-6
                    font-[var(--font-cormorant)]
                    text-2xl
                    font-medium
                    ${
                      isActive
                        ? "text-[#FF7AF7]"
                        : "text-foreground"
                    }
                  `}
                >
                  {group.label}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Details Panel */}
        <div className="mt-5 min-h-[280px] rounded-2xl border border-border/70 bg-card/30 p-6 sm:p-8 lg:p-10">
          {activeGroup && (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, height: 0, y: -10 }}
      animate={{ opacity: 1, height: "auto", y: 0 }}
      exit={{ opacity: 0, height: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="mt-5 rounded-2xl border border-border/70 bg-card/30 p-5 sm:p-6">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          {/* Heading */}
          <div className="shrink-0">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF7AF7]">
              {activeGroup.number} — {activeGroup.label}
            </p>

            <h3 className="font-[var(--font-cormorant)] text-2xl sm:text-3xl font-semibold">
              {activeGroup.title}
            </h3>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 md:max-w-2xl md:justify-end">
            {activeGroup.skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border
                  border-border/70
                  bg-background/60
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-foreground/80
                  transition-colors
                  duration-300
                  hover:border-[#FF7AF7]/60
                  hover:text-[#FF7AF7]
                "
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  </AnimatePresence>
)}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Full Stack · GenAI · System Design
          </p>

          <span className="text-xs uppercase tracking-[0.25em] text-[#FF7AF7]">
            Skills
          </span>
        </div>
      </div>
    </section>
  );
}
