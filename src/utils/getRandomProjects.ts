import { IProject } from "src/Interfaces";

// getRandomProjects.ts

function getRandomProjects(projects: IProject[], limit = 3): IProject[] {
  const shuffled = projects.slice().sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, limit);
  return selected;
}

export default getRandomProjects;
