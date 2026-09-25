"use client";

import { Sparkles } from "lucide-react";

interface TickerProps {
  items?: string[];
}

const defaultItems = [
  "Web Development",
  "Generative AI",
  "Full Stack MERN",
  "System Architecture",
  "RAG & LLM Integration",
  "TypeScript & Next.js",
  "UI/UX Design",
  "Docker & Kubernetes",
];

export default function SectionDividerTicker({
  items = defaultItems,
}: TickerProps) {
  // Duplicate items for seamless infinite marquee loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="
    absolute bottom-0 left-0 right-0 z-40
    overflow-hidden
    border-y border-[#D9829D]/30
    bg-gradient-to-r
    from-[#F3D6DE]
    via-[#EBC2CF]
    to-[#F3D6DE]
    py-2
    text-[#2A2228]
    shadow-[0_0_18px_rgba(217,130,157,0.18)]
  "
    >
      <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="
    flex items-center gap-6
    text-xs font-semibold
    uppercase tracking-[0.2em]
    text-[#5A414A]
    sm:text-sm
  "
          >
            <span>{item}</span>

            <Sparkles
              className="
      h-3.5 w-3.5
      shrink-0
      text-[#C96F8A]
    "
            />
          </div>
        ))}
      </div>
    </div>
  );
}