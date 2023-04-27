import { IProject } from "src/Interfaces";
import { tagsDatabase, tagsMobile } from "src/Models/Tags";

export const uabMediaText: IProject = {
  id: 7,
  path: "UABmedia",

  title: "UAB Mèdia",
  year: 2022,
  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },
  pointOfInterest: { x: 30, y: 20 },

  textColor: "#000",
  width: 290,
  backgroundColor: "#faabff",
  pathToImg: "/UABMedia/0.webp",
  tags: ["PHP", "WebTV", "BOOTSTRAP", "JQUERY", "AWS"],
  invisibleTags: [
    ...tagsDatabase,
    ...tagsMobile,
    "UAB",
    "Autonoma",
    "amazon",
    "frontend",
    "comunicacio",
    "television",
    "radio",
    "Universidad",
    "2022",
  ],
  madeFor: {
    English: "Autonomous University of Barcelona",
    Spanish: "Universidad autónoma de Barcelona",
    Catalan: "Universitat autònoma de Barcelona",
  },
  description: {
    English:
      "Web and mobile application for viewing UAB Mèdia content. On this page you can see the news, television programs, radio and interviews in real time and on demand. You can also listen to the college radio.",
    Spanish:
      "Aplicación web y móvil para la visualización de contenidos de UAB Mèdia. En esta página se pueden ver las notícias, programas de televisión, de radio y entrevistes, tanto en tiempo real como a la carta. También escuchar la radio de la universidad.",
    Catalan:
      "Aplicació web i mòbil per a la visualització de continguts de la UAB Mèdia. En aquesta pàgina es poden veure les notícies, programes de televisió, de ràdio i entrevistes tant a temps real com a la carta. També escoltar la ràdio de la universitat.",
  },
  githubLink: "https://github.com/orgs/UABmedia/repositories",
  link: "https://uab.media/",
  relevant: true,
};
