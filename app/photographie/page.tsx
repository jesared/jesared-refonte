"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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

const galleryItems = [
  {
    title: "Set club lumière stroboscope",
    category: "Discothèque",
    href: "/photographie/discotheque",
    image: "/photographie/categories/discotheque.svg",
  },
  {
    title: "Course décisive sur piste",
    category: "Sport",
    href: "/photographie/sport",
    image: "/photographie/categories/sport.svg",
  },
  {
    title: "Entrée de soirée corporate",
    category: "Événements",
    href: "/photographie/evenements",
    image: "/photographie/categories/evenements.svg",
  },
  {
    title: "Mise en scène produit premium",
    category: "Produits",
    href: "/photographie/produits",
    image: "/photographie/categories/produits.svg",
  },
  {
    title: "Foule et ambiance DJ set",
    category: "Discothèque",
    href: "/photographie/discotheque",
    image: "/photographie/categories/discotheque.svg",
  },
  {
    title: "Moment fort de cérémonie",
    category: "Événements",
    href: "/photographie/evenements",
    image: "/photographie/categories/evenements.svg",
  },
];

const galleryFilters = ["Tous", "Discothèque", "Sport", "Événements", "Produits"] as const;

type GalleryItem = (typeof galleryItems)[number];
type GalleryFilter = (typeof galleryFilters)[number];

export default function PhotographiePage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("Tous");
  const [isFiltering, setIsFiltering] = useState(false);

  const filteredGalleryItems = useMemo(
    () =>
      activeFilter === "Tous"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!isFiltering) {
      return;
    }

    const timeout = window.setTimeout(() => setIsFiltering(false), 180);

    return () => window.clearTimeout(timeout);
  }, [isFiltering]);

  const handleFilterChange = (filter: GalleryFilter) => {
    if (filter === activeFilter) {
      return;
    }

    setIsFiltering(true);
    setActiveFilter(filter);
  };

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
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Galerie</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Une sélection d&apos;images en grille, pensée pour une navigation fluide et moderne.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:mb-8">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                filter === activeFilter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/60"
              }`}
              aria-pressed={filter === activeFilter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 gap-4 transition-all duration-200 md:grid-cols-2 lg:grid-cols-3 ${
            isFiltering ? "translate-y-1 opacity-60" : "translate-y-0 opacity-100"
          }`}
        >
          {filteredGalleryItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="group relative block overflow-hidden rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Ouvrir ${item.title} en plein écran`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/80">{item.category}</p>
                  <p className="mt-1 text-sm font-medium sm:text-base">{item.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div
        aria-hidden={!selectedImage}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 sm:p-8 ${
          selectedImage
            ? "pointer-events-auto bg-black/80 opacity-100"
            : "pointer-events-none bg-black/0 opacity-0"
        }`}
        onClick={() => setSelectedImage(null)}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage ? `Aperçu de ${selectedImage.title}` : "Aperçu photo"}
          className={`relative h-full w-full max-w-6xl overflow-hidden rounded-xl bg-background transition-all duration-300 ${
            selectedImage ? "scale-100" : "scale-95"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-3 top-3 z-10 rounded-md bg-black/55 px-3 py-1 text-lg font-semibold text-white transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Fermer la photo"
          >
            ×
          </button>

          {selectedImage && (
            <>
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 text-white">
                <p className="text-xs uppercase tracking-[0.14em] text-white/75">
                  {selectedImage.category}
                </p>
                <p className="mt-1 text-base font-medium sm:text-lg">{selectedImage.title}</p>
              </div>
            </>
          )}
        </div>
      </div>

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
