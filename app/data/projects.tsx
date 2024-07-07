import { allProjects } from "contentlayer/generated";

// order by date with the 'toSorted' function, the projects without endedAt will act as 'ended today', then order from the most recent to the oldest
export const orderedProjects = allProjects.sort((a, b) => {
  const today = new Date().toISOString().split("T")[0];
  const aEnded =  !a.endedAt ? today : a.endedAt || today 
  const bEnded = !b.endedAt ? today : b.endedAt || today;
  if(!aEnded || !bEnded) return 0;
  if (aEnded < bEnded) return 1;
  if (aEnded > bEnded) return -1;
  return 0;
});

export const firstProjects = orderedProjects.slice(0, 4);