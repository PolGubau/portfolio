import { IMadeForText } from "src/Interfaces";

export interface IMadeForTextOneLanguage {
  madeFor: string;
  forMe: string;
}
export const madeForText: IMadeForText = {
  en: {
    madeFor: "Made for",
    forMe: "Done by me for learning purposes.",
  },
  es: {
    madeFor: "Hecho para",
    forMe: "Hecho por mi como aprendizaje.",
  },
  ca: {
    madeFor: "Fet per",
    forMe: "Fet per mi per aprendre.",
  },
  de: {
    madeFor: "Gemacht für",
    forMe: "Von mir gemacht, um zu lernen.",
  },
};
