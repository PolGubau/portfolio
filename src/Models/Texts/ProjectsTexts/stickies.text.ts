import { IProject } from "src/Interfaces";
import { tagsMobile } from "src/Models/Tags";

export const stickiesText: IProject = {
  id: 10,
  title: "Stickies",
  path: "Stickies",
  year: 2022,
  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  pointOfInterest: { x: -10, y: 20 },

  textColor: "#000",
  width: 340,
  backgroundColor: "#FFABD3",
  pathToImg: "/Stickies/0.webp",
  tags: ["React", "React Icons", "Styled Components", "TypeScript"],
  invisibleTags: [
    ...tagsMobile,
    "App",
    "Aplicación",
    "Styled Components",
    "Mobile",
    "scrud",
    "Notes",
    "TodoList",
    "todo",
    "2022",
  ],

  description: {
    en: "Stickies is an app to take notes and manage them. You can make private notes and classify them into categories.",
    es: "Stickies es una app para tomar notas y manejarlas. Puedes hacer notas privadas y clasificarlas en categorías. ",
    ca: "Stickies és una app per prendre notes i manejar-les. Es poden fer notes privades i classificar-les en categories.",
    de: "Stickies ist eine App zum Notizen machen und verwalten. Sie können private Notizen machen und in Kategorien einteilen.",
  },
  githubLink: "https://github.com/PolGubau/stickies",
  link: "https://mystickies.vercel.app/",
  relevant: true,
};
