import { useRecoilState } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { allProjects, relevantProjects } from "src/Models/Texts/ProjectsTexts";

//
const useFilter = () => {
  const [projects, setProjects] = useRecoilState(SearchProjectAtom);

  const projectsFiltered = () => {
    const filteredProjects = projects.toShow.filter((project) =>
      project.title.toLowerCase().includes(projects.searched.toLowerCase())
    );
    setProjects({
      ...projects,
      toShow: filteredProjects,
    });
  };

  const resetShowingListToAll = () => {
    setProjects({
      ...projects,
      toShow: allProjects,
    });
  };
  const resetShowingListToRelevant = () => {
    setProjects({
      ...projects,
      toShow: relevantProjects,
    });
  };
  const resetSearch = () => {
    setProjects({
      searched: "",
      orderBy: "name",
      toShow: relevantProjects,
    });
  };
  const resetAll = () => {
    resetShowingListToRelevant();
    resetSearch();
  };

  return {
    projects,
    setProjects,
    projectsFiltered,
    resetShowingListToAll,
    resetShowingListToRelevant,
    resetSearch,
    resetAll,
  };
};

export default useFilter;
