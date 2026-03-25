export function HomeHero() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-24 sm:px-10 sm:py-32">
      <p className="w-fit rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-600">
        Base Next.js
      </p>

      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        Une fondation propre pour ton futur site vitrine.
      </h1>

      <p className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
        App Router, Tailwind CSS et structure minimaliste. Tu peux ajouter des
        sections et intégrer shadcn/ui uniquement quand ce sera nécessaire.
      </p>
    </section>
  );
}
