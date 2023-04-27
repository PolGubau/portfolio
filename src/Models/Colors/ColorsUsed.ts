import { IProject } from "src/Interfaces";
import { allProjects } from "src/utils/textsUtils";

export const colorsUsed = (array: IProject[] = allProjects) => {
  const allColors = array.map((project) => project.backgroundColor);
  const uniqueColors = [...new Set(allColors)];
  return uniqueColors;
};

export default colorsUsed;
