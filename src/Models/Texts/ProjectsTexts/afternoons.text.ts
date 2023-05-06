import { IProject } from "src/Interfaces";
import { tagsMobile } from "src/Models/Tags";

export const afternoonsText: IProject = {
  id: 4,
  path: "GubausAfternoons",

  title: "Gubau's Afternoons",
  year: 2020,

  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  pointOfInterest: { x: 20, y: 60 },

  textColor: "#000",
  width: 200,
  backgroundColor: "#b49cff",
  pathToImg: "/GubauAfternoons/0.webp",
  tags: ["HTML", "SCSS", "JQUERY"],
  invisibleTags: [
    ...tagsMobile,
    "frontend",
    "Gubau",
    "GubauAfternoons",
    "Gubau'sAfternoons",
    "Gubau's",
    "Afternoons",
    "Portfolio",
    "black",
    "2020",
  ],
  description: {
    en: "Gubau's Afternoons shows where I spent my afternoons when I was in high school. I used it as a portfolio for two years and it's one of the pages that I have worked on the most. You can see in detail many projects that I have not shown here.",
    es: "Gubau's Afternoons muestra en lo que gastaba mis tardes cuando iba al instituto. La usé de portfolio durante dos años y es una de las páginas que más he trabajado. Se pueden ver a detalle muchos proyectos que no he mostrado aquí.",
    ca: "Gubau's Afternoons mostra on gastava les tardes quan anava a l'institut. La vaig fer servir de portafoli durant dos anys i és una de les pàgines que més he treballat. Es poden veure detalladament molts projectes que no he mostrat aquí.",
    de: "Gubau's Afternoons zeigt, wo ich meine Nachmittage verbracht habe, als ich in der Schule war. Ich habe es zwei Jahre lang als Portfolio benutzt und es ist eine der Seiten, an denen ich am meisten gearbeitet habe. Sie können im Detail viele Projekte sehen, die ich hier nicht gezeigt habe.",
  },
  githubLink: "https://github.com/PolGubau/gubauafternoons.com",

  link: "https://gubauafternoons.com/",
  relevant: true,
};
