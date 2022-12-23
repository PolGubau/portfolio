interface IMadeForText {
  English: IMadeForTextOneLanguage;
  Spanish: IMadeForTextOneLanguage;
  Catalan: IMadeForTextOneLanguage;
}
export interface IMadeForTextOneLanguage {
  madeFor: string;
  forMe: string;
}
export const madeForText: IMadeForText = {
  English: {
    madeFor: "Made for",
    forMe: "Done by me for learning purposes.",
  },
  Spanish: {
    madeFor: "Hecho para",
    forMe: "Hecho por mi como aprendizaje.",
  },
  Catalan: {
    madeFor: "Fet per",
    forMe: "Fet per mi per aprendre.",
  },
};
