import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24">
   
      <h2 className="text-5xl font-semibold">Projects</h2>
         <Image
  src="/profile/images/rose-profile.jpeg"
  alt="Rozina Saleem"
  width={400}
  height={600}
  className="object-cover"
/>
    </section>
  );
}