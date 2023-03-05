import { IProject } from "src/Interfaces";
import { tagsMobile } from "src/utils/Tags";

export const stickiesText: IProject = {
  id: 10,
  title: "Stickies",
  path: "Stickies",
  year: 2022,
  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },
  pointOfInterest: { x: -10, y: 20 },

  textColor: "#000",
  width: 320,
  backgroundColor: "#ffe9ab",
  pathToImg: "/Stickies/0.webp",
  tags: ["React", "React Icons", "Styled Components", "TypeScript"],
  invisibleTags: [
    ...tagsMobile,
    "App",
    "Aplicación",
    "Mobile",
    "scrud",
    "Notes",
    "TodoList",
    "todo",
    "2022",
  ],

  description: {
    English:
      "Stickies is an app to take notes and manage them. You can make private notes and classify them into categories.",
    Spanish:
      "Stickies es una app para tomar notas y manejarlas. Puedes hacer notas privadas y clasificarlas en categorías. ",
    Catalan:
      "Stickies és una app per prendre notes i manejar-les. Es poden fer notes privades i classificar-les en categories.",
  },
  githubLink: "https://github.com/PolGubau/stickies",
  link: "https://mystickies.vercel.app/",
};
