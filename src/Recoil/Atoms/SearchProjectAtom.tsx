import { atom } from "recoil";
import { relevantProjects } from "src/utils/textsUtils";

export const initialSearch = {
  searched: "",
  orderBy: "name",
  ascending: true,
  filteredCategory: "",
  toShow: relevantProjects,
};

export const SearchProjectAtom = atom({
  key: "searchProjectAtom",
  default: initialSearch,
});
