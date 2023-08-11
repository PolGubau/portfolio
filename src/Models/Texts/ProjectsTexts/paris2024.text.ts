import { IProject } from "src/Interfaces";

const paris2024: IProject = {
  id: 14,
  path: "paris2024",
  title: "Paris 2024",
  year: 2023,

  category: {
    en: "web",
    es: "web",
    ca: "web",
    de: "web",
  },
  pointOfInterest: { x: -20, y: -15 },
  textColor: "#000",
  width: 450,
  backgroundColor: "#FFEDAB",
  pathToImg: "/Paris2024/0.webp",
  tags: ["Svelte", "Javascript", "CSS", "Web", "UI"],
  madeFor: {
    en: "Linnaeus University",
    es: "Linnaeus University",
    ca: "Linnaeus University",
    de: "Linnaeus University",
  },
  invisibleTags: ["SvelteKit", "JSX"],
  description: {
    en: "Delivery of a group project for a Swedish university. A multi-frame analysis for the Paris 2024 Olympic Games.",
    es: "Entrega de un proyecto grupal para una universidad Sueca. Un análisis completo de los Juegos Olímpicos de París 2024.",
    ca: "Lliurament d'un projecte grupal per a una universitat Sueca. Una anàlisi complet dels Jocs Olímpics de París 2024.",
    de: "Durchführung eines Gruppenprojekts für eine schwedische Universität. Eine Multi-Frame-Analyse für die Olympischen Spiele 2024 in Paris.",
  },
  githubLink: "https://github.com/PolGubau/paris2024/#introduction",
  link: "https://paris2024.vercel.app",
  relevant: true,
};

export default paris2024;
