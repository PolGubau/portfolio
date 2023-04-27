import { IProject } from "src/Interfaces";
import { tagsDatabase, tagsJS, tagsLogin, tagsMobile } from "src/Models/Tags";

export const askaquestText: IProject = {
  id: 8,
  title: "AskaQuest",
  path: "AskaQuest",
  year: 2022,
  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },
  pointOfInterest: { x: -70, y: 10 },

  textColor: "#000",
  width: 270,
  backgroundColor: "#abd7ff",
  pathToImg: "/AskaQuest/0.webp",
  tags: ["Nextjs", "PostgreSQL", "TypeScript", "Vercel", "SWR"],
  invisibleTags: [
    ...tagsDatabase,
    ...tagsMobile,
    ...tagsLogin,
    ...tagsJS,
    "App",
    "Aplicación",
    "TS",
    "React",
    "Mobile",
    "fullstack",
    "localStorage",
    "Red Social",
    "2022",
  ],

  description: {
    English:
      "Dynamic web application made with NextJS and using a PostgreSQL database, consists of a social network of questions where users can create questions and answer them. The user can follow other users and view their questions, as well as add them as favorites. A login system, following and encryption in the Backend were developed.  ",
    Spanish:
      "Aplicación web dinámica hecha con NextJS y usando una base de datos PostgreSQL, consiste en una red social de preguntas donde los usuarios pueden crear preguntas y responderlas. El usuario puede seguir a otros usuarios y ver sus preguntas, así como agregarlas como favoritas. Un sistema de login, following y encriptación en el Backend se programó.",
    Catalan:
      "Aplicació web dinàmica feta amb NextJS i usant una base de dades PostgreSQL, consisteix en una xarxa social de preguntes on els usuaris poden crear preguntes i respondre-les. L'usuari pot seguir altres usuaris i veure les seves preguntes, així com agregar-les com a favorites. Un sistema de login, seguiment i encriptació al Backend va ser desenvolupat. ",
  },
  githubLink: "https://github.com/PolGubau/AskaQuest",

  link: "https://askaquest.vercel.app/",
};
