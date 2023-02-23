import { useRecoilState } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { cardData } from "src/Data";

//
export const useProjectsData = () => {
  const [projects, setProjects] = useRecoilState(SearchProjectAtom);

  const projectsFiltered = () => {
    const filteredProjects = projects.toShow.filter((project) =>
      project.title.toLowerCase().includes(projects.search.toLowerCase())
    );
    setProjects({
      ...projects,
      toShow: filteredProjects,
    });
  };

  const resetShowingList = () => {
    setProjects({
      ...projects,
      toShow: cardData,
    });
  };
  const resetSearch = () => {
    setProjects({
      ...projects,
      search: "",
    });
  };
  const resetAll = () => {
    resetShowingList();
    resetSearch();
  };

  return {
    projects,
    setProjects,
    projectsFiltered,
    resetShowingList,
    resetSearch,
    resetAll,
  };
};
