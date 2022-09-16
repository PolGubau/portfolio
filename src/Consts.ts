import { FooterDataInterface, HeaderDataInterface } from "./Interfaces";

export const Languages = [
  // Si elige inglés
  "English",
  "Spanish",
  "Catalan",

  // Si elige español
  "Inglés",
  "Español",
  "Catalán",

  // Si elige catalán
  "Anglès",
  "Castellà",
  "Català",
];

export const footerText: FooterDataInterface = {
  English: {
    greeting: "Thank you :)",
    curriculum: "Download my CV",
    email: "Send me an Email",
    linkedin: "My Linkedin",
    github: "My GitHub",
    instagram: "My Instagram",
  },
  Spanish: {
    greeting: "Muchas gracias :)",
    curriculum: "Descarga mi CV",
    email: "Envíame un Email",
    linkedin: "Mi Linkedin",
    github: "Mi GitHub",
    instagram: "Mi Instagram",
  },
  Catalan: {
    greeting: "Moltes gràcies :)",
    curriculum: "Descarrega el meu CV",
    email: "Envia'm un email",
    linkedin: "El meu Linkedin",
    github: "El meu GitHub",
    instagram: "El meu Instagram",
  },
};
export const headerText: HeaderDataInterface = {
  English: {
    title: "Pol Gubau Amores",
    description: "Junior Full-Stack Developer and UX designer.",
  },
  Spanish: {
    title: "Pol Gubau Amores",
    description: "Desarrollador Junior Full-Stack y diseñador UX.",
  },
  Catalan: {
    title: "Pol Gubau Amores",
    description: "Programador Junior Full-Stack i dissenyador UX.",
  },
};
export const errorOnSearch = {
  English: {
    title: "Oups, nothing here...",
    description:
      "It seems that you are looking for something that doesn't exist",
    action: "Delete all filters",
  },
  Spanish: {
    title: "Uy, nada por aquí...",
    description: "Parece que has buscado algo que no existe",
    action: "Borra todos los filtros",
  },
  Catalan: {
    title: "Ui, res per aquí...",
    description: "Sembla que has buscat alguna cosa que no existeix",
    action: "Esborra tots els filtres",
  },
};

export const placeholderInput = {
  English: "Search...",
  Spanish: "Buscar...",
  Catalan: "Buscar...",
};
