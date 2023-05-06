export interface INotFound {
  title: string;
  paragraph: string;
  buttonResetFilters: string;
  seeMoreParagraph: string;
}
interface INotFoundLanguage {
  en: INotFound;
  es: INotFound;
  ca: INotFound;
  de: INotFound;
}
const notFoundText: INotFoundLanguage = {
  en: {
    title: `Thanks for this great idea, but I haven't had time to develop it yet...`,
    paragraph: `Maybe `,
    buttonResetFilters: `Reset filters`,
    seeMoreParagraph: `or see more projects below.`,
  },
  es: {
    title: `Gracias por esta genial idea, pero no he tenido tiempo de desarrollarla aún...`,
    paragraph: `Quizás `,
    buttonResetFilters: `Reiniciar filtros`,
    seeMoreParagraph: `o ver más proyectos abajo.`,
  },
  ca: {
    title: `Gràcies per aquesta genial idea, però no he tingut temps de desenvolupar-la encara...`,
    paragraph: `Potser `,
    buttonResetFilters: `Reiniciar filtres`,
    seeMoreParagraph: `o veure més projectes a sota.`,
  },
  de: {
    title: `Danke für diese tolle Idee, aber ich hatte noch keine Zeit, sie zu entwickeln...`,
    paragraph: `Vielleicht `,
    buttonResetFilters: `Filter zurücksetzen`,
    seeMoreParagraph: `oder sehen Sie unten mehr Projekte.`,
  },
};

export default notFoundText;
