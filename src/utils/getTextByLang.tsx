import { availableLangCodesType } from "src/Constants/Languages";

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
    case "ES":
      return text.es;
    case "CA":
      return text.ca;
    default:
      return text.en;
  }
};
