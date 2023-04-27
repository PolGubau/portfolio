import { atom } from "recoil";
import { relevantProjects } from "src/Models/Texts/ProjectsTexts";

export const SearchProjectAtom = atom({
  key: "searchProjectAtom",
  default: {
    searched: "",
    orderBy: "name",
    toShow: relevantProjects,
  },
});
