import { availableLangCodesType } from "src/Constants/Languages";

export enum Languages {
  EN = "EN",
  ES = "ES",
  CA = "CA",
  DE = "DE",
}

export const getTextByLang = (
  lang: availableLangCodesType,
  text: {
    en: any;
    es: any;
    ca: any;
    de?: any;
  }
) => {
  switch (lang) {
    case Languages.ES:
      return text.es;
    case Languages.CA:
      return text.ca;
    case Languages.DE:
      return text.de;
    default:
      return text.en;
  }
};
