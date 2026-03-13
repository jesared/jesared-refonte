import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui";

const categories = [
  {
    title: "Discothèque",
    description:
      "Ambiances nocturnes et jeux de lumières pour retranscrire l'énergie de la piste.",
    href: "/photographie/discotheque",
    image: "/photographie/categories/discotheque.svg",
    cta: "Voir la galerie Discothèque",
  },
  {
    title: "Sport",
    description:
      "Instants d'action et de performance saisis au plus près des athlètes et du mouvement.",
    href: "/photographie/sport",
    image: "/photographie/categories/sport.svg",
    cta: "Voir la galerie Sport",
  },
  {
    title: "Événements",
    description:
      "Reportages photo pour immortaliser les moments forts de vos soirées et cérémonies.",
    href: "/photographie/evenements",
    image: "/photographie/categories/evenements.svg",
    cta: "Voir la galerie Événements",
  },
  {
    title: "Produits",
    description:
      "Visuels soignés pour mettre en valeur vos produits, votre marque et vos campagnes.",
    href: "/photographie/produits",
    image: "/photographie/categories/produits.svg",
    cta: "Voir la galerie Produits",
  },
];

export default function PhotographiePage() {
  return (
    <PageContainer>
      <section className="flex min-h-[48vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          Portfolio photo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Photographie</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Un univers visuel minimaliste, centré sur la lumière, l&apos;émotion et des compositions
          nettes pour raconter chaque histoire avec élégance.
        </p>
      </section>

      <section className="border-t border-border/60 py-14 sm:py-16">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Catégories</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Explorez les différentes facettes de mon travail photographique.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.title} href={category.href} className="group block focus-visible:outline-none">
              <Card className="h-full overflow-hidden border-border/70 py-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1280px) 23vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <CardContent className="flex h-full flex-col gap-3 py-6">
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {category.description}
                  </CardDescription>
                  <span className="mt-auto text-sm font-medium text-primary">{category.cta} →</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
