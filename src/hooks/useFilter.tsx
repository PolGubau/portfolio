import { useRecoilState, useRecoilValue } from "recoil";
import {
  SearchProjectAtom,
  initialSearch,
} from "src/Recoil/Atoms/SearchProjectAtom";
import { relevantProjects, allProjects } from "src/utils/textsUtils";
import { IProject } from "src/Interfaces";
import { useState } from "react";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";

//
const useFilter = () => {
  const l = useRecoilValue(LanguageAtom);
  const [projects, setProjects] = useRecoilState(SearchProjectAtom);
  const [newest, setNewest] = useState(false);

  const projectsFilteredByQuery = (
    value: string = projects.searched,
    projectArray: IProject[] = allProjects
  ) =>
    projectArray.filter((project) => {
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

  const filterProjects = (value: string = projects.searched) => {
    // if there is a category filter, filter the filteredProjects also by category
    if (projects.filteredCategory) {
      const filteredByCategory = projectsFilteredByQuery().filter((project) => {
        return project.category.en === projects.filteredCategory;
      });
      setProjects({
        ...projects,
        searched: value,
        toShow: filteredByCategory,
      });
      return;
    }
    setProjects({
      ...projects,
      searched: value,
      toShow: projectsFilteredByQuery(),
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
    setProjects(initialSearch);
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
  const onlyShowCategory = (category: string) => {
    if (projects.filteredCategory === category) {
      setProjects({
        ...projects,
        filteredCategory: "",
        toShow: relevantProjects,
      });
      filterProjects;
      return;
    }

    const filteredProjects = projectsFilteredByQuery().filter((project) => {
      const categoryOfProject = getTextByLang(l.code, project.category);
      return categoryOfProject === category;
    });
    setProjects({
      ...projects,
      filteredCategory: category,
      toShow: filteredProjects,
    });
    console.log(filteredProjects);
    return;
  };
  const setAscending = () => {
    setProjects({
      ...projects,
      ascending: true,
      toShow: relevantProjects,
    });
  };
  const setDescending = () => {
    setProjects({
      ...projects,
      ascending: false,
      toShow: relevantProjects.reverse(),
    });
  };

  const toggleAscending = () => {
    projects.ascending ? setDescending() : setAscending();
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
    onlyShowCategory,
    changeOrder,
    toggleAscending,
  };
};

export default useFilter;
