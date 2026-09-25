"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ArrowRight, ArrowUp, ExternalLink } from "lucide-react";
import SectionDividerTicker from "../ui/SectionDividerTicker";

export default function Contact() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <section
      id="contact"
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
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-40 top-[-100px]
            h-[400px] w-[400px]
            rounded-full
            bg-pink-500/15 dark:bg-[#e8a6b8]/15
            blur-[120px]
          "
        />

        <div
          className="
            absolute -right-40 bottom-[-100px]
            h-[450px] w-[450px]
            rounded-full
            bg-purple-500/10 dark:bg-[#c78bea]/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.03] dark:opacity-[0.05]
            [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)]
            [background-size:32px_32px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col justify-center my-auto">
        {/* Intro */}
        <div className={`transition-all duration-300 ${showContacts ? "max-w-2xl mb-3 lg:mb-5" : "max-w-3xl mb-8"}`}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Contact
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Let&apos;s Connect
          </h2>

          <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
            Have a project, opportunity, or idea?
            I&apos;d love to hear from you.
          </p>

          {/* Toggle Button */}
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="hero-btn mt-4 sm:mt-5 inline-flex items-center gap-2"
          >
            {showContacts ? (
              <>Hide Contacts <ArrowUp className="h-4 w-4" /></>
            ) : (
              <>Let&apos;s Connect <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
        </div>

        {/* Main Contact Area */}
        {showContacts && (
          <div
            className="
              grid
              gap-4 lg:gap-6
              lg:grid-cols-12
              lg:items-center
              animate-in
              fade-in
              slide-in-from-bottom-4
              duration-500
            "
          >
            {/* LEFT — Contact Cards (2x2 Grid for compact vertical height) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                className="
                  group
                  rounded-xl
                  border border-border/70
                  bg-card/70 dark:bg-card/40
                  p-3.5
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-accent
                  hover:bg-accent/10
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                    Email
                  </p>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-foreground truncate">
                  your.email@example.com
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  rounded-xl
                  border border-border/70
                  bg-card/70 dark:bg-card/40
                  p-3.5
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-accent
                  hover:bg-accent/10
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 fill-accent" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                    LinkedIn
                  </p>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-foreground truncate">
                  linkedin.com/in/yourname
                </p>
              </a>

              {/* GitHub */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  rounded-xl
                  border border-border/70
                  bg-card/70 dark:bg-card/40
                  p-3.5
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-accent
                  hover:bg-accent/10
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 fill-accent" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                    GitHub
                  </p>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-foreground truncate">
                  github.com/yourusername
                </p>
              </a>

              {/* X */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  rounded-xl
                  border border-border/70
                  bg-card/70 dark:bg-card/40
                  p-3.5
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-accent
                  hover:bg-accent/10
                  hover:shadow-md
                "
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 fill-accent" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                    X
                  </p>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-foreground truncate">
                  x.com/yourusername
                </p>
              </a>
            </div>

            {/* RIGHT — GitHub Screenshot Card */}
            <div className="lg:col-span-7">
              <div className="mb-2.5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                    GitHub
                  </p>
                  <h3 className="font-[var(--font-cormorant)] text-xl sm:text-2xl font-semibold text-foreground">
                    Open Source & Activity
                  </h3>
                </div>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-medium text-accent hover:underline transition-colors flex items-center gap-1"
                >
                  View GitHub <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-border/70
                  bg-card/70 dark:bg-card/40
                  p-2
                  shadow-sm
                  backdrop-blur-md
                  transition-all duration-300
                  hover:shadow-lg
                "
              >
                <Image
                  src="/images/github.png"
                  alt="Rozina's GitHub profile and contribution activity"
                  width={1200}
                  height={600}
                  className="max-h-[190px] sm:max-h-[230px] lg:max-h-[250px] w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <SectionDividerTicker />
    </section>
  );
}