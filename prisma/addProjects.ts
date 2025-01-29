import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      image:
        "https://raw.githubusercontent.com/AurelienAllenic/portfolio-next/refs/heads/develop/public/storage/images/apple.webp",
      title: "Apple Website Redesign",
      description:
        "Redesign complet du site web d'Apple pour améliorer l'expérience utilisateur et l'accessibilité.",
      category: "Web",
      objectifs:
        "Optimiser le site Apple pour une navigation fluide et une meilleure réactivité sur mobile.",
      technologies: ["html", "css", "javascript", "react", "nodejs"],
      result: "https://www.apple.com/",
    },
    {
      image:
        "https://raw.githubusercontent.com/AurelienAllenic/portfolio-next/refs/heads/develop/public/storage/images/dji.webp",
      title: "DJI Drones E-commerce",
      description:
        "Développement d'un site e-commerce pour vendre les drones DJI et accessoires.",
      category: "E-commerce",
      objectifs:
        "Créer une plateforme de vente en ligne pour les drones et accessoires, avec des options de personnalisation.",
      technologies: ["html", "css", "javascript", "react", "nodejs"],
      result: "https://www.dji.com",
    },
    {
      image:
        "https://raw.githubusercontent.com/AurelienAllenic/portfolio-next/refs/heads/develop/public/storage/images/google.webp",
      title: "Google Search Engine Optimization",
      description:
        "Amélioration de l'algorithme de recherche de Google pour mieux répondre aux besoins des utilisateurs.",
      category: "SEO",
      objectifs:
        "Optimiser le moteur de recherche pour offrir des résultats plus pertinents et améliorer l'expérience utilisateur.",
      technologies: ["seo", "python", "google-cloud"],
      result:
        "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr",
    },
    {
      image:
        "https://raw.githubusercontent.com/AurelienAllenic/portfolio-next/refs/heads/develop/public/storage/images/prime-video.webp",
      title: "Amazon Prime Video Redesign",
      description:
        "Refonte de l'interface utilisateur d'Amazon Prime Video pour une meilleure expérience de streaming.",
      category: "Web",
      objectifs:
        "Optimiser la navigation, améliorer la vitesse de chargement et rendre la recherche de contenu plus intuitive.",
      technologies: ["html", "css", "javascript", "react", "nodejs"],
      result: "https://www.primevideo.com/",
    },
    {
      image:
        "https://raw.githubusercontent.com/AurelienAllenic/portfolio-next/refs/heads/develop/public/storage/images/slack.webp",
      title: "Slack Communication Platform Enhancement",
      description:
        "Amélioration de la plateforme Slack pour faciliter la communication et la collaboration en équipe.",
      category: "Application",
      objectifs:
        "Optimiser la gestion des canaux, améliorer les intégrations d'applications tierces et simplifier la recherche.",
      technologies: ["react", "nodejs", "graphql"],
      result: "https://slack.com/",
    },
    {
      image:
        "https://raw.githubusercontent.com/AurelienAllenic/portfolio-next/refs/heads/develop/public/storage/images/spotify.webp",
      title: "Spotify Music Streaming API Integration",
      description:
        "Création d'une API permettant d'intégrer Spotify dans des applications tierces et des sites web.",
      category: "API",
      objectifs:
        "Développer une API RESTful permettant l'intégration facile de Spotify dans d'autres plateformes.",
      technologies: ["nodejs", "express", "graphql"],
      result: "https://open.spotify.com/",
    },
  ];

  // Supprimer les projets existants
  await prisma.project.deleteMany({});

  // Créer de nouveaux projets
  const createdProjects = await prisma.project.createMany({
    data: projects,
  });

  console.log("Projets ajoutés :", createdProjects);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
