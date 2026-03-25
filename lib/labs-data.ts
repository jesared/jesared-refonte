export type LabProject = {
  slug: "cctt-club" | "ortt" | "tropheefg";
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  services: string[];
  stack: string[];
  images: { src: string; alt: string }[];
  siteUrl: string;
  dates: string;
};

export const labProjects: LabProject[] = [
  {
    slug: "cctt-club",
    title: "CCTT Club",
    shortDescription: "Site club complet avec actualités, infos pratiques et vie associative.",
    longDescription:
      "Une plateforme pensée pour informer les adhérents, valoriser les événements et simplifier la communication du club. L’objectif : un site clair, efficace et agréable à consulter sur mobile comme sur desktop.",
    role: "Direction artistique, conception UX/UI et développement front.",
    services: ["Design UI", "Développement front", "Contenus", "Optimisation SEO"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: [
      {
        src: "/labs/cctt-home.png",
        alt: "Aperçu de la page d'accueil CCTT Club",
      },
      {
        src: "/labs/cctt-home.png",
        alt: "Vue d'ensemble du site CCTT Club",
      },
    ],
    siteUrl: "https://club.cctt.fr/",
    dates: "2024 — 2025",
  },
  {
    slug: "ortt",
    title: "Olympique Remois TT",
    shortDescription: "Site moderne et clair pour valoriser le club et ses activités.",
    longDescription:
      "Une refonte centrée sur la lisibilité des informations sportives et la mise en avant de la vie du club. Le design privilégie une navigation fluide et une hiérarchie claire des contenus.",
    role: "Conception, design et intégration.",
    services: ["Design UI", "Développement front", "Optimisation SEO"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: [
      {
        src: "/labs/ortt-home.png",
        alt: "Aperçu de la page d'accueil Olympique Remois TT",
      },
      {
        src: "/labs/ortt-home.png",
        alt: "Vue d'ensemble du site Olympique Remois TT",
      },
    ],
    siteUrl: "https://v2.ortt.fr/",
    dates: "2024",
  },
  {
    slug: "tropheefg",
    title: "Trophée François Grieder",
    shortDescription: "Refonte du site du tournoi et outils pour simplifier l'organisation.",
    longDescription:
      "Une vitrine dédiée au tournoi, avec une interface claire pour les participants et des outils pratiques pour l’organisation. L’objectif est de rendre les informations accessibles en un coup d’œil.",
    role: "Refonte visuelle, design UX/UI et développement.",
    services: ["Design UI", "Développement front", "Optimisation SEO"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: [
      {
        src: "/labs/tfg-home.png",
        alt: "Aperçu de la page d'accueil Trophée François Grieder",
      },
      {
        src: "/labs/tfg-home.png",
        alt: "Vue d'ensemble du site Trophée François Grieder",
      },
    ],
    siteUrl: "https://v2.tropheefg.fr/",
    dates: "2023 — 2024",
  },
];

export function getLabProject(slug: string) {
  return labProjects.find((project) => project.slug === slug);
}
