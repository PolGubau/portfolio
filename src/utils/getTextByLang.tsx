import { availableLangCodesType } from "src/Constants/Languages";

export const getTextByLang = (
  lang: availableLangCodesType,
  text: {
    English: any;
    Spanish: any;
    Catalan: any;
  }
) => {
  switch (lang) {
    case "EN":
      return text.English;
    case "ES":
      return text.Spanish;
    case "CA":
      return text.Catalan;
    default:
      return text.Catalan;
  }
};
