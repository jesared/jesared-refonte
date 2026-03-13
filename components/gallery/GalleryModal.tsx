"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

import type { GalleryPhoto } from "@/components/gallery/GalleryItem";

type GalleryModalProps = {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function GalleryModal({ photos, activeIndex, onClose, onNavigate }: GalleryModalProps) {
  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  const goToPrevious = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + photos.length) % photos.length);
  }, [activeIndex, onNavigate, photos.length]);

  const goToNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % photos.length);
  }, [activeIndex, onNavigate, photos.length]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;

      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goToNext, goToPrevious, onClose]);

  return (
    <div
      aria-hidden={!activePhoto}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 transition-all duration-300 sm:p-8 ${
        activePhoto
          ? "pointer-events-auto bg-black/85 opacity-100 backdrop-blur-sm"
          : "pointer-events-none bg-black/0 opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={activePhoto ? activePhoto.alt : "Aperçu photo"}
        className={`relative h-full w-full max-w-7xl overflow-hidden rounded-2xl border border-white/15 bg-black/95 shadow-2xl transition-transform duration-300 ${
          activePhoto ? "scale-100" : "scale-95"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/55 px-3 py-2 text-sm font-medium text-white transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Fermer la galerie"
        >
          Fermer
        </button>

        {activePhoto && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-2xl text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Image précédente"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 px-3 py-2 text-2xl text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Image suivante"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/45 px-4 py-1.5 text-xs tracking-wide text-white/90">
              {activeIndex + 1} / {photos.length}
            </div>

            <Image src={activePhoto.src} alt={activePhoto.alt} fill className="object-contain" sizes="100vw" priority />
          </>
        )}
      </div>
    </div>
  );
}
