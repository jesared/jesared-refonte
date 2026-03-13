"use client";

import { useState } from "react";

import { GalleryItem, type GalleryPhoto } from "@/components/gallery/GalleryItem";
import { GalleryModal } from "@/components/gallery/GalleryModal";

type GalleryGridProps = {
  photos: GalleryPhoto[];
};

export function GalleryGrid({ photos }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <GalleryItem key={`${photo.alt}-${index}`} photo={photo} index={index} onClick={setActiveIndex} />
        ))}
      </div>

      <GalleryModal photos={photos} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </>
  );
}
