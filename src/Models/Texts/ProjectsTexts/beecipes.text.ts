import { IProject } from "src/Interfaces";

const beecipesText: IProject = {
  id: 13,
  path: "Beecipes",
  title: "Beecipes",
  year: 2023,

  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },
  pointOfInterest: { x: -60, y: -0 },
  textColor: "#000",
  width: 370,
  backgroundColor: "#FBFF84",
  pathToImg: "/Beecipes/0.webp",
  tags: ["React", "Recoil", "UI", "Spoonacular API", "JOBarcelona"],
  madeFor: {
    English: "JOBarcelona Hackathon 2023",
    Spanish: "JOBarcelona Hackathon 2023",
    Catalan: "JOBarcelona Hackathon 2023",
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
    "ui",
  ],
  description: {
    English:
      "My Participation in JOBarcelona 2023 hackathon. Beecipes is a recipe app that uses the Spoonacular API to fetch recipes and display them in a user-friendly way.",
    Spanish:
      "Mi participación en el hackathon JOBarcelona 2023. Beecipes es una aplicación de recetas que utiliza la API de Spoonacular para obtener recetas y mostrarlas de una manera fácil de usar.",
    Catalan:
      "La meva participació al hackathon JOBarcelona 2023. Beecipes és una aplicació de receptes que utilitza l'API Spoonacular per obtenir receptes i mostrar-les d'una manera fàcil d'utilitzar.",
  },
  githubLink: "https://github.com/PolGubau/hackathon-JOBarcelona-recipes-2023",
  link: "https://beecipes.vercel.app",
  relevant: true,
};

export default beecipesText;
