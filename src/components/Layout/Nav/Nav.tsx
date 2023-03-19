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

  // const onlyShowCategory = (category: string) => {
  //   setFiltered(true);
  //   setFilter(allData.filter((card) => card.category.English === category));
  // };

  // const refresh = () => {
  //   setFilter(allData);
  //   setNewest(false);
  //   setFiltered(false);
  //   setSearched("");
  // };

  // const filterTags = (e: any) => {
  //   setFiltered(true);

  //   if (e.target.value === "") {
  //     setFiltered(false);

  //     setFilter(allData);
  //     return;
  //   }
  //   filteringByTagsAndTitle();
  // };
  // if (searched) {
  //   setFilter(
  //     allData.filter((card) =>
  //       card.tags.some((tag) =>
  //         tag.toLowerCase().startsWith(searched.toLowerCase())
  //       )
  //     )
  //   );
  // }
  const projectsFiltered = () => {
    const filteredProjects = projectList.toShow.filter(
      (project) =>
        project.tags.some((tag) =>
          tag.toLowerCase().startsWith(searched.toLowerCase())
        ) ||
        project.title.toLowerCase().startsWith(searched.toLowerCase()) ||
        project.invisibleTags?.some((tag) =>
          tag.toLowerCase().startsWith(searched.toLowerCase())
        )
    );

    setProjectList({
      ...projectList,
      toShow: filteredProjects,
    });
    console.log(projectList);
  };
  const handleSearchTermChange = (event: any) => {
    const valueSearched = event.target.value;

    const newValue = {
      searched: valueSearched,
      orderBy: projectList.orderBy,
      toShow: projectList.toShow,
    };
    console.log(newValue);

    setProjectList(newValue);
    projectsFiltered();
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
              defaultValue={searched}
              placeholder={text.placeholder}
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
        <div className={`filterNav`}>
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
              {/* {newest ? <HiSortAscending /> : <HiSortDescending />} */}
            </div>
          )}
          {/* {filtered && (
            <div onClick={refresh} className="refreshIcon">
              <IoMdRefresh />
            </div>
          )} */}
        </div>
      </div>
    </NavStyled>
  );
});
export default Nav;
