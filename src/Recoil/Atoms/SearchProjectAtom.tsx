import { atom } from "recoil";
import { relevantProjects } from "src/utils/textsUtils";

export const SearchProjectAtom = atom({
  key: "searchProjectAtom",
  default: {
    searched: "",
    orderBy: "name",
    toShow: relevantProjects,
  },
});
