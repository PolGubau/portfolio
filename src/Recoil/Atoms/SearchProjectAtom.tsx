import { atom } from "recoil";
import { allProjects } from "src/Models/Texts/ProjectsTexts";

export const SearchProjectAtom = atom({
  key: "searchProjectAtom",
  default: {
    search: "",
    orderBy: "name",
    toShow: allProjects,
  },
});
