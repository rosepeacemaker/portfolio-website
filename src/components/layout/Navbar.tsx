"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";

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

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full px-6 py-5 md:px-10
        transition-all duration-300
        ${scrolled
          ? "bg-background/80 text-foreground backdrop-blur-md border-b border-border/40"
          : "bg-transparent text-foreground"
        }
      `}
    >
      <div className="mx-auto max-w-7xl">

        {/* Top Bar */}
        <div className="flex items-center justify-between">

          {/* Name */}
          <Link href="/" onClick={closeMenu} className="group">
            <div className="font-[var(--font-cormorant)] text-2xl font-semibold leading-none">
              Rozina
            </div>

            <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Full Stack Developer (MERN)
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-sm md:flex">
            <Link
              href="#about"
              className="transition-opacity duration-300 hover:opacity-50"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="transition-opacity duration-300 hover:opacity-50"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="transition-opacity duration-300 hover:opacity-50"
            >
              Projects
            </Link>

            <Link
              href="#contact"
              className="transition-opacity duration-300 hover:opacity-50"
            >
              Contact
            </Link>

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

              <Link href="#about" onClick={closeMenu}>
                About
              </Link>

              <Link href="#skills" onClick={closeMenu}>
                Skills
              </Link>

              <Link href="#projects" onClick={closeMenu}>
                Projects
              </Link>

              <Link href="#contact" onClick={closeMenu}>
                Contact
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

