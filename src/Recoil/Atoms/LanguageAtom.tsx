import { atom } from "recoil";
import { EN } from "src/assets/flags";
import { availableLangCodesType } from "src/Constants/Languages";

export const LanguageAtom = atom({
  key: "languageAtom",
  default: {
    code: "EN" as availableLangCodesType,
    name: "English",
    available: true,
    flag: <EN />,
  },
});

export const viewLangSelectorModal = atom({
  key: "viewLangSelectorModal",
  default: false,
});
