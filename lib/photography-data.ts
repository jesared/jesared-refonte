import { cloudinaryUrl } from "@/lib/cloudinary";

export type PhotographyCategory = {
  slug: "discotheque" | "sport" | "evenement" | "produit";
  title: string;
  description: string;
  heroDescription: string;
  coverImage: string;
};

export type PhotoItem = {
  src: string;
  alt: string;
};

type PhotoAsset = {
  publicId: string;
  alt: string;
};

export const photographyCategories: PhotographyCategory[] = [
  {
    slug: "discotheque",
    title: "Discothèque",
    description: "Ambiances nocturnes et énergie de la piste.",
    heroDescription:
      "Des images immersives qui capturent les lumières, les contrastes et la dynamique de la nuit.",
    coverImage: "/photographie/categories/discotheque.svg",
  },
  {
    slug: "sport",
    title: "Sport",
    description: "Action, précision et intensité en mouvement.",
    heroDescription:
      "Une approche rythmée pour figer les moments-clés : performance, effort et émotion sportive.",
    coverImage: "/photographie/categories/sport.svg",
  },
  {
    slug: "evenement",
    title: "Événements",
    description: "Moments humains et atmosphères marquantes.",
    heroDescription:
      "Reportage photo pensé pour raconter vos temps forts avec naturel, élégance et cohérence visuelle.",
    coverImage: "/photographie/categories/evenements.svg",
  },
  {
    slug: "produit",
    title: "Produits",
    description: "Visuels soignés orientés marque et conversion.",
    heroDescription:
      "Des compositions propres et minimalistes pour mettre en valeur la matière, la forme et l'identité produit.",
    coverImage: "/photographie/categories/produits.svg",
  },
];

export const galleryByCategory: Record<PhotographyCategory["slug"], PhotoAsset[]> = {
  discotheque: [
    {
      publicId: "portfolio/photo/discotheque/481776332_1298850698350907_7153424028171319158_n_dygg9m",
      alt: "Portraits festifs en discothèque",
    },
    {
      publicId: "portfolio/photo/discotheque/482061811_1302279561341354_1226994942945584408_n_cidxra",
      alt: "Ambiance de fête et confettis en discothèque",
    },
  ],
  sport: [
    { publicId: "/photographie/categories/sport.svg", alt: "Départ explosif sur piste" },
    { publicId: "/photographie/categories/sport.svg", alt: "Sprint capturé en pleine accélération" },
    { publicId: "/photographie/categories/sport.svg", alt: "Moment de concentration avant l'effort" },
    { publicId: "/photographie/categories/sport.svg", alt: "Action décisive au bord du terrain" },
    { publicId: "/photographie/categories/sport.svg", alt: "Détail du geste technique" },
    { publicId: "/photographie/categories/sport.svg", alt: "Célébration d'après-victoire" },
  ],
  evenement: [
    { publicId: "/photographie/categories/evenements.svg", alt: "Accueil des invités en lumière douce" },
    { publicId: "/photographie/categories/evenements.svg", alt: "Discours capté sur scène" },
    { publicId: "/photographie/categories/evenements.svg", alt: "Plan large de soirée corporate" },
    { publicId: "/photographie/categories/evenements.svg", alt: "Détail de décoration événementielle" },
    { publicId: "/photographie/categories/evenements.svg", alt: "Portrait spontané pendant l'événement" },
    { publicId: "/photographie/categories/evenements.svg", alt: "Final de soirée avec ambiance chaleureuse" },
  ],
  produit: [
    { publicId: "/photographie/categories/produits.svg", alt: "Packshot produit minimaliste" },
    { publicId: "/photographie/categories/produits.svg", alt: "Mise en scène produit lifestyle" },
    { publicId: "/photographie/categories/produits.svg", alt: "Détail texture et matière" },
    { publicId: "/photographie/categories/produits.svg", alt: "Produit avec éclairage contrasté" },
    { publicId: "/photographie/categories/produits.svg", alt: "Composition e-commerce fond neutre" },
    { publicId: "/photographie/categories/produits.svg", alt: "Série branding avec accessoires" },
  ],
};

export const galleryFolderByCategory: Record<PhotographyCategory["slug"], string> = {
  discotheque: "portfolio/photo/discotheque",
  sport: "portfolio/photo/sport",
  evenement: "portfolio/photo/evenement",
  produit: "portfolio/photo/produit",
};

export function getPhotographyCategory(slug: string) {
  return photographyCategories.find((category) => category.slug === slug);
}

export function getGalleryFolderByCategory(slug: PhotographyCategory["slug"]) {
  return galleryFolderByCategory[slug];
}

export function getGalleryPhotosByCategory(slug: PhotographyCategory["slug"]): PhotoItem[] {
  const photos = galleryByCategory[slug] ?? [];

  return photos.map((photo) => ({
    src: cloudinaryUrl(photo.publicId, {
      width: 1800,
      quality: "auto",
      format: "auto",
    }),
    alt: photo.alt,
  }));
}