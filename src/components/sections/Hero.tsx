import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">

  {/* Big text behind the image */}
  <div className="absolute inset-0 z-0 flex items-center justify-center">
    <h1 className="font-[var(--font-cormorant)] text-[18vw] font-semibold leading-none tracking-tight">
      Rozina Saleem
    </h1>
  </div>

  {/* Profile image */}
  <div className="absolute inset-y-0 right-[2%] z-10 flex items-center">
  <Image
  src="/images/profile/rose-profile.jpeg"
  alt="Rozina Saleem"
  width={600}
  height={800}
className="h-[80vh] w-auto object-contain opacity-85"
/>
  </div>

  {/* Left intro content */}
  <div className="relative z-20 flex min-h-screen items-center px-6 md:px-12">
    <div className="max-w-xl">

    <p className="text-sm uppercase tracking-[0.3em] text-accent">
  Hello, I’m
</p>

<h2 className="mt-4 font-[var(--font-cormorant)] text-6xl font-semibold leading-[0.9] md:text-8xl">
  Rozina
  <br />
  Saleem
</h2>

<p className="mt-6 text-lg md:text-xl">
  Full Stack Developer
</p>

<p className="mt-4 max-w-lg text-sm leading-7 text-foreground/70 md:text-base">
  I build modern web experiences and AI-powered applications
  with a focus on clean design and thoughtful user experiences.
</p>
<div className="mt-8 flex items-center gap-4">

  <a
    href="#projects"
    className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:opacity-80"
  >
    View Projects
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background"
  >
    Resume
  </a>

</div>
    </div>
  </div>

</section>
  );
}
