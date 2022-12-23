export const getTextByLang = (
  lang: any,
  text: {
    English: any;
    Spanish: any;
    Catalan: any;
  }
) => {
  switch (lang) {
    case "en":
      return text.English;

    case "es":
      return text.Spanish;
    case "ca":
      return text.Catalan;
    default:
      return text.Catalan;
  }
};
