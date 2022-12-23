

export type availableLangCodesType = "en" | "es" | "ca";


export interface IAvalibleLanguges {
  code: availableLangCodesType;
  name: string;
}
export const availableLanguages: IAvalibleLanguges[] = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "es",
    name: "Spanish",
  },
  {
    code: "ca",
    name: "Catalan",
  },
];
