export type PhotographyCategory = {
  slug: "discotheque" | "sport" | "evenements" | "produits";
  title: string;
  description: string;
  heroDescription: string;
  coverImage: string;
};

export type PhotoItem = {
  src: string;
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
    slug: "evenements",
    title: "Événements",
    description: "Moments humains et atmosphères marquantes.",
    heroDescription:
      "Reportage photo pensé pour raconter vos temps forts avec naturel, élégance et cohérence visuelle.",
    coverImage: "/photographie/categories/evenements.svg",
  },
  {
    slug: "produits",
    title: "Produits",
    description: "Visuels soignés orientés marque et conversion.",
    heroDescription:
      "Des compositions propres et minimalistes pour mettre en valeur la matière, la forme et l'identité produit.",
    coverImage: "/photographie/categories/produits.svg",
  },
];

export const galleryByCategory: Record<PhotographyCategory["slug"], PhotoItem[]> = {
  discotheque: [
    { src: "/photos/discotheque/photo1.jpg", alt: "Projecteurs et fumée sur le dancefloor" },
    { src: "/photos/discotheque/photo2.jpg", alt: "DJ set en lumière violette" },
    { src: "/photos/discotheque/photo3.jpg", alt: "Public en contre-jour néon" },
    { src: "/photos/discotheque/photo4.jpg", alt: "Scène club ambiance stroboscope" },
    { src: "/photos/discotheque/photo5.jpg", alt: "Portrait nocturne en salle" },
    { src: "/photos/discotheque/photo1.jpg", alt: "Foule en mouvement sous lasers" },
  ],
  sport: [
    { src: "/photographie/categories/sport.svg", alt: "Départ explosif sur piste" },
    { src: "/photographie/categories/sport.svg", alt: "Sprint capturé en pleine accélération" },
    { src: "/photographie/categories/sport.svg", alt: "Moment de concentration avant l'effort" },
    { src: "/photographie/categories/sport.svg", alt: "Action décisive au bord du terrain" },
    { src: "/photographie/categories/sport.svg", alt: "Détail du geste technique" },
    { src: "/photographie/categories/sport.svg", alt: "Célébration d'après-victoire" },
  ],
  evenements: [
    { src: "/photographie/categories/evenements.svg", alt: "Accueil des invités en lumière douce" },
    { src: "/photographie/categories/evenements.svg", alt: "Discours capté sur scène" },
    { src: "/photographie/categories/evenements.svg", alt: "Plan large de soirée corporate" },
    { src: "/photographie/categories/evenements.svg", alt: "Détail de décoration événementielle" },
    { src: "/photographie/categories/evenements.svg", alt: "Portrait spontané pendant l'événement" },
    { src: "/photographie/categories/evenements.svg", alt: "Final de soirée avec ambiance chaleureuse" },
  ],
  produits: [
    { src: "/photographie/categories/produits.svg", alt: "Packshot produit minimaliste" },
    { src: "/photographie/categories/produits.svg", alt: "Mise en scène produit lifestyle" },
    { src: "/photographie/categories/produits.svg", alt: "Détail texture et matière" },
    { src: "/photographie/categories/produits.svg", alt: "Produit avec éclairage contrasté" },
    { src: "/photographie/categories/produits.svg", alt: "Composition e-commerce fond neutre" },
    { src: "/photographie/categories/produits.svg", alt: "Série branding avec accessoires" },
  ],
};

export function getPhotographyCategory(slug: string) {
  return photographyCategories.find((category) => category.slug === slug);
}
