import { IProject } from "src/Interfaces";
import { tagsDesign, tagsMobile } from "src/Models/Tags";

export const skatlaText: IProject = {
  id: 2,
  path: "Skatla",

  title: "Škatla",
  year: 2021,
  category: {
    en: "design",
    es: "diseño",
    ca: "disseny",
    de: "design",
  },
  pointOfInterest: { x: 70, y: 70 },

  textColor: "#000000",
  width: 450,
  backgroundColor: "#ffdbab",
  pathToImg: "/Skatla/0.webp",
  tags: ["Indesign", "Illustrator", "Photoshop"],
  invisibleTags: [
    ...tagsMobile,
    ...tagsDesign,
    "Autonoma",
    "uab",
    "universidad",
    "diseño",
    "skatla",
    "design",
  ],
  madeFor: {
    en: "Škatla",
    es: "Škatla",
    ca: "Škatla",
    de: "Škatla",
  },
  description: {
    en: "Škatla is a university project where we created an ecological packaging company, a lot of mockups and designs for social networks were made. Škatla creates boxes and merchandising at the customer's request. ",
    es: "Škatla es un proyecto universitario donde creamos una empresa de packagings ecologicos, se realizaron cantidad de mockups y diseños para redes sociales. Škatla crea cajas y merchandising a demanda del cliente. ",
    ca: "Škatla és un projecte universitari on vam crear una empresa de Packagings ecològics, es van realitzar quantitat de mockups i dissenys per a xarxes socials. Škatla crea caixes i marxandatge a demanda del client.",
    de: "Škatla ist ein Universitätsprojekt, bei dem wir ein Unternehmen für ökologische Verpackungen gegründet haben. Es wurden viele Mockups und Designs für soziale Netzwerke erstellt. Škatla erstellt Boxen und Merchandising auf Kundenwunsch.",
  },
  figmaLink: "",

  link: "https://www.instagram.com/skatlapack/",
  relevant: true,
};
