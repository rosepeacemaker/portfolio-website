'use client'

import Image from "next/image";
import FlipCard from "../ui/FlipCard"



export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
<div className="absolute inset-0 z-10 flex items-center justify-center">

<FlipCard
  front={<Image src="/images/profile/rose-profile.jpeg"
     alt="Rozina Saleem"
     width={300}
     height={600}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
  back={
    <div style={{ padding: 24 }}>
      <h3>Wooded Landscape</h3>
      <p>17th century · Rijksmuseum</p>
    </div>
  }
  axis="y"
  flipOnClick
  draggable
  dragDistance={0}
  tilt
  tiltMax={12}
  glare
  glareOpacity={0.22}
  hoverScale={1.03}
  perspective={1100}
  stiffness={170}
  damping={20}
  width={300}
  height={400}
  radius={22}
  background="#27272a"
  color="#f5f5f5"
  shadow
  shadowColor="#000000"
  shadowOpacity={0.45}
  onFlipChange={flipped => console.log(flipped)}
/>
</div>
  {/* Big text behind the image */}
  
  <div className="absolute inset-0 z-0 flex items-center justify-center translate-x-[12%] translate-y-[12%]">
    <h1  className="font-[var(--font-cormorant)] text-[18vw] font-medium leading-none tracking-tight blur-[1px] opacity-30">
      Rozina Saleem
    </h1>
  </div>
  

  {/* Profile image  */}
   {/* <div  className="absolute inset-y-0 right-0 z-10 flex w-full items-center justify-center md:right-12 md:w-auto">
  <FlipCard />
  </div> */}

  {/* Left intro content */}
  <div className="relative z-20 flex min-h-screen items-center px-10 md:px-12">
    <div className="max-w-xl text-reveal">

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
<div className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2">
 <span className="text-xs uppercase tracking-[0.25em] text-accent">
            Scroll ↓
          </span>
</div>
</section>
  );
}
