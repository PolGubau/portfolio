import { IProject } from "src/Interfaces";
import { allProjects } from "./textsUtils";

/**
 * Returns an array of up to 'limit' projects that have at least one tag in common with the given project.
 * @param {IProject} project - The project to compare against.
 * @param {IProject[]} projects - An array of projects to filter.
 * @param {number} limit - The maximum number of projects to return.
 * @returns {IProject[]} An array of up to 'limit' projects that have at least one tag in common with the given project.
 */
function recomendProjectWithSameTags(
  project: IProject,
  projects: IProject[] = allProjects,
  limit: number = 3
): IProject[] {
  const tags = project.tags;
  return projects
    .filter((project) => {
      return project.tags.some((tag) => tags.includes(tag));
    })
    .slice(0, limit);
}

export default recomendProjectWithSameTags;
