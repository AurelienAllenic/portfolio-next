This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# RenderFlow

RenderFlow est un projet de portfolio fullstack réalisé en nextJs qui permet de visualiser et de visiter des projets ainsi que de contacter les créateurs.

## Après le clone

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

## Peupler la bdd

Afin d'ajouter de manipuler les données, nous avons mis en place une action qui permet d'ajouter des projets:

- add projects : `node --loader ts-node/esm prisma/addProjects.ts`

## Strcuture du projet

Le projet dispose de deux pages :

- Page d'accueil (landing)
- Listing des projets (projects)
- Page d'un projet (projet)

Le projet dispose de trois composants réutilisables principaux:

- Header
- FooterContact
