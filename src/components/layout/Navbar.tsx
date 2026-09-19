import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link"



export default function Navbar(){
    return(
          <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-[var(--font-cormorant)] text-2xl font-semibold">
          Rose.
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm">
           <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav> 
    )
}