"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { PhotoItem } from "@/lib/photography-data";

type PhotoGalleryProps = {
  photos: PhotoItem[];
  categoryName: string;
};

export function PhotoGallery({ photos, categoryName }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={`${photo.alt}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Ouvrir l'image ${index + 1} de ${categoryName}`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          </button>
        ))}
      </div>

      <div
        aria-hidden={!activePhoto}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 sm:p-8 ${
          activePhoto
            ? "pointer-events-auto bg-black/90 opacity-100"
            : "pointer-events-none bg-black/0 opacity-0"
        }`}
        onClick={() => setActiveIndex(null)}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto ? activePhoto.alt : "Aperçu photo"}
          className={`relative h-full w-full max-w-6xl overflow-hidden rounded-xl bg-background transition-transform duration-300 ${
            activePhoto ? "scale-100" : "scale-95"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-3 top-3 z-10 rounded-md bg-black/55 px-3 py-1 text-lg font-semibold text-white transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Fermer la photo"
          >
            ×
          </button>

          {activePhoto && (
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          )}
        </div>
      </div>
    </>
  );
}
