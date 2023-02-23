import { useRecoilState } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";

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

  return { projects, setProjects, projectsFiltered };
};
