import { ITextByLanguage } from "src/Interfaces";

export interface IDream {
  id: number;
  title: ITextByLanguage;
  status: "done" | "loading" | "false";
  link?: string;
}

export const DreamsList: IDream[] = [
  {
    id: 1,
    title: {
      en: `Learn and work as a Graphic designer`,
      es: `Aprender y trabajar como Diseñador Gráfico`,
      ca: `Aprendre i treballar com a Dissenyador Gràfic`,
      de: `Lernen und als Grafikdesigner arbeiten`,
    },
    status: "done",
  },
  {
    id: 2,
    title: {
      en: `Become a Software Developer`,
      es: `Aprender de desarrollo de Software`,
      ca: `Apendre de desenvolupador de Software`,
      de: `Softwareentwickler werden`,
    },
    status: "done",
  },
  {
    id: 3,
    title: {
      en: `Work in small and international companies`,
      es: `Trabajar en pequeñas y empresas internacionales`,
      ca: `Treballar en petites i empreses internacionals`,
      de: `In kleinen und internationalen Unternehmen arbeiten`,
    },
    status: "done",
  },
  {
    id: 4,
    title: {
      en: `Create a portfolio using React`,
      es: `Crear un portfolio usando React`,
      ca: `Crear un portfolio usant React`,
      de: `Ein Portfolio mit React erstellen`,
    },
    status: "done",
  },
  {
    id: 5,
    title: {
      en: `Teach code to university students`,
      es: `Enseñar código a estudiantes universitarios`,
      ca: `Ensenyar codi a estudiants universitaris`,
      de: `Code an Universitätsstudenten unterrichten`,
    },
    status: "done",
  },
  {
    id: 8,
    status: "done",
    link: "https://www.npmjs.com/package/pol-ui",
    title: {
      en: `Publish a .npm package`,
      es: `Publicar un paquete .npm`,
      ca: `Publicar un paquet .npm`,
      de: `Ein .npm-Paket veröffentlichen`,
    },
  },
  {
    id: 6,
    title: {
      en: `Design fonts and publish them`,
      es: `Diseñar tipografías y publicarlas`,
      ca: `Dissenyar tipografies i publicar-les`,
      de: `Schriftarten entwerfen und veröffentlichen`,
    },
    status: "loading",
  },
  {
    id: 7,
    title: {
      en: `Write a book`,
      es: `Escribir un libro`,
      ca: `Escriure un llibre`,
      de: `Ein Buch schreiben`,
    },
    status: "false",
  },

  {
    id: 9,
    title: {
      en: `Create my UI library`,
      es: ` Crear mi librería de UI`,
      ca: `Crear la meva llibreria de UI`,
      de: `Meine UI-Bibliothek erstellen`,
    },
    status: "false",
  },
  {
    id: 10,
    title: {
      en: `Create a React Native app`,
      es: `Crear una app con React Native`,
      ca: `Crear una app amb React Native`,
      de: `Eine React Native App erstellen`,
    },
    status: "false",
  },
];
