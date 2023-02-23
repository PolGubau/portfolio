import { atom } from "recoil";

import { cardData } from "src/Data";

export const SearchProjectAtom = atom({
  key: "searchProjectAtom",
  default: {
    search: "",
    orderBy: "name",
    toShow: cardData,
  },
});
