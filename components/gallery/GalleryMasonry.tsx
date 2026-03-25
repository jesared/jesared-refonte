"use client";

import { useState } from "react";

import { GalleryItem, type GalleryPhoto } from "@/components/gallery/GalleryItem";
import { GalleryModal } from "@/components/gallery/GalleryModal";

type GalleryMasonryProps = {
  photos: GalleryPhoto[];
};

export function GalleryMasonry({ photos }: GalleryMasonryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 sm:gap-5 sm:space-y-5 xl:columns-4">
        {photos.map((photo, index) => (
          <GalleryItem key={`${photo.alt}-${index}`} photo={photo} index={index} onClick={setActiveIndex} />
        ))}
      </div>

      <GalleryModal
        photos={photos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
