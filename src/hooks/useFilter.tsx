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

  const projectsFilteredByQuery = (
    value: string = projects.searched,
    projectArray: IProject[] = allProjects
  ) =>
    projectArray.filter((project) => {
      const {
        title,
        tags,
        year,
        category,
        invisibleTags,
        madeFor,
        description,
      } = project;
      const tagsString = tags.join(" ");
      const invisibleTagsString = invisibleTags ? invisibleTags.join(" ") : "";
      const madeForString = madeFor ? Object.values(madeFor).join(" ") : "";
      const plainProject = `${title} ${tagsString}  ${year} ${category} ${invisibleTagsString} ${madeForString} ${description}`;

      const plainValue = value.toLowerCase();

      const includes = plainProject.toLowerCase().includes(plainValue);

      return includes;
    });

  const filterProjects = (value: string = projects.searched) => {
    // if there is a category filter, filter the filteredProjects also by category
    if (projects.filteredCategory) {
      const filteredByCategory = projectsFilteredByQuery().filter((project) => {
        return project.category.en === projects.filteredCategory;
      });
      console.log(" category filter");

      setProjects({
        ...projects,
        searched: value,
        toShow: filteredByCategory, //filtering the projects
      });
      return;
    } else {
      console.log("no category filter");
      console.log(projectsFilteredByQuery());
      setProjects({
        ...projects,
        searched: value,
        toShow: projectsFilteredByQuery(),
      });
    }
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
    return;
  };
  const toggleAscending = () => {
    const reversedProjects: IProject[] = [...projects.toShow].reverse();

    // Set the projects state with the reversed projects
    setProjects({
      ...projects,
      ascending: !projects.ascending,
      toShow: reversedProjects,
    });
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
    toggleAscending,
  };
};

export default useFilter;
