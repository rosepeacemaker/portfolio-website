"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";
import {
  UserRound,
  Sparkles,
  Route,
  FolderKanban,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      label: "About",
      href: "#about",
      icon: UserRound,
    },
    {
      label: "Skills",
      href: "#skills",
      icon: Sparkles,
    },
    {
      label: "Journey",
      href: "#journey",
      icon: Route,
    },
    {
      label: "Projects",
      href: "#projects",
      icon: FolderKanban,
    },
    {
      label: "Contact",
      href: "#contact",
      icon: Mail,
    },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full px-6 py-2 md:px-10
        transition-all duration-300
        ${
          scrolled
            ? "bg-background/80 text-foreground backdrop-blur-md border-b border-border/40"
            : "bg-transparent text-foreground"
        }
      `}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Name */}
          <Link
  href="/"
  onClick={closeMenu}
  className="group relative block"
>
  {/* Pink spotlight */}
  <span
    className="
      pointer-events-none
      absolute left-1/2 top-1/2
      h-10 w-24
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      bg-[#FF7AF7]/10
      opacity-0
      blur-xl
      transition-all duration-500
      group-hover:scale-125
      group-hover:opacity-100
    "
  />

  {/* Name */}
  <div
    className="
      relative z-10
      font-[var(--font-cormorant)]
      text-2xl
      font-semibold
      leading-none
      transition-all duration-300
      group-hover:scale-105
      group-hover:text-[#FF7AF7]
    "
  >
    Rozina
  </div>

  {/* Subtitle */}
  <div
    className="
      relative z-10
      mt-1
      text-[9px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-muted-foreground
      transition-colors duration-300
      group-hover:text-[#FF7AF7]/70
    "
  >
    Full Stack Developer (MERN)
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-center gap-1.5 px-3 py-2 text-sm transition-colors duration-300"
                >
                  {/* Pink spotlight */}
                  <span
                    className="
                      pointer-events-none
                      absolute inset-0
                      rounded-full
                      bg-[#FF7AF7]/10
                      opacity-0
                      blur-md
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:scale-110
                    "
                  />

                  {/* Icon */}
                  <Icon
                    size={14}
                    strokeWidth={1.8}
                    className="
                      relative z-10
                      w-0
                      -translate-x-2
                      opacity-0
                      text-[#FF7AF7]
                      transition-all duration-300
                      group-hover:w-[14px]
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />

                  {/* Text */}
                  <span
                    className="
                      relative z-10
                      transition-colors duration-300
                      group-hover:text-[#FF7AF7]
                    "
                  >
                    {item.label}
                  </span>

                  {/* Bottom glow line */}
                  <span
                    className="
                      absolute bottom-0 left-1/2
                      h-px w-0
                      -translate-x-1/2
                      bg-[#FF7AF7]
                      shadow-[0_0_8px_#FF7AF7]
                      transition-all duration-300
                      group-hover:w-6
                    "
                  />
                </Link>
              );
            })}

            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-xl leading-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-6 border-t border-black/10 pt-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="transition-colors duration-300 hover:text-[#FF7AF7]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}