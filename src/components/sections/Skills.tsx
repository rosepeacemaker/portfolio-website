

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-screen overflow-hidden bg-[#f5f3ee] px-6 py-12 text-black"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-black/50">
          What I work with
        </p>

        <h2 className="mb-16 text-5xl font-semibold tracking-tight md:text-7xl">
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-7">
            <p className="mb-4 text-sm uppercase tracking-widest text-black/50">
              Full Stack
            </p>

            <h3 className="mb-5 text-2xl font-medium">
              Web Development
            </h3>

            <p className="leading-8 text-black/60">
              React · Next.js · Node.js · Express · MongoDB · TypeScript
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-7">
            <p className="mb-4 text-sm uppercase tracking-widest text-black/50">
              AI / LLM
            </p>

            <h3 className="mb-5 text-2xl font-medium">
              Generative AI
            </h3>

            <p className="leading-8 text-black/60">
              GenAI · RAG · LangChain · LangGraph · LLM Integration
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-7">
            <p className="mb-4 text-sm uppercase tracking-widest text-black/50">
              Systems
            </p>

            <h3 className="mb-5 text-2xl font-medium">
              Tools & Architecture
            </h3>

            <p className="leading-8 text-black/60">
              Docker · Kubernetes · Redis · Socket.io · REST APIs
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-8">
          <p className="text-black/50">
            Full Stack + GenAI
          </p>

          <p className="mt-2 text-xl">
            Sheryians Coding School
          </p>
        </div>
      </div>
    </section>
  );
}
