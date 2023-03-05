import { IProject } from "src/Interfaces";
import { tagsMobile } from "src/utils/Tags";

export const habitsText: IProject = {
  id: 11,
  title: "Habits",
  path: "Habits",
  year: 2023,
  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },
  pointOfInterest: { x: 50, y: 70 },

  textColor: "#000",
  width: 220,
  backgroundColor: "#FFC8C8",
  pathToImg: "/Habits/0.webp",
  tags: ["React", "Ant Design", "Admin Panel", "TypeScript"],
  invisibleTags: [
    ...tagsMobile,
    "App",
    "Aplicación",
    "Mobile",
    "SCRUD",
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
  githubLink: "https://github.com/PolGubau/habits",
  link: "https://habitss.vercel.app/",
};
