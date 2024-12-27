import { allProjects } from ".contentlayer/generated";

export const sortedProjects = allProjects.sort((a, b) => {
  const today = new Date().toISOString().split("T")[0];
  const aEnded = a.endedAt ? a.endedAt || today : today;
  const bEnded = b.endedAt ? b.endedAt || today : today;
  if (!(aEnded && bEnded)) {
    return 0;
  }
  if (aEnded < bEnded) {
    return 1;
  }
  if (aEnded > bEnded) {
    return -1;
  }
  return 0;
});
