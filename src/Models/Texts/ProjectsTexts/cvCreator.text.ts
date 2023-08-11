import { IProject } from "src/Interfaces";
import { tagsDatabase, tagsLogin, tagsMobile } from "src/Models/Tags";

export const cvCreatorText: IProject = {
  id: 9,
  title: "Cv Creator",
  path: "CvCreator",
  year: 2022,
  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  madeFor: {
    en: "Autonomous University of Barcelona",
    es: "Universidad autónoma de Barcelona",
    ca: "Universitat autònoma de Barcelona",
    de: "Autonome Universität Barcelona",
  },
  pointOfInterest: { x: 0, y: 20 },

  textColor: "#000",
  width: 500,
  backgroundColor: "#abffe2",
  pathToImg: "/cvCreator/0.webp",
  tags: ["PHP", "MYSQL", "PDO", "CRUD", "DDBB"],
  invisibleTags: [
    ...tagsDatabase,
    ...tagsMobile,
    ...tagsLogin,
    "App",
    "Aplicación",
    "Mobile",
    "fullstack",
    "Red Social",
    "2022",
  ],

  description: {
    en: "Cv Creator is a tool to generate resumes in a web way, they are downloadable and each user can have infinite resumes.  ",
    es: "Cv Creator es una herramienta para generar currículums de manera web, son descargables y cada usuario puede tener infinitos. ",
    ca: "Cv Creator és una eina per generar currículums de manera web, es poden descarregar i cada usuari pot tenir infinitat de currículums.",
    de: "Cv Creator ist ein Tool zum Erstellen von Lebensläufen auf Webbasis. Sie sind herunterladbar und jeder Benutzer kann unendlich viele haben.",
  },
  githubLink: "https://github.com/PolGubau/uab-2022-Practica3",

  link: "https://pol-uab.alwaysdata.net/UAB/Web/3er/uab-2022-Practica3/",
  relevant: true,
};
