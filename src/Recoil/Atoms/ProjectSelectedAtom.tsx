import { atom } from "recoil";
import { emptyProject } from "src/utils/empties/Project";

export const projectSelectedAtom = atom({
  key: "projectSelecetdAtom",
  default: emptyProject,
});
