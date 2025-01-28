import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      image: 'https://aurelienallenic.fr/assets/booki-CA3PqGpU.webp',
      title: 'Booki, projet de site de réservation hôtelier réalisé en HTML/CSS',
      description: 'Un projet de site web de réservation d’hôtels réalisé avec HTML et CSS.',
      category: 'Web',
      objectifs: 'Créer un site de réservation simple pour les hôtels.',
      technologies: ['html', 'css'],
      result: 'Projet terminé avec succès, disponible en ligne.'
    },
    {
      image: 'https://aurelienallenic.fr/assets/ohmyfood-Dqbwe2yt.jpg',
      title: 'Ohmyfood, site gastronomique réalisé en HTML, CSS et SCSS',
      description: 'Un site web gastronomique utilisant HTML, CSS et SCSS pour une meilleure présentation.',
      category: 'Web',
      objectifs: 'Mettre en place un site de recettes gastronomiques.',
      technologies: ['html', 'css', 'scss'],
      result: 'Site déployé, fonctionnement optimal.'
    },
    {
      image: 'https://aurelienallenic.fr/assets/lapanthere-AMUkuVkG.jpg',
      title: "Lapanthere, site de web design basée à Lyon, projet d'amélioration SEO d'un site existant",
      description: 'Amélioration du SEO d’un site web de design basé à Lyon.',
      category: 'SEO',
      objectifs: 'Améliorer la visibilité d’un site web dans les résultats des moteurs de recherche.',
      technologies: ['seo'],
      result: 'Amélioration du positionnement du site.'
    },
    {
      image: 'https://aurelienallenic.fr/assets/kanap-CEFHtTxJ.webp',
      title: 'Kanap, site e-commerce réalisé en JavaScript, HTML, CSS',
      description: 'Développement d’un site e-commerce avec JavaScript, HTML et CSS.',
      category: 'E-commerce',
      objectifs: 'Créer un site de vente en ligne de canapés.',
      technologies: ['html', 'css', 'javascript'],
      result: 'Le site est fonctionnel, mais en attente de lancement.'
    },
    {
      image: 'http://aurelienallenic.fr/assets/piiquante-CxSmnMkl.webp',
      title: 'Hot-takes, API de like et partage de sauces pimentées réalisée en NodeJs et en JavaScript',
      description: 'Création d’une API permettant de liker et partager des sauces pimentées.',
      category: 'API',
      objectifs: 'Construire une API RESTful en utilisant NodeJs.',
      technologies: ['javascript', 'nodejs'],
      result: 'API fonctionnelle mais non déployée.'
    },
    {
      image: 'http://aurelienallenic.fr/assets/piiquante-CxSmnMkl.webp',
      title: "Groupomania, réseau social d'entreprise réalisé avec ReactJs et NodeJs",
      description: 'Réseau social d’entreprise permettant aux employés de communiquer.',
      category: 'Réseau social',
      objectifs: 'Créer une plateforme de communication interne pour les entreprises.',
      technologies: ['reactjs', 'nodejs'],
      result: 'Application fonctionnelle en développement.'
    }
  ];

  const createdProjects = await prisma.project.createMany({
    data: projects,
  });

  console.log('Projets ajoutés :', createdProjects);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
