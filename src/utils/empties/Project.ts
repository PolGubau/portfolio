import { IProject } from "src/Interfaces";

export const emptyProject: IProject = {
  id: 0,
  path: "",
  title: "",
  year: 0,
  category: { en: "", es: "", ca: "", de: "" },
  pointOfInterest: { x: 0, y: 0 },
  textColor: "",
  backgroundColor: "",
  width: 0,
  pathToImg: "",
  tags: [],
  description: { en: "", es: "", ca: "", de: "" },
  link: "",
  relevant: false,
};
