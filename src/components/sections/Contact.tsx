"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#f5f3ee] px-6 py-24 text-black md:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
      absolute -left-40 top-[-120px]
      h-[450px] w-[450px]
      rounded-full
      bg-[#5B8CFF]/10
      blur-[120px]
    "
        />

        <div
          className="
      absolute -right-40 bottom-[-100px]
      h-[500px] w-[500px]
      rounded-full
      bg-[#38BDF8]/10
      blur-[130px]
    "
        />

        <div
          className="
      absolute inset-0 opacity-[0.035]
      [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
      [background-size:32px_32px]
    "
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center">

        {/* Intro */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Contact
          </p>

          <h2 className="font-[var(--font-cormorant)] text-5xl font-semibold leading-tight md:text-7xl">
            Let's Connect
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-black/60 md:text-lg">
            Have a project, opportunity, or idea?
            I&apos;d love to hear from you.
          </p>

          {/* Button */}
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="mt-10 rounded-full border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/50"
          >
            {showContacts ? "Hide Contacts ↑" : "Let's Connect →"}
          </button>
        </div>
        {/* GitHub Activity */}
        <div className="mt-16 max-w-3xl">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                GitHub
              </p>

              <h3 className="mt-2 font-[var(--font-cormorant)] text-3xl font-semibold">
                Open Source & Activity
              </h3>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-opacity hover:opacity-50"
            >
              View GitHub →
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/50 p-2 shadow-sm">
            <Image
              src="/images/github.png"
              alt="Rozina's GitHub profile and contribution activity"
              width={1200}
              height={600}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>

        {/* Contact Links */}
        {showContacts && (
          <div
            className="
      mt-12 grid max-w-3xl gap-4 sm:grid-cols-2
      animate-in fade-in slide-in-from-bottom-4
      duration-500
    "
          >

            <a
              href="#"
              className="
  rounded-xl border border-black/10
  bg-white/50 p-5
  transition-all duration-300
  hover:-translate-y-1
  hover:border-accent
  hover:bg-accent/40
  hover:shadow-lg
"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                Email
              </p>
              <p className="mt-2 text-sm font-medium">
                your.email@example.com
              </p>
            </a>

            <a
              href="#"
              className="
  rounded-xl border border-black/10
  bg-white/50 p-5
  transition-all duration-300
  hover:-translate-y-1
  hover:border-accent
  hover:bg-accent/40
  hover:shadow-lg
"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                LinkedIn
              </p>
              <p className="mt-2 text-sm font-medium">
                linkedin.com/in/yourname
              </p>
            </a>

            <a
              href="#"
              className="
  rounded-xl border border-black/10
  bg-white/50 p-5
  transition-all duration-300
  hover:-translate-y-1
  hover:border-accent
  hover:bg-accent/40
  hover:shadow-lg
"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                GitHub
              </p>
              <p className="mt-2 text-sm font-medium">
                github.com/yourusername
              </p>
            </a>

            <a
              href="#"
              className="
  rounded-xl border border-black/10
  bg-white/50 p-5
  transition-all duration-300
  hover:-translate-y-1
  hover:border-accent
  hover:bg-accent/40
  hover:shadow-lg
"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                X
              </p>
              <p className="mt-2 text-sm font-medium">
                x.com/yourusername
              </p>
            </a>

          </div>
        )}

      </div>
    </section>
  );
}

