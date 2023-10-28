import { EN, ES } from "src/assets";
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
}

export const dataStudies: IDataStudies[] = [
  {
    id: 1,
    placed: "right",
    upperTitle: "Istituto",
    title: "Tecnico Superiore",
    description: {
      en: "Study an exchange program in Cosenza (Italy), made me discover robotics and programming. I trained on arduino and logic.",
      es: "Estudiar de intercambio en Cosenza (Italia), me hizo descubrir la robota y programación. Me formé sobre arduino y lógica. ",
      ca: "Estudiar d'intercanvi a Cosenza (Itàlia), em va fer descobrir la robotica i programació. Em vaig formar sobre arduino i lògica.",
      de: "Ein Austauschprogramm in Cosenza (Italien) zu studieren, hat mich Robotik und Programmierung entdecken lassen. Ich habe mich auf Arduino und Logik geschult.",
    },
    date: "2018-2019",
    style: {
      color: "#fff700",
      height: "150px",
      width: "54%",
      marginTop: "0px",
    },
  },
  {
    id: 2,
    placed: "left",
    title: "LCI Barcelona",
    description: {
      en: "I took a course on interdisciplinary design, confirming my interest into graphics. I designed the graphic and physical campaign of the VIDA festival in team.",
      es: "Tomé un curso sobre diseño interdisciplinar, confirmando mi interés el diseño. Diseñé en equipo la campaña gráfica y física del festival VIDA.",
      ca: "Vaig pendre un curs sobre disseny interdisciplinari, confirmant el meu interès pel disseny. Vaig dissenyar en equip la campanya gràfica i física del festival VIDA.",
      de: "Ich habe einen Kurs in interdisziplinärem Design belegt, der mein Interesse an Grafik bestätigt hat. Ich habe die grafische und physische Kampagne des VIDA-Festivals im Team entworfen.",
    },
    date: "2019-2020",
    style: {
      color: "#6f00ff",
      height: "190px",
      width: "49%",
      marginTop: "10px",
    },
  },
  {
    id: 3,
    placed: "right",
    upperTitle: "Universitat",
    title: "Autònoma de Barcelona",
    description: {
      en: "My main degree was Interactive Communication, chosen to keep learning coding from a visual point and design. I got 6 honor scholarships.",
      es: "Mi grado principal fue Comunicación Interactiva, elegido para poder seguir aprendiendo programación desde un punto visual y del diseño. Logré 6 matrículas de honor.",
      ca: "El meu grau principal va ser Comunicació Interactiva, escollit per poder seguir aprenent programació des d'un punt visual i del disseny. Vaig aconseguir 6 matrícules d'honor.",
      de: "Mein Hauptabschluss war Interaktive Kommunikation, der gewählt wurde, um weiterhin Programmierung aus einem visuellen und designtechnischen Blickwinkel zu lernen. Ich habe 6 Ehrenstipendien erhalten.",
    },
    date: "2020-2024",
    style: {
      color: "#ff0051",
      height: "180px",
      width: "53%",
      marginTop: "0px",
    },
  },
  {
    id: 4,
    placed: "left",
    title: "Linnaeus Universitet",
    description: {
      en: "Erasmus+ program to Kalmar, Sweden. I took subjects of International Marketing and Business.",
      es: "Programa Eramus+ a Kalmar, Suecia. Cursé asignaturas de Márketing Internacional y Empresa.",
      ca: "Programa Eramus+ a Kalmar, Suècia. Vaig cursar assignatures de Màrqueting Internacional i Empresa.",
      de: "Erasmus + Programm nach Kalmar, Schweden. Ich habe Fächer des internationalen Marketings und der Wirtschaft belegt.",
    },
    date: "2022-2023",
    style: {
      color: "#00eaff",
      height: "130px",
      width: "51%",
      marginTop: "25px",
    },
  },
  {
    id: 5,
    placed: "left",
    title: "NUWE",
    description: {
      en: `My main source of learning in terms of design, working more than 2 years as main Graphic Designer of the company.`,

      es: `Mi principal fuente de aprendizaje en cuanto a diseño, trabajando más de 2 años como principal Diseñador gáfico de la empresa. `,
      ca: `La meva principal font d'aprenentatge en matèria de disseny, treballant més de 2 anys com a principal Dissenyador gràfic de l'empresa.`,
      de: `Meine Hauptlernquelle in Bezug auf Design, die seit mehr als 2 Jahren als Hauptgrafikdesigner des Unternehmens arbeitet.`,
    },
    date: `2021-act`,
    style: {
      color: "#22ff00",
      height: "150px",
      width: "50%",
      marginTop: "100px",
    },
  },
  {
    id: 6,
    placed: "right",
    title: "Mesalvo Gmbh",
    description: {
      en: `Opportunity to create a web-based environment for international customers. As a Mid-Level Developer I have been able to learn and apply my knowledge in web application development. I work in a team as part of the Innovation Hub of Mesalvo Freiburg.`,
      es: `Oportunidad de crear un entorno basado en tecnologías web para clientes internacionales. Como Desarrollador Mid-Level he podido aprender y aplicar mis conocimientos en el desarrollo de aplicaciones web. Trabajo en equipo como parte del Innovation Hub de Mesalvo Freiburg.`,
      ca: `Oportunitat de crear un entorn basat en tecnologies web per a clients internacionals. Com a Desenvolupador Mid-Level he pogut aprendre i aplicar els meus coneixements en el desenvolupament d'aplicacions web. Treballo en equip com a part del Innovation Hub de Mesalvo Freiburg.`,
      de: `Möglichkeit, eine webbasierte Umgebung für internationale Kunden zu schaffen. Als Mid-Level-Entwickler konnte ich mein Wissen in der Entwicklung von Webanwendungen lernen und anwenden. Ich arbeite als Teil des Innovation Hub von Mesalvo Freiburg im Team.`,
    },
    date: `2022-act`,
    style: {
      color: "#22ffff",
      height: "220px",
      width: "60%",
      marginTop: "70px",
    },
  },
];
