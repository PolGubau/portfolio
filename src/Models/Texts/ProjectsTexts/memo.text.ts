import { IProject } from "src/Interfaces";

export const memoText: IProject = {
  id: 0,
  path: "Memo",

  title: "Memo",
  year: 2021,
  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  pointOfInterest: { x: 20, y: 50 },

  textColor: "#000000",
  width: 160,
  backgroundColor: "#e6abff",
  pathToImg: "/Memo/0.webp",
  tags: ["Javascript", "HTML", "CSS"],
  invisibleTags: ["localStorage", "memory", "notas", "notes", "todo"],

  description: {
    en: "This is a website that I completed with Javascript to practice using LocalStorage. It was forked from GitHub and I added features like changing the color of the Memos.",
    es: "Esta es una web que completé con Javascript para practicar el uso del LocalStorage. Fue duplicada de GitHub y añadí funcionalidades como el cambio de color de los Memos.",
    ca: "Aquesta és una web que vaig completar amb Javascript per practicar l'ús del LocalStorage. Va ser duplicada de GitHub i vaig afegir funcionalitats com el canvi de color dels Memos.",
    de: "Dies ist eine Website, die ich mit Javascript vervollständigt habe, um das LocalStorage zu üben. Es wurde von GitHub geforkt und ich habe Funktionen wie das Ändern der Farbe der Memos hinzugefügt.",
  },
  link: "https://pol-uab.alwaysdata.net/Otros/memo/",
  relevant: false,
};
