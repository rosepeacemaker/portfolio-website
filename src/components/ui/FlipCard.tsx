"use client";

import Image from "next/image";
import { useState } from "react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[400px] w-[300px] cursor-pointer"
      style={{ perspective: "1100px" }}
    onClick={() => {
  alert("CLICK WORKING");
  setFlipped(!flipped);
}}
    >
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[22px] border border-white/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/images/profile/rose-profile.jpeg"
            alt="Rozina Saleem"
            fill
            className="object-cover"
          />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-[22px] bg-[#111111] p-8 text-center text-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5B8CFF]">
            Hello, I'm
          </p>

          <h2 className="text-4xl font-semibold">
            Rozina Saleem
          </h2>

          <p className="mt-4 text-white/60">
            Full Stack Developer
          </p>

          <div className="mt-8 h-px w-16 bg-[#5B8CFF]" />

          <p className="mt-6 text-sm leading-6 text-white/50">
            Building modern web applications
            <br />
            and AI-powered experiences.
          </p>
        </div>
      </div>
    </div>
  );
}