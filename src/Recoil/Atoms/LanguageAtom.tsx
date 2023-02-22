import { atom } from "recoil";
import { EN } from "src/assets/flags";
import { availableLangCodesType } from "src/Constants/Languages";

export const LanguageAtom = atom({
  key: "languageAtom",
  default: {
    code: "EN" as availableLangCodesType,
    name: "English",
    available: true as boolean,
    flag: <EN />,
  },
});

export const ToggleLanguageSelectorAtom = atom({
  key: "toggleLanguageSelectorAtom",
  default: false,
});
