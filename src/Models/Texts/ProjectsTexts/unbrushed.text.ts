import { IProject } from "src/Interfaces";
import { tagsDatabase, tagsMobile } from "src/utils/Tags";

export const unbrushedText: IProject = {
  id: 3,
  path: "Unbrushed",

  title: "Unbrushed",
  year: 2021,

  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },

  pointOfInterest: { x: -120, y: -80 },

  textColor: "#000",
  width: 500,
  backgroundColor: "#ffabd5",
  pathToImg: "/Unbrushed/0.webp",
  tags: ["PHP", "SQL", "JavaScript"],
  invisibleTags: [
    ...tagsMobile,
    ...tagsDatabase,
    "Helena",
    "Unbrushed",
    "2021",
    "fullstack",
    "frontend",
    "peluquería",
    "peluqueria",
    "MariaBD",
    "MySQL",
    "MPA",
    "MVC",
    "PHP",
    "SQL",
    "JavaScript",
    "JQUERY",
    "HTML",
    "CSS",
    "SCSS",
  ],
  madeFor: {
    English: "Unbrushed",
    Spanish: "Unbrushed",
    Catalan: "Unbrushed",
  },
  description: {
    English:
      "A dynamic portfolio for Unbrushed, where you can show the hairdressing sessions and their collaborations. The whole website is controlled from a different page where the database is modified. Both the frontend and the backend were created by me.",
    Spanish:
      "Un portafolio dinámico para Unbrushed, donde mostrar las sesiones de peluquería y sus colaboraciones. Toda la web se controla desde una página distinta donde se modifica la base de datos. Se creó tanto el frontend como el backend.",
    Catalan:
      "Un portafoli dinàmic per a Unbrushed, on mostrar les sessions de perruqueria i les seves col·laboracions. Tot el web es controla des d'una pàgina diferent on es modifica la base de dades. Es va crear tant el frontend com el backend.",
  },
  githubLink: "https://github.com/PolGubau/Unbrushed",

  link: "https://pol-uab.alwaysdata.net/Otros/Unbrushed_PHP/Code/",
};
