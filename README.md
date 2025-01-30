This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# RenderFlow

RenderFlow est un projet de portfolio fullstack réalisé en nextJs qui permet de visualiser et de visiter des projets ainsi que de contacter les créateurs.

# Après le clone

Après avoir cloné le repository, assurez-vous d'être bien sur la branche main puis :
Ajoutez un fichier .env avec cette ligne :

```
DATABASE_URL="votre_database_url"
```

```
npm install
```

```
npx prisma migrate dev
```

```
npm run dev
```

# Peupler la bdd

Afin d'ajouter de manipuler les données, nous avons mis en place une action qui permet d'ajouter des projets:

- add projects : `node --loader ts-node/esm prisma/addProjects.ts`

# Strcuture du projet

Le projet dispose de deux pages :

- Page d'accueil (landing)
- Listing des projets (projects)
- Page d'un projet (projet)

Le projet dispose de deux composants réutilisables principaux:

- Header
- FooterContact

# Tests

Pour exécuter les test :
`npm run test`

# Rapports de performance

## Version Desktop

![Rapport de la page home en desktop](/public/images/rapports/home_dektop.PNG)
![Rapport de la page projects en desktop](/public/images/rapports/projects_desktop.PNG)
![Rapport de la page one project en desktop](/public/images/rapports/one_project_desktop.PNG)

## Version Mobile

![Rapport de la page home en mobile](/public/images/rapports/home_mobile.PNG)
![Rapport de la page projects en mobile](/public/images/rapports/projects_mobile.PNG)
![Rapport de la page one project en mobile](/public/images/rapports/one_project_mobile.PNG)

# Lien avec la bdd

![Capture de la bdd pour les projets](/public/images/rapports/Capture_projects.PNG)
![Capture de la bdd pour les messages](/public/images/rapports/Capture_messsage.PNG)
