import { IProject } from "src/Interfaces";

const beecipesText: IProject = {
  id: 13,
  path: "Beecipes",
  title: "Beecipes",
  year: 2023,

  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  pointOfInterest: { x: -60, y: -0 },
  textColor: "#000",
  width: 370,
  backgroundColor: "#FBFF84",
  pathToImg: "/Beecipes/0.webp",
  tags: ["React", "Recoil", "UI", "Spoonacular API", "JOBarcelona"],
  madeFor: {
    en: "JOBarcelona Hackathon 2023",
    es: "JOBarcelona Hackathon 2023",
    ca: "JOBarcelona Hackathon 2023",
    de: "JOBarcelona Hackathon 2023",
  },
  invisibleTags: [
    "frontend",
    "recipes",
    "food",
    "bees",
    "honey",
    "api",
    "web",
    "react",
    "Styled Components",

    "ui",
  ],
  description: {
    en: "My Participation in JOBarcelona 2023 hackathon. Beecipes is a recipe app that uses the Spoonacular API to fetch recipes and display them in a user-friendly way.",
    es: "Mi participación en el hackathon JOBarcelona 2023. Beecipes es una aplicación de recetas que utiliza la API de Spoonacular para obtener recetas y mostrarlas de una manera fácil de usar.",
    ca: "La meva participació al hackathon JOBarcelona 2023. Beecipes és una aplicació de receptes que utilitza l'API Spoonacular per obtenir receptes i mostrar-les d'una manera fàcil d'utilitzar.",
    de: "Meine Teilnahme am JOBarcelona 2023 Hackathon. Beecipes ist eine Rezept-App, die die Spoonacular API verwendet, um Rezepte abzurufen und sie benutzerfreundlich anzuzeigen.",
  },
  githubLink: "https://github.com/PolGubau/hackathon-JOBarcelona-recipes-2023",
  link: "https://beecipes.vercel.app",
  relevant: true,
};

export default beecipesText;
