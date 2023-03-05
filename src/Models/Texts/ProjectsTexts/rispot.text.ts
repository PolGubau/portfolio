import { IProject } from "src/Interfaces";
import { tagsDatabase, tagsMobile } from "src/utils/Tags";

export const rispotText: IProject = {
  id: 5,
  path: "Rispot",

  title: "Rispot",
  year: 2022,

  category: {
    English: "web",
    Spanish: "web",
    Catalan: "web",
  },

  pointOfInterest: { x: -100, y: 20 },

  textColor: "#000",
  width: 300,
  backgroundColor: "#abfeff",
  pathToImg: "/Rispot/0.webp",
  tags: ["PHP", "SQL", "JQUERY", "EXCEL"],
  invisibleTags: [
    ...tagsDatabase,
    ...tagsMobile,
    "fullstack",
    "frontend",
    "backend",
    "Rispot",
    "graphic",
    "stadistics",
    "excel",
    "pau",
    "backstage",
    "2022",
  ],

  madeFor: {
    English: "Rispot Reseller",
    Spanish: "Rispot Reseller",
    Catalan: "Rispot Reseller",
  },
  description: {
    English:
      "Rispot is a small product sales company. I have developed the entire internal database system and the 'backstage' of the website, where you can view the data of all sales and see their statistics.",
    Spanish:
      "Rispot es una pequeña empresa de venta de productos. He desarrollado todo el sistema de base de datos interno y 'Backstage' de la página web, donde se puede visualizar los datos de todas las ventas y ver estadísticas de estas.",
    Catalan:
      "Rispot és una petita empresa de venda de productes. He desenvolupat tot el sistema de la base de dades interna i 'Backstage' de la pàgina web, on es poden visualitzar les dades de totes les vendes i veure estadístiques d'aquestes.",
  },
  githubLink: "https://github.com/PolGubau/Rispot",

  link: "https://www.amazon.es/s?i=merchant-items&me=A1O24E5ASY81J5&rh=p_4%3ARISPOT",
};
