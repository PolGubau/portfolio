import { IProject } from "src/Interfaces";
import { tagsDesign } from "src/Models/Tags";

export const nuweText: IProject = {
  id: 6,
  path: "NUWE",

  title: "NUWE",
  year: 2022,

  category: {
    en: "design",
    es: "diseño",
    ca: "disseny",
    de: "design",
  },
  pointOfInterest: { x: 70, y: 70 },

  textColor: "#000",
  width: 400,
  backgroundColor: "#c1ffab",
  pathToImg: "/NUWE/0.webp",
  tags: ["Figma", "Illustrator", "Photoshop"],
  invisibleTags: [...tagsDesign],
  madeFor: {
    en: "NUWE",
    es: "NUWE",
    ca: "NUWE",
    de: "NUWE",
  },
  description: {
    en: "NUWE is a gamification company in hiring developers. I work here as a graphic designer and I carry the creatives of social networks, rollups... I visually capture the ideas of my jobmates.",
    es: "NUWE es una empresa de gamificación en contratar desarrolladores. Trabajo aquí como diseñador gráfico y llevo las creatividades de redes sociales, rollups... Plasmar visualmente las ideas de mis compañeros.",
    ca: "NUWE és una empresa de gamificació en contractar desenvolupadors. Treballo aquí com a dissenyador gràfic i porto les creativitats de xarxes socials, rollups... Plasmar visualment les idees dels meus companys.",
    de: "NUWE ist ein Gamification-Unternehmen bei der Einstellung von Entwicklern. Ich arbeite hier als Grafikdesigner und trage die Kreativen der sozialen Netzwerke, Rollups... Ich fange die Ideen meiner Arbeitskollegen visuell ein.",
  },
  figmaLink: "",

  link: "https://nuwe.io/",
  relevant: true,
};
