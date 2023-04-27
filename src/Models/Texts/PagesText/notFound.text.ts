export interface INotFound {
  title: string;
  paragraph: string;
  buttonResetFilters: string;
  seeMoreParagraph: string;
}
interface INotFoundLanguage {
  English: INotFound;
  Spanish: INotFound;
  Catalan: INotFound;
  Deutsch: INotFound;
}
export const aboutYouText: INotFoundLanguage = {
  English: {
    title: `Oupsss.. I hadn't had time to create this project yet. 🤷‍♂️`,
    paragraph: `Maybe `,
    buttonResetFilters: `Reset filters`,
    seeMoreParagraph: `or see more projects below.`,
  },
  Spanish: {
    title: `Oupsss.. Todavía no he tenido tiempo de crear este proyecto. 🤷‍♂️`,
    paragraph: `Quizás `,
    buttonResetFilters: `Reiniciar filtros`,
    seeMoreParagraph: `o ver más proyectos abajo.`,
  },
  Catalan: {
    title: `Oupsss.. Encara no he tingut temps de crear aquest projecte. 🤷‍♂️`,
    paragraph: `Potser `,
    buttonResetFilters: `Reiniciar filtres`,
    seeMoreParagraph: `o veure més projectes a sota.`,
  },
  Deutsch: {
    title: `Oupsss.. Ich hatte noch keine Zeit, dieses Projekt zu erstellen. 🤷‍♂️`,
    paragraph: `Vielleicht `,
    buttonResetFilters: `Filter zurücksetzen`,
    seeMoreParagraph: `oder sehen Sie unten mehr Projekte.`,
  },
};
