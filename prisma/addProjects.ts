import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      image: 'https://www.apple.com/v/home/v/images/og/apple_logo_1200x630.jpg',
      title: 'Apple Website Redesign',
      description: 'Redesign complet du site web d\'Apple pour améliorer l\'expérience utilisateur et l\'accessibilité.',
      category: 'Web',
      objectifs: 'Optimiser le site Apple pour une navigation fluide et une meilleure réactivité sur mobile.',
      technologies: ['html', 'css', 'javascript', 'react', 'nodejs'],
      result: 'Le site a été modernisé, avec une meilleure performance et une interface utilisateur repensée.'
    },
    {
      image: 'https://www.dji.com/images/logo.png',
      title: 'DJI Drones E-commerce',
      description: 'Développement d\'un site e-commerce pour vendre les drones DJI et accessoires.',
      category: 'E-commerce',
      objectifs: 'Créer une plateforme de vente en ligne pour les drones et accessoires, avec des options de personnalisation.',
      technologies: ['html', 'css', 'javascript', 'react', 'nodejs'],
      result: 'Le site est devenu l\'un des plus grands sites de vente de drones, avec un processus de commande fluide.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png',
      title: 'Google Search Engine Optimization',
      description: 'Amélioration de l\'algorithme de recherche de Google pour mieux répondre aux besoins des utilisateurs.',
      category: 'SEO',
      objectifs: 'Optimiser le moteur de recherche pour offrir des résultats plus pertinents et améliorer l\'expérience utilisateur.',
      technologies: ['seo', 'python', 'google-cloud'],
      result: 'Les mises à jour de l\'algorithme ont permis d\'améliorer la qualité des résultats de recherche.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Amazon_logo.png',
      title: 'Amazon Prime Video Redesign',
      description: 'Refonte de l\'interface utilisateur d\'Amazon Prime Video pour une meilleure expérience de streaming.',
      category: 'Web',
      objectifs: 'Optimiser la navigation, améliorer la vitesse de chargement et rendre la recherche de contenu plus intuitive.',
      technologies: ['html', 'css', 'javascript', 'react', 'nodejs'],
      result: 'La refonte a permis d\'augmenter les abonnements et de réduire les taux de rebond.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Slack_Logo.png',
      title: 'Slack Communication Platform Enhancement',
      description: 'Amélioration de la plateforme Slack pour faciliter la communication et la collaboration en équipe.',
      category: 'Application',
      objectifs: 'Optimiser la gestion des canaux, améliorer les intégrations d\'applications tierces et simplifier la recherche.',
      technologies: ['react', 'nodejs', 'graphql'],
      result: 'La mise à jour a permis une adoption plus large en entreprise et a augmenté la productivité des équipes.'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Spotify_Logo_with_text.svg',
      title: 'Spotify Music Streaming API Integration',
      description: 'Création d\'une API permettant d\'intégrer Spotify dans des applications tierces et des sites web.',
      category: 'API',
      objectifs: 'Développer une API RESTful permettant l\'intégration facile de Spotify dans d\'autres plateformes.',
      technologies: ['nodejs', 'express', 'graphql'],
      result: 'L\'API a permis d\'élargir l\'écosystème de Spotify et d\'attirer de nouveaux utilisateurs.'
    }
  ];

  // Supprimer les projets existants
  await prisma.project.deleteMany({});

  // Créer de nouveaux projets
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
