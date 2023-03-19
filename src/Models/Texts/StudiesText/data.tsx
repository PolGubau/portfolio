import { ES } from "src/assets";
import { ITextByLanguage } from "src/Interfaces";

export const actualYear = new Date().getFullYear();
export const yearSince = (year: number) => actualYear - year;
export interface IDataStudies {
  id: number;
  placed: "left" | "right" | "center";
  upperTitle?: string;
  title: string;
  description: ITextByLanguage;
  date: string;
  style: {
    color: string;
    height: string;
    marginTop: string;
    width: string;
  };
  flag: any;
}

export const dataStudies: IDataStudies[] = [
  {
    id: 1,
    placed: "right",
    upperTitle: "Istituto",
    title: "Tecnico Superiore",
    description: {
      English:
        "Study an exchange program in Cosenza (Italy), made me discover robotics and programming. I trained on arduino and logic.",
      Spanish:
        "Estudiar de intercambio en Cosenza (Italia), me hizo descubrir la robota y programación. Me formé sobre arduino y lógica. ",
      Catalan:
        "Estudiar d'intercanvi a Cosenza (Itàlia), em va fer descobrir la robotica i programació. Em vaig formar sobre arduino i lògica.",
    },
    date: "2018-2019",
    style: {
      color: "#fff700",
      height: "150px",
      width: "54%",
      marginTop: "0px",
    },
    flag: <ES />,
  },
  {
    id: 2,
    placed: "left",
    title: "LCI Barcelona",
    description: {
      English:
        "I took a course on interdisciplinary design, confirming my interest into graphics. I designed the graphic and physical campaign of the VIDA festival in team.",
      Spanish:
        "Tomé un curso sobre diseño interdisciplinar, confirmando mi interés el diseño. Diseñé en equipo la campaña gráfica y física del festival VIDA.",
      Catalan:
        "Vaig pendre un curs sobre disseny interdisciplinari, confirmant el meu interès pel disseny. Vaig dissenyar en equip la campanya gràfica i física del festival VIDA.",
    },
    date: "2019-2020",
    style: {
      color: "#6f00ff",
      height: "190px",
      width: "49%",
      marginTop: "10px",
    },
    flag: <ES />,
  },
  {
    id: 3,
    placed: "right",
    upperTitle: "Universitat",
    title: "Autònoma de Barcelona",
    description: {
      English:
        "My main degree was Interactive Communication, chosen to keep learning coding from a visual point and design. I got 6 honor scholarships.",
      Spanish:
        "Mi grado principal fue Comunicación Interactiva, elegido para poder seguir aprendiendo programación desde un punto visual y del diseño. Logré 6 matrículas de honor.",
      Catalan:
        "El meu grau principal va ser Comunicació Interactiva, escollit per poder seguir aprenent programació des d'un punt visual i del disseny. Vaig aconseguir 6 matrícules d'honor.",
    },
    date: "2020-2024",
    style: {
      color: "#ff0051",
      height: "180px",
      width: "53%",
      marginTop: "0px",
    },
    flag: <ES />,
  },
  {
    id: 4,
    placed: "left",
    title: "Linnaeus Universitet",
    description: {
      English:
        "Erasmus+ program to Kalmar, Sweden. I took subjects of International Marketing and Business.",
      Spanish:
        "Programa Eramus+ a Kalmar, Suecia. Cursé asignaturas de Márketing Internacional y Empresa.",
      Catalan:
        "Programa Eramus+ a Kalmar, Suècia. Vaig cursar assignatures de Màrqueting Internacional i Empresa.",
    },
    date: "2022-2023",
    style: {
      color: "#00eaff",
      height: "130px",
      width: "51%",
      marginTop: "25px",
    },
    flag: <ES />,
  },
  {
    id: 5,
    placed: "left",
    title: "NUWE",
    description: {
      English: `My main source of learning in terms of design, working more than ${yearSince(
        2021
      )} years as main Graphic Designer of the company.`,

      Spanish: `Mi principal fuente de aprendizaje en cuanto a diseño, trabajando más de ${yearSince(
        2021
      )} años como principal Diseñador gáfico de la empresa. `,
      Catalan: `La meva principal font d'aprenentatge en matèria de disseny, treballant més de ${yearSince(
        2021
      )} anys com a principal Dissenyador gràfic de l'empresa.`,
    },
    date: `2021-${actualYear}`,
    style: {
      color: "#22ff00",
      height: "150px",
      width: "50%",
      marginTop: "100px",
    },
    flag: <ES />,
  },
  {
    id: 6,
    placed: "right",
    title: "Almato Iberia",
    description: {
      English: `Opportunity to create a web-based environment for international customers. As a Mid-Level Developer I have been able to learn and apply my knowledge in web application development. I work in a team as part of the Innovation Hub of Mesalvo Freiburg.`,
      Spanish: `Oportunidad de crear un entorno basado en tecnologías web para clientes internacionales. Como Desarrollador Mid-Level he podido aprender y aplicar mis conocimientos en el desarrollo de aplicaciones web. Trabajo en equipo como parte del Innovation Hub de Mesalvo Freiburg.`,
      Catalan: `Oportunitat de crear un entorn basat en tecnologies web per a clients internacionals. Com a Desenvolupador Mid-Level he pogut aprendre i aplicar els meus coneixements en el desenvolupament d'aplicacions web. Treballo en equip com a part del Innovation Hub de Mesalvo Freiburg.`,
    },
    date: `2022-${actualYear}`,
    style: {
      color: "#22ffff",
      height: "220px",
      width: "60%",
      marginTop: "70px",
    },
    flag: <ES />,
  },
];
