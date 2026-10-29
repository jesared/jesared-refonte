export type LabProject = {
  slug: "cctt-club" | "ortt" | "tropheefg" | "cd51tt" | "chamelo-couture";
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  services: string[];
  stack: string[];
  images: { src: string; alt: string }[];
  siteUrl: string;
  dates: string;
  tags: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  timeline: { title: string; date: string; description: string }[];
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
    tags: ["Club sportif", "Site vitrine", "Navigation mobile"],
    highlights: [
      "Structure claire des sections club, horaires et inscriptions.",
      "Mise en avant des actus avec une lecture rapide.",
      "Optimisations SEO locales pour la visibilité.",
    ],
    metrics: [
      { label: "Pages clés", value: "8" },
      { label: "Temps de chargement", value: "< 2s" },
      { label: "SEO local", value: "+40%" },
    ],
    timeline: [
      {
        title: "Audit & cadrage",
        date: "Semaine 1",
        description: "Analyse du site existant, objectifs et plan des pages.",
      },
      {
        title: "Design & prototypage",
        date: "Semaines 2-3",
        description: "Wireframes, UI kit et prototypes interactifs.",
      },
      {
        title: "Développement & SEO",
        date: "Semaines 4-6",
        description: "Intégration Next.js, contenus et optimisation SEO.",
      },
    ],
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
    tags: ["Identité club", "Actualités", "Performance"],
    highlights: [
      "Hero éditorial impactant et hiérarchie renforcée.",
      "Sections clubs structurées pour la navigation rapide.",
      "Optimisations de performance pour mobile.",
    ],
    metrics: [
      { label: "Sections refondues", value: "12" },
      { label: "Performance mobile", value: "A" },
      { label: "Temps de lecture", value: "-30%" },
    ],
    timeline: [
      {
        title: "Exploration & contenu",
        date: "Semaine 1",
        description: "Structuration des rubriques et inventaire des contenus.",
      },
      {
        title: "Design UI",
        date: "Semaines 2-3",
        description: "Direction artistique et maquettage des pages clés.",
      },
      {
        title: "Intégration & lancement",
        date: "Semaines 4-5",
        description: "Intégration, QA et mise en production.",
      },
    ],
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
    tags: ["Tournoi", "Inscriptions", "Tableaux"],
    highlights: [
      "Page d’accueil orientée participants et clubs.",
      "Accès rapide aux calendriers et classements.",
      "Interface claire pour les inscriptions.",
    ],
    metrics: [
      { label: "Clubs engagés", value: "20+" },
      { label: "Tours gérés", value: "8" },
      { label: "Inscriptions", value: "+25%" },
    ],
    timeline: [
      {
        title: "Cadre fonctionnel",
        date: "Semaine 1",
        description: "Définition des besoins organisateurs et clubs.",
      },
      {
        title: "Design & UI kit",
        date: "Semaines 2-3",
        description: "Mise en place d’un système de composants.",
      },
      {
        title: "Déploiement",
        date: "Semaine 4",
        description: "Mise en ligne et ajustements finaux.",
      },
    ],
  },
  {
    slug: "cd51tt",
    title: "CD51TT",
    shortDescription: "Le site du Comité de la Marne de tennis de table : actualités, compétitions, clubs et documents.",
    longDescription:
      "Un site institutionnel pour accompagner les clubs et les joueurs de la Marne. Les actualités, compétitions, informations sur les clubs et documents utiles sont rassemblés dans une interface claire, avec un accès rapide aux temps forts de la saison.",
    role: "Conception et développement du site, crédités sur le site du comité.",
    services: ["Conception du site", "Développement web", "Présentation des contenus"],
    stack: ["Next.js"],
    images: [
      {
        src: "/labs/cd51tt.png",
        alt: "Logo du Comité Départemental de Tennis de Table de la Marne",
      },
    ],
    siteUrl: "https://www.cd51tt.fr/",
    dates: "Saison 2025 — 2026",
    tags: ["Tennis de table", "Comité départemental", "Site institutionnel"],
    highlights: [
      "Actualités, compétitions et calendrier de la saison réunis sur le site.",
      "Annuaire des clubs de la Marne et accès aux informations utiles.",
      "Documents, formulaires et règlements accessibles depuis la navigation.",
    ],
    metrics: [],
    timeline: [],
  },
  {
    slug: "chamelo-couture",
    title: "Cham'élo Couture",
    shortDescription: "Un site vitrine pour un atelier de couture à Châlons-en-Champagne.",
    longDescription:
      "Un site vitrine pour présenter l’atelier Cham'élo Couture et ses prestations : retouches de vêtements, cours particuliers et broderie personnalisée. Les visiteurs peuvent découvrir les réalisations, consulter les tarifs et contacter l’atelier pour un devis ou une réservation.",
    role: "Conception et développement du site vitrine.",
    services: ["Site vitrine", "Présentation des prestations", "Mise en valeur des réalisations"],
    stack: ["Next.js"],
    images: [
      {
        src: "/labs/chamelo-couture.png",
        alt: "Visuel de présentation du site Cham'élo Couture",
      },
    ],
    siteUrl: "https://www.chamelocouture.fr/",
    dates: "En ligne",
    tags: ["Artisanat", "Couture", "Site vitrine"],
    highlights: [
      "Présentation des retouches, des cours de couture et des broderies personnalisées.",
      "Tarifs et informations pratiques consultables directement sur le site.",
      "Galerie de réalisations et accès aux demandes de contact et de réservation.",
    ],
    metrics: [],
    timeline: [],
  },
];

export function getLabProject(slug: string) {
  return labProjects.find((project) => project.slug === slug);
}
