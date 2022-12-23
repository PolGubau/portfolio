import {
  FooterDataInterface,
  HeaderDataInterface,
  ICardDataLanguages,
  IErrorLanguages,
  ILanguagesDataLanguages,
  InavTextsLanguages,
} from "./Interfaces";

export const languagesTexts: ILanguagesDataLanguages = {
  English: {
    English: "English",
    Spanish: "Spanish",
    Catalan: "Catalan",
  },
  Spanish: {
    English: "Inglés",
    Spanish: "Español",
    Catalan: "Catalán",
  },
  Catalan: {
    English: "Anglès",
    Spanish: "Castellà",
    Catalan: "Català",
  },
};

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
export const errorOnSearch: IErrorLanguages = {
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

export const cardTexts: ICardDataLanguages = {
  English: {
    madeFor: "Made for",
    tags: "Tags",
    description: "Description",
    githubLink: "GitHub",
    link: "Link",
    linkButton: "Search",
  },
  Spanish: {
    madeFor: "Hecho para",
    tags: "Etiquetas",
    description: "Descripción",
    githubLink: "GitHub",
    link: "Enlace",
    linkButton: "Échale un vistazo",
  },
  Catalan: {
    madeFor: "Fet per",
    tags: "Etiquetes",
    description: "Descripció",
    githubLink: "GitHub",
    link: "Enllaç",
    linkButton: "Fes-li una ullada",
  },
};

export const navTexts: InavTextsLanguages = {
  English: {
    web: "Web",
    design: "Design",
    placeholder: "Search...",
  },
  Spanish: {
    web: "Web",
    design: "Diseño",
    placeholder: "Buscar...",
  },
  Catalan: {
    web: "Web",
    design: "Disseny",
    placeholder: "Buscar...",
  },
};
