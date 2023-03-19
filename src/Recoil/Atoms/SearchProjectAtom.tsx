import { atom } from "recoil";
import { allProjects } from "src/Models/Texts/ProjectsTexts";

export const SearchProjectAtom = atom({
  key: "searchProjectAtom",
  default: {
    searched: "",
    orderBy: "name",
    toShow: allProjects,
  },
});
