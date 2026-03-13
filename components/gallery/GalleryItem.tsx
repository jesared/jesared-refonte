import Image from "next/image";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

type GalleryItemProps = {
  photo: GalleryPhoto;
  index: number;
  onClick: (index: number) => void;
};

export function GalleryItem({ photo, index, onClick }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className="group relative overflow-hidden rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Ouvrir l'image ${index + 1}: ${photo.alt}`}
    >
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      </div>
    </button>
  );
}
