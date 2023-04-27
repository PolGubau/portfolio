import { useRecoilState } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { relevantProjects, allProjects } from "src/utils/textsUtils";

import { IProject } from "src/Interfaces";
import { useState } from "react";

//
const useFilter = () => {
  const [projects, setProjects] = useRecoilState(SearchProjectAtom);
  const [newest, setNewest] = useState(false);

  const filterProjects = (
    value: string = projects.searched,
    projectArray: IProject[] = allProjects
  ) => {
    const filteredProjects = projectArray.filter((project) => {
      const {
        title,
        tags,
        backgroundColor,
        year,
        category,
        invisibleTags,
        madeFor,
        description,
      } = project;
      const tagsString = tags.join(" ");
      const invisibleTagsString = invisibleTags ? invisibleTags.join(" ") : "";
      const madeForString = madeFor ? Object.values(madeFor).join(" ") : "";
      const plainProject = `${title} ${tagsString} ${backgroundColor} ${year} ${category} ${invisibleTagsString} ${madeForString} ${description}`;

      const plainValue = value.toLowerCase();
      return plainProject.toLowerCase().includes(plainValue);
    });
    setProjects({
      ...projects,
      searched: value,
      toShow: filteredProjects,
    });
  };
  const updateSearched = (value: string) => {
    setProjects({
      ...projects,
      searched: value,
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
  const changeOrder = () => {
    if (!newest) {
      const newOrder = [...projects.toShow].sort((a, b) => a.year - b.year);
      setProjects({
        ...projects,
        toShow: newOrder,
      });
    } else {
      const newOrder = [...projects.toShow].sort((a, b) => b.year - a.year);
      setProjects({
        ...projects,
        toShow: newOrder,
      });
    }
    setNewest(!newest);
  };

  return {
    projects,
    setProjects,
    filterProjects,
    resetShowingListToAll,
    resetShowingListToRelevant,
    resetSearch,
    resetAll,
    updateSearched,
    changeOrder,
  };
};

export default useFilter;
