export type availableLangCodesType = "EN" | "ES" | "CA" | "DE" | "SV";
import { EN, ES, CA, DE, SV } from "src/assets/flags";
export interface IAvailableLanguages {
  code: availableLangCodesType;
  name: string;
  available: boolean;
  flag: JSX.Element;
}
export const allLanguages: IAvailableLanguages[] = [
  {
    code: "EN",
    name: "English",
    available: true,
    flag: <EN />,
  },
  {
    code: "ES",
    name: "Spanish",
    available: true,
    flag: <ES />,
  },
  {
    code: "CA",
    name: "Catalan",
    available: true,
    flag: <CA />,
  },
  {
    code: "DE",
    name: "Deutsch",
    available: true,
    flag: <DE />,
  },
  {
    code: "SV",
    name: "Svenka",
    available: false,
    flag: <SV />,
  },
];

export const availableLanguages = allLanguages.filter(
  (language) => language.available
);
