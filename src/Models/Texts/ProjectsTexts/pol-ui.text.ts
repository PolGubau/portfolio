import { IProject } from "src/Interfaces";

const polUi: IProject = {
  id: 12,
  path: "pol-ui",
  title: "Pol-UI",
  year: 2023,

  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  pointOfInterest: { x: 70, y: 20 },

  textColor: "#000",
  width: 480,
  backgroundColor: "#b49cff",
  pathToImg: "/polui/0.webp",
  tags: ["React", "NPM", "UI", "Components", "JSX"],
  invisibleTags: [
    "frontend",
    "Inputs",
    "UX",
    "Beautiful",
    "Instalable",
    "Buttons",
    "Styled-Components",
    "TypeScript",
    "Reusable",
    "Easy",
  ],
  description: {
    en: "Reusable React components that are easy to use just by installing an NPM package. Created with styled-components, React, and TypeScript, the components are fully customizable and ready to integrate on any website. It saves time and effort using the pre-built elements for common aspects of user interface such as buttons, inputs and more.",
    es: "Componentes de React reutilizables faciles de usar con solo instalar un paquete NPM. Creados con styled-componentes, React y TypeScript, los componentes son totalmente personalizables y están listos para integrarse en cualquier sitio web. Ahorra tiempo y esfuerzo utilizando los elementos pre-construidos para aspectos comunes de interfaz de usuario como botones, inputs y más.",
    ca: "Components de React reutilitzables facils d'usar amb només instal·lar un paquet NPM. Creats amb styled-components, React i TypeScript, els components són totalment personalitzables i estan llestos per integrar-se en qualsevol lloc web. Estalvia temps i esforç utilitzant els elements pre-construïts per a aspectes comuns d'interfície d'usuari com botons, inputs i més.",
    de: "Wiederverwendbare React-Komponenten, die einfach zu verwenden sind, indem Sie nur ein NPM-Paket installieren. Erstellt mit styled-components, React und TypeScript, sind die Komponenten vollständig anpassbar und bereit, in jede Website integriert zu werden. Sparen Sie Zeit und Mühe, indem Sie die vorgefertigten Elemente für gängige Aspekte der Benutzeroberfläche wie Schaltflächen, Eingaben und mehr verwenden.",
  },
  githubLink: "https://github.com/PolGubau/gubauafternoons.com",
  npmComand: "npm i pol-ui",
  npmLink: "https://www.npmjs.com/package/pol-ui",
  link: "https://github.com/PolGubau/pol-ui",
  relevant: true,
};

export default polUi;
