import { IAboutYouTextLanguage } from "src/Interfaces";

export interface IAboutYouText {
  mainTitle: string;
  firstParagraph: string;
  someTechnologies: string;
  dreamsTitle: string;
  studiesTitle: string;
  partnersTitle: string;
}

export const aboutYouText: IAboutYouTextLanguage = {
  en: {
    mainTitle: `A pixel perfectionist, even though I work with vectors. 🎨👨‍💻`,
    firstParagraph: `Software developer and UX designer with 5 years of experience.
    I have a strong background in web development and have worked on a variety of projects, from small websites to large-scale web applications.`,
    someTechnologies: `Some technologies I feel confident with:`,
    dreamsTitle: `Dreams I've archived`,
    studiesTitle: `Where I've learned from`,
    partnersTitle: `Some organizations I've worked with`,
  },
  es: {
    mainTitle: `Un perfeccionista a cada píxel, y eso que trabajo con vectores. 🎨👨‍💻`,
    firstParagraph: `Desarrollador de software y diseñador UX con 5 años de experiencia.
    Tengo un sólido conocimiento en desarrollo web y he trabajado en una variedad de proyectos, desde pequeños sitios web hasta aplicaciones web de gran escala.`,
    someTechnologies: `Algunas tecnologías con las que me siento cómodo:`,
    dreamsTitle: `Sueños que he cumplido`,
    studiesTitle: `Donde he aprendido`,
    partnersTitle: `Algunas empresas con las que he colaborado`,
  },
  ca: {
    mainTitle: `Un perfeccionista a cada píxel, i això que treballo amb vectors. 🎨👨‍💻`,
    firstParagraph: `Desenvolupador de software i dissenyador UX amb 5 anys d'experiència.
    Tinc un sòlid coneixement en desenvolupament web i he treballat en una varietat de projectes, des de petits llocs web fins a aplicacions web d'escala gran.`,
    someTechnologies: `Algunes tecnologies amb les que m'estic còmode:`,
    dreamsTitle: `Somnis que he complert`,
    studiesTitle: `D'on he après`,
    partnersTitle: `Algunes empreses amb les que he col·laborat`,
  },
  de: {
    mainTitle: `Ein Pixel-Perfektionist, obwohl ich mit Vektoren arbeite. 🎨👨‍💻`,
    firstParagraph: `Softwareentwickler und UX-Designer mit 5 Jahren Erfahrung.
    Ich habe fundierte Kenntnisse in der Webentwicklung und habe an einer Vielzahl von Projekten gearbeitet, von kleinen Websites bis hin zu groß angelegten Webanwendungen.`,
    someTechnologies: `Einige Technologien, mit denen ich mich wohl fühle:`,
    dreamsTitle: `Träume, die ich erreicht habe`,
    studiesTitle: `Wo ich gelernt habe`,
    partnersTitle: `Einige Unternehmen, mit denen ich zusammengearbeitet habe`,
  },
};
