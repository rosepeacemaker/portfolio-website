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
            bg-[#e8a6b8]/15
            blur-[120px]
          "
        />

        <div
          className="
            absolute -right-40 bottom-[-100px]
            h-[500px] w-[500px]
            rounded-full
            bg-[#c78bea]/10
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

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Intro */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d9829d]">
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
            className="hero-btn text-pink-500 mt-10"
          >
            {showContacts ? "Hide Contacts ↑" : "Let's Connect →"}
          </button>
        </div>

        {/* Main Contact Area */}
        {showContacts && (
          <div
            className="
              mt-16
              grid
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              animate-in
              fade-in
              slide-in-from-bottom-4
              duration-500
            "
          >

            {/* LEFT — Contact Cards */}
            <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">

              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                className="
                  rounded-2xl
                  border border-black/10
                  bg-white/60
                  p-5
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#e8a6b8]
                  hover:bg-[#e8a6b8]/10
                  hover:shadow-lg
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#d9829d]">
                  Email
                </p>

                <p className="mt-2 text-sm font-medium">
                  your.email@example.com
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-2xl
                  border border-black/10
                  bg-white/60
                  p-5
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#e8a6b8]
                  hover:bg-[#e8a6b8]/10
                  hover:shadow-lg
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#d9829d]">
                  LinkedIn
                </p>

                <p className="mt-2 text-sm font-medium">
                  linkedin.com/in/yourname
                </p>
              </a>

              {/* GitHub */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-2xl
                  border border-black/10
                  bg-white/60
                  p-5
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#e8a6b8]
                  hover:bg-[#e8a6b8]/10
                  hover:shadow-lg
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#d9829d]">
                  GitHub
                </p>

                <p className="mt-2 text-sm font-medium">
                  github.com/yourusername
                </p>
              </a>

              {/* X */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-2xl
                  border border-black/10
                  bg-white/60
                  p-5
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#e8a6b8]
                  hover:bg-[#e8a6b8]/10
                  hover:shadow-lg
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#d9829d]">
                  X
                </p>

                <p className="mt-2 text-sm font-medium">
                  x.com/yourusername
                </p>
              </a>
            </div>

            {/* RIGHT — GitHub Screenshot */}
            <div>
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9829d]">
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
                  className="text-sm font-medium transition-colors hover:text-[#d9829d]"
                >
                  View GitHub →
                </a>
              </div>

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-black/10
                  bg-white/70
                  p-2
                  shadow-sm
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <Image
                  src="/images/github.png"
                  alt="Rozina's GitHub profile and contribution activity"
                  width={1200}
                  height={600}
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}