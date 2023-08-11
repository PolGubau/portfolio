import { IProject } from "src/Interfaces";
import { tagsDatabase, tagsMobile } from "src/Models/Tags";

export const unbrushedText: IProject = {
  id: 3,
  path: "Unbrushed",

  title: "Unbrushed",
  year: 2021,

  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },

  pointOfInterest: { x: -30, y: 0 },

  textColor: "#000",
  width: 590,
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
    en: "Unbrushed",
    es: "Unbrushed",
    ca: "Unbrushed",
    de: "Unbrushed",
  },
  description: {
    en: "A dynamic portfolio for Unbrushed, where you can show the hairdressing sessions and their collaborations. The whole website is controlled from a different page where the database is modified. Both the frontend and the backend were created by me.",
    es: "Un portafolio dinámico para Unbrushed, donde mostrar las sesiones de peluquería y sus colaboraciones. Toda la web se controla desde una página distinta donde se modifica la base de datos. Se creó tanto el frontend como el backend.",
    ca: "Un portafoli dinàmic per a Unbrushed, on mostrar les sessions de perruqueria i les seves col·laboracions. Tot el web es controla des d'una pàgina diferent on es modifica la base de dades. Es va crear tant el frontend com el backend.",
    de: "Ein dynamisches Portfolio für Unbrushed, in dem Sie die Friseursitzungen und ihre Zusammenarbeit zeigen können. Die gesamte Website wird von einer anderen Seite aus gesteuert, auf der die Datenbank geändert wird. Sowohl das Frontend als auch das Backend wurden von mir erstellt.",
  },
  githubLink: "https://github.com/PolGubau/Unbrushed",

  link: "https://pol-uab.alwaysdata.net/Otros/Unbrushed_PHP/Code/",
  relevant: true,
};
