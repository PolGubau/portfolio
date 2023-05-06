import {
  FooterDataInterface,
  HeaderDataInterface,
  ICardDataLanguages,
  IErrorLanguages,
  ILanguagesDataLanguages,
  InavTextsLanguages,
} from "src/Interfaces";

export const languagesTexts: ILanguagesDataLanguages = {
  en: {
    en: "English",
    es: "Spanish",
    ca: "Catalan",
  },
  es: {
    en: "Inglés",
    es: "Español",
    ca: "Catalán",
  },
  ca: {
    en: "Anglès",
    es: "Castellà",
    ca: "Català",
  },
};

export const footerText: FooterDataInterface = {
  en: {
    greeting: "Thank you :)",
    curriculum: "Download my CV",
    email: "Send me an Email",
    linkedin: "My Linkedin",
    github: "My GitHub",
    instagram: "My Instagram",
  },
  es: {
    greeting: "Muchas gracias :)",
    curriculum: "Descarga mi CV",
    email: "Envíame un Email",
    linkedin: "Mi Linkedin",
    github: "Mi GitHub",
    instagram: "Mi Instagram",
  },
  ca: {
    greeting: "Moltes gràcies :)",
    curriculum: "Descarrega el meu CV",
    email: "Envia'm un email",
    linkedin: "El meu Linkedin",
    github: "El meu GitHub",
    instagram: "El meu Instagram",
  },
};
export const headerText: HeaderDataInterface = {
  en: {
    title: "Pol Gubau Amores",
    description: "Full-Stack Developer and UX designer.",
  },
  es: {
    title: "Pol Gubau Amores",
    description: "Desarrollador Full-Stack y diseñador UX.",
  },
  ca: {
    title: "Pol Gubau Amores",
    description: "Programador Full-Stack i dissenyador UX.",
  },
};
export const errorOnSearch: IErrorLanguages = {
  en: {
    title: "Oups, nothing here...",
    description:
      "It seems that you are looking for something that doesn't exist",
    action: "Delete all filters",
  },
  es: {
    title: "Uy, nada por aquí...",
    description: "Parece que has buscado algo que no existe",
    action: "Borra todos los filtros",
  },
  ca: {
    title: "Ui, res per aquí...",
    description: "Sembla que has buscat alguna cosa que no existeix",
    action: "Esborra tots els filtres",
  },
};

export const cardTexts: ICardDataLanguages = {
  en: {
    madeFor: "Made for",
    tags: "Tags",
    description: "Description",
    githubLink: "GitHub",
    link: "Link",
    linkButton: "Search",
  },
  es: {
    madeFor: "Hecho para",
    tags: "Etiquetas",
    description: "Descripción",
    githubLink: "GitHub",
    link: "Enlace",
    linkButton: "Échale un vistazo",
  },
  ca: {
    madeFor: "Fet per",
    tags: "Etiquetes",
    description: "Descripció",
    githubLink: "GitHub",
    link: "Enllaç",
    linkButton: "Fes-li una ullada",
  },
};

export const navTexts: InavTextsLanguages = {
  en: {
    placeholder: "Search...",
  },
  es: {
    placeholder: "Buscar...",
  },
  ca: {
    placeholder: "Buscar...",
  },
};

export const categoriesText = [
  {
    name: "web",
    text: {
      en: "Web",
      es: "Web",
      ca: "Web",
    },
  },
  {
    name: "design",
    text: {
      en: "Design",
      es: "Diseño",
      ca: "Design",
    },
  },
];
