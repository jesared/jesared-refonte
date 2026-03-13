import { PageContainer } from "@/components/layout";
import { CategoryCards } from "@/components/photography/category-cards";

export default function PhotographiePage() {
  return (
    <PageContainer>
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center gap-5 overflow-hidden py-16 text-center sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.2),transparent_55%)]" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          Portfolio photo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Photographie</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Un portfolio pensé pour raconter chaque univers visuel avec clarté : nuit, sport,
          événementiel et produit.
        </p>
      </section>

      <section className="border-t border-border/60 py-14 sm:py-16">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Choisissez une galerie</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Chaque catégorie dispose de sa propre page avec un hero dédié, une grille responsive
            et un aperçu en plein écran.
          </p>
        </div>

        <CategoryCards />
      </section>
    </PageContainer>
  );
}
