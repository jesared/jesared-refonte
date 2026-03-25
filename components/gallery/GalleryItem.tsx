import Image from "next/image";

export type GalleryPhoto = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type GalleryItemProps = {
  photo: GalleryPhoto;
  index: number;
  onClick: (index: number) => void;
};

const itemHeights = ["h-60", "h-80", "h-72", "h-96", "h-64"];

export function GalleryItem({ photo, index, onClick }: GalleryItemProps) {
  const imageHeightClass = itemHeights[index % itemHeights.length];

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-muted/20 text-left opacity-0 shadow-sm transition-transform duration-500 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-safe:animate-[fade-in-up_700ms_ease-out_forwards] sm:mb-5 card-hover"
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`Ouvrir l'image ${index + 1}: ${photo.alt}`}
    >
      <div className={`relative ${imageHeightClass}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          loading="lazy"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 46vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-85" />
        <div className="absolute inset-x-4 bottom-4 translate-y-2 text-xs font-medium text-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {photo.alt}
        </div>
      </div>
    </button>
  );
}
