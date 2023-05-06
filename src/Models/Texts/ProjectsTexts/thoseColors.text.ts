import { IProject } from "src/Interfaces";

export const thoseColorsText: IProject = {
  id: 1,
  path: "ThoseColors",

  title: "Those Colors",
  year: 2021,
  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  pointOfInterest: { x: -30, y: 10 },

  textColor: "#000000",
  width: 300,
  backgroundColor: "#feffab",
  pathToImg: "/ThoseColors/0.webp",
  tags: ["PHP", "SASS"],
  invisibleTags: ["color", "gradient", "palette", "generator"],
  description: {
    en: "This is a website I made to practice checking the hexadecimal codes of colors and modifying them. It is written with vanilla PHP and can create color palettes with the color and amount you tell it.",
    es: "Esta es una web que hice para practicar el control de los códigos hexadecimales de los colores y modificarlos. Está escrita con PHP vanilla y puede crear paletas de colores con el color y la cantidad que le digas. ",
    ca: "Aquesta és una web que vaig fer per practicar el control dels codis hexadecimals dels colors i modificar-los. Està escrita amb PHP vanilla i pot crear paletes de colors amb el color i la quantitat que li diguis.",
    de: "Dies ist eine Website, die ich erstellt habe, um die hexadezimalen Codes von Farben zu üben und zu ändern. Es ist mit Vanille-PHP geschrieben und kann Farbpaletten mit der Farbe und Menge erstellen, die Sie ihm sagen.",
  },
  githubLink: "https://github.com/PolGubau/ThoseColors",

  link: "https://pol-uab.alwaysdata.net/Otros/ThoseColors/index.php",
  relevant: false,
};
