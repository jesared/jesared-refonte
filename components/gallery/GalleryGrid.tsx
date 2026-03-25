import { GalleryMasonry } from "@/components/gallery/GalleryMasonry";
import type { GalleryPhoto } from "@/components/gallery/GalleryItem";

type GalleryGridProps = {
  photos: GalleryPhoto[];
};

export function GalleryGrid({ photos }: GalleryGridProps) {
  return <GalleryMasonry photos={photos} />;
}
