"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[400px] w-full max-w-[300px] cursor-pointer sm:h-[400px] sm:w-[300px]"
      style={{ perspective: 1100 }}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[22px] border border-white/10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/images/profile/rose-profile.jpeg"
            alt="Rozina Saleem"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* BACK */}

        <div
          className="absolute  inset-0 flex flex-col items-center justify-center rounded-[22px] bg-[#111111] px-4 py-5 text-center text-white sm:p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-accent sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
            Hello, I'm
          </p>

          <h2 className="text-2xl font-semibold sm:text-4xl">
            Rozina Saleem
          </h2>

          <p className="mt-2 text-xs text-white/60 sm:mt-4 sm:text-base">
            Full Stack Developer
          </p>

          <div className="mt-4 h-px w-12 bg-accent sm:mt-8 sm:w-16" />

          <p className="mt-4 text-[11px] leading-5 text-white/50 sm:mt-6 sm:text-sm sm:leading-6">
            Building modern web applications
            <br />
            and AI-powered experiences.
          </p>
        </div>
      </motion.div>
    </div>
  );
}