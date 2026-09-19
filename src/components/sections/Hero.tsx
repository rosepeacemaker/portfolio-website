import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Big text behind the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-[var(--font-cormorant)] text-[18vw] font-semibold leading-none tracking-tight">
          Rozina Saleem
        </h1>
      </div>
      {/*  Image */}

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Image
          src="/images/profile/rose-profile.jpeg"
          alt="Rozina Saleem"
          width={500}
          height={700}
          className="h-[70vh] w-auto object-contain"
          priority
        />
      </div>
      {/* Front text */}
      <div className="absolute bottom-10 left-6 z-20 md:left-12">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Hello, I’m
        </p>

        <h2 className="mt-2 text-4xl font-bold md:text-6xl">Rose Saleem</h2>

        <p className="mt-3 max-w-md text-sm md:text-base">
          Full Stack Developer building modern web experiences & AI-powered
          applications.
        </p>
      </div>
    </section>
  );
}
