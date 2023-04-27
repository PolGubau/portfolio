import { IProject } from "src/Interfaces";
import { projects } from "src/Models/Texts/ProjectsTexts";

export const relevantProjects = projects.filter((project) => project.relevant);

export const notRelevantProjects = projects.filter(
  (project) => !project.relevant
);

export const allProjects: IProject[] = [
  ...relevantProjects,
  ...notRelevantProjects,
];
