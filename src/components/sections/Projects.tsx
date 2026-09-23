"use client"

import { projectsData } from "@/src/data/ProjectsData"


export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            My Work
          </p>

          <h2 className="text-5xl font-semibold tracking-tight">
            Projects
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            A collection of full-stack applications, interactive experiences,
            and AI-powered projects I have built throughout my development journey.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-border/50 bg-card/30"
            >

              {/* Project Image */}
              <div className="relative h-60 overflow-hidden bg-muted">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Project category */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/40 bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}