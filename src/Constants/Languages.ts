export type availableLangCodesType = "EN" | "ES" | "CA" | "DE";

export interface IAvalibleLanguges {
  code: availableLangCodesType;
  name: string;
  available: boolean;
}
export const availableLanguages: IAvalibleLanguges[] = [
  {
    code: "EN",
    name: "English",
    available: true,
  },
  {
    code: "ES",
    name: "Spanish",
    available: true,
  },
  {
    code: "CA",
    name: "Catalan",
    available: true,
  },
  {
    code: "DE",
    name: "Deutsch",
    available: false,
  },
];
