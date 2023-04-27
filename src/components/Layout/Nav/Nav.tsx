import { memo, useState } from "react";
import { navTexts } from "src/Consts";
import { BiSearch } from "react-icons/bi";
import useMedia from "src/hooks/useMedia";

import { getTextByLang } from "src/utils/getTextByLang";
import { NavStyled } from "./NavStyled";

import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { baseTheme } from "src/styles/theme/baseTheme";
import useFilter from "src/hooks/useFilter";

export const Nav = memo((): JSX.Element => {
  const mobile = useMedia(baseTheme.breakpoints.tablet);
  const language = useRecoilValue(LanguageAtom);
  const text = getTextByLang(language.code, navTexts);
  const { filterProjects, projects } = useFilter();

  const filterWord = () => {
    filterProjects();
  };
  const handleChangeInput = (event: any) => {
    const valueSearched: string = event.target.value;
    filterProjects(valueSearched);
  };

  return (
    <NavStyled>
      <div className="contentNav">
        <div className={`searchNav ${mobile ? "mobileSearch" : ""}`}>
          <div
            className={`inputWithIcon ${
              projects.searched.length > 0 ? "activeInput" : ""
            }`}
          >
            <div className="inputIconDiv">
              <BiSearch className="iconSearch" onClick={filterWord} />
            </div>
            <input
              maxLength={20}
              type="text"
              className={`input `}
              value={projects.searched}
              placeholder={text.placeholder}
              onChange={handleChangeInput}
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
