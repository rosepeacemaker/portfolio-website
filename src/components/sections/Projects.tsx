"use client"

import { useEffect, useState } from "react"
import { projectsData } from "@/src/data/ProjectsData"
import Image from "next/image"

function ProjectImageSlider({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    )
  }

  return (
    <div className="relative h-72 overflow-hidden bg-muted">
      {/* Project Image */}
      <Image
      width={400}
      height={600}
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="h-full w-full object-cover transition-all duration-700"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur-md transition hover:bg-black/70"
          >
            ←
          </button>

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur-md transition hover:bg-black/70"
          >
            →
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-background px-6 py-24 text-foreground"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            My Work
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-foreground">
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
              className="group overflow-hidden rounded-3xl border border-border/70 bg-card/70 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 dark:bg-card/40"
            >

              {/* Project Image + Category */}
              <div className="relative">

                <ProjectImageSlider
                  images={project.images}
                  title={project.title}
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold text-foreground">
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
                      className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
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