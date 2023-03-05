import { IProject } from "src/Interfaces";
import { tagsDesign } from "src/utils/Tags";

export const nuweText: IProject = {
  id: 6,
  path: "NUWE",

  title: "NUWE",
  year: 2022,

  category: {
    English: "design",
    Spanish: "diseño",
    Catalan: "disseny",
  },
  pointOfInterest: { x: 20, y: 20 },

  textColor: "#000",
  width: 300,
  backgroundColor: "#c1ffab",
  pathToImg: "/NUWE/0.webp",
  tags: ["Figma", "Illustrator", "Photoshop"],
  invisibleTags: [...tagsDesign],
  madeFor: {
    English: "NUWE",
    Spanish: "NUWE",
    Catalan: "NUWE",
  },
  description: {
    English:
      "NUWE is a gamification company in hiring developers. I work here as a graphic designer and I carry the creatives of social networks, rollups... I visually capture the ideas of my jobmates.",
    Spanish:
      "NUWE es una empresa de gamificación en contratar desarrolladores. Trabajo aquí como diseñador gráfico y llevo las creatividades de redes sociales, rollups... Plasmar visualmente las ideas de mis compañeros.",
    Catalan:
      "NUWE és una empresa de gamificació en contractar desenvolupadors. Treballo aquí com a dissenyador gràfic i porto les creativitats de xarxes socials, rollups... Plasmar visualment les idees dels meus companys.",
  },
  figmaLink: "",

  link: "https://nuwe.io/",
};
