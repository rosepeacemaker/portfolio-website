"use client"
import { useEffect,useState } from "react";


export default function ThemeToggle() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);




const toggleTheme = () => {


    const isDark = document.documentElement.classList.toggle("dark");

    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

};

return (
    <button
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="rounded-full border border-foreground/20 px-4 py-2"
    >
        {dark ? "☀️" : "🌙"}
    </button>
)
}