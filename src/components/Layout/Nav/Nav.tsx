import { memo, useState } from "react";
import { navTexts } from "src/Consts";
import { BiSearch } from "react-icons/bi";
import useMedia from "src/hooks/useMedia";

import { getTextByLang } from "src/utils/getTextByLang";
import { NavStyled } from "./NavStyled";

import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue, useRecoilState } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { baseTheme } from "src/styles/theme/baseTheme";
import { IProject } from "src/Interfaces";
import { allProjects } from "src/Models/Texts/ProjectsTexts";

export const Nav = memo((): JSX.Element => {
  const mobile = useMedia(baseTheme.breakpoints.tablet);
  const language = useRecoilValue(LanguageAtom);
  const text = getTextByLang(language.code, navTexts);

  const [projectList, setProjectList] = useRecoilState(SearchProjectAtom);

  const { searched } = projectList;

  const [newest, setNewest] = useState(false);

  const changeOrder = () => {
    if (!newest) {
      const newOrder = [...projectList.toShow].sort((a, b) => a.year - b.year);
      setProjectList({
        ...projectList,
        toShow: newOrder,
      });
    } else {
      const newOrder = [...projectList.toShow].sort((a, b) => b.year - a.year);
      setProjectList({
        ...projectList,
        toShow: newOrder,
      });
    }
    setNewest(!newest);
  };

  const filterProjects = (NameOrTag: string, allProjects: IProject[]) => {
    const filteredProjects = allProjects.filter((project) => {
      const name = project.title.toLowerCase();
      const tags = project.tags.map((tag) => tag.toLowerCase());
      const nameOrTag = NameOrTag.toLowerCase();

      return name.includes(nameOrTag) || tags.includes(nameOrTag);
    });
    return filteredProjects;
  };

  const handleSearchTermChange = (event: any) => {
    const valueSearched = event.target.value;

    const newValue = {
      searched: valueSearched,
      orderBy: projectList.orderBy,
      toShow: filterProjects(valueSearched, allProjects),
    };
    setProjectList(newValue);
  };

  return (
    <NavStyled>
      <div className="contentNav">
        <div className={`searchNav ${mobile ? "mobileSearch" : ""}`}>
          <div
            className={`inputWithIcon ${
              searched.length > 0 ? "activeInput" : ""
            }`}
          >
            <div className="inputIconDiv">
              <BiSearch
                className="iconSearch"
                onClick={handleSearchTermChange}
              />
            </div>
            <input
              maxLength={20}
              type="text"
              className={`input `}
              value={searched}
              placeholder={text.placeholder}
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
      </div>
    </NavStyled>
  );
});
export default Nav;

/**
 * <div className={`filterNav`}>
          {searched.length === 0 && (
            <ul className="filterWord-container">
              <li
                className="filterWord"
                // onClick={() => onlyShowCategory("web")}
              >
                {text.web}
              </li>
              <li
                className="filterWord"
                // onClick={() => onlyShowCategory("design")}
              >
                {text.design}
              </li>
            </ul>
          )}

          {projectList.toShow.length > 0 && (
            <div onClick={changeOrder} className="sortIcon">
              {newest ? <p>+</p> : <p>-</p>}
               {newest ? <HiSortAscending /> : <HiSortDescending />} 
              </div>
              )}
               {filtered && (
                <div onClick={refresh} className="refreshIcon">
                  <IoMdRefresh />
                </div>
              )} 
            </div>
 */
