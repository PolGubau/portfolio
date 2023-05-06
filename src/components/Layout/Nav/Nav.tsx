import { memo } from "react";
import { BiSearch } from "react-icons/bi";
import useMedia from "src/hooks/useMedia";
import { getTextByLang } from "src/utils/getTextByLang";
import { NavStyled } from "./NavStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { baseTheme } from "src/styles/theme/baseTheme";
import useFilter from "src/hooks/useFilter";
import { IoMdRefresh } from "react-icons/io";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import Categories from "./Categories/Categories";
import { navTexts } from "src/Models/Texts/PagesText/home.text";
export const Nav = memo((): JSX.Element => {
  const mobile = useMedia(baseTheme.breakpoints.tablet);
  const language = useRecoilValue(LanguageAtom);
  const text = getTextByLang(language.code, navTexts);
  const { filterProjects, projects, toggleAscending, resetSearch } =
    useFilter();

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
              className={`input`}
              value={projects.searched}
              placeholder={text.placeholder}
              onChange={handleChangeInput}
            />
          </div>
          {projects.searched.length === 0 && <Categories />}
          {/* <div className="sortIcon" onClick={toggleAscending}>
            {projects.ascending ? <HiSortAscending /> : <HiSortDescending />}
          </div> */}
        </div>
        {projects.searched && (
          <div onClick={resetSearch} className="refreshIcon">
            <IoMdRefresh />
          </div>
        )}
      </div>
    </NavStyled>
  );
});
export default Nav;
