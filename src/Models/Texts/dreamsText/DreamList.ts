export interface IDream {
  id: number;
  title: {
    English: string;
    Spanish: string;
    Catalan: string;
  };
  status: "done" | "loading" | "false";
  link?: string;
}

export const DreamsList: IDream[] = [
  {
    id: 1,
    title: {
      English: `Learn and work as a Graphic designer`,
      Spanish: `Aprender y trabajar como Diseñador Gráfico`,
      Catalan: `Aprendre i treballar com a Dissenyador Gràfic`,
    },
    status: "done",
  },
  {
    id: 2,
    title: {
      English: `Become a Software Developer`,
      Spanish: `Aprender de desarrollo de Software`,
      Catalan: `Apendre de desenvolupador de Software`,
    },
    status: "done",
  },
  {
    id: 3,
    title: {
      English: `Work in small and international companies`,
      Spanish: `Trabajar en pequeñas y empresas internacionales`,
      Catalan: `Treballar en petites i empreses internacionals`,
    },
    status: "done",
  },
  {
    id: 4,
    title: {
      English: `Create a portfolio using React`,
      Spanish: `Crear un portfolio usando React`,
      Catalan: `Crear un portfolio usant React`,
    },
    status: "done",
  },
  {
    id: 5,
    title: {
      English: `Teach code to university students`,
      Spanish: `Enseñar código a estudiantes universitarios`,
      Catalan: `Ensenyar codi a estudiants universitaris`,
    },
    status: "done",
  },
  {
    id: 8,
    status: "done",
    link: "https://www.npmjs.com/package/pol-ui",
    title: {
      English: `Publish a .npm package`,
      Spanish: `Publicar un paquete .npm`,
      Catalan: `Publicar un paquet .npm`,
    },
  },
  {
    id: 6,
    title: {
      English: `Design fonts and publish them`,
      Spanish: `Diseñar tipografías y publicarlas`,
      Catalan: `Dissenyar tipografies i publicar-les`,
    },
    status: "loading",
  },
  {
    id: 7,
    title: {
      English: `Write a book`,
      Spanish: `Escribir un libro`,
      Catalan: `Escriure un llibre`,
    },
    status: "false",
  },

  {
    id: 9,
    title: {
      English: `Create my UI library`,
      Spanish: ` Crear mi librería de UI`,
      Catalan: `Crear la meva llibreria de UI`,
    },
    status: "false",
  },
  {
    id: 10,
    title: {
      English: `Create a React Native app`,
      Spanish: `Crear una app con React Native`,
      Catalan: `Crear una app amb React Native`,
    },
    status: "false",
  },
];
