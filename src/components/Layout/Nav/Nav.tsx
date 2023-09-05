import { memo } from "react";
import { BiSearch } from "react-icons/bi";
import { getTextByLang } from "src/utils/getTextByLang";
import { NavStyled } from "./NavStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import useFilter from "src/hooks/useFilter";
import { IoMdRefresh } from "react-icons/io";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import Categories from "./Categories/Categories";
import { navTexts } from "src/Models/Texts/PagesText/home.text";
 export const Nav = memo((): JSX.Element => {
  const language = useRecoilValue(LanguageAtom);
  const text = getTextByLang(language.code, navTexts);
  const { filterProjects, projects, toggleAscending, resetSearch } =
    useFilter();

  const filterWord = () => {
    filterProjects();
  };

  return (
    <NavStyled>
      <div className={`seachBar`}>
        <BiSearch onClick={filterWord} />
        <input
          autoFocus
          maxLength={20}
          type="text"
          value={projects.searched}
          placeholder={text.placeholder}
          onChange={(e) => filterProjects(e.target.value)}
        />
      </div>

      <Categories />
      {projects.toShow.length > 0 && (
        <button className="icon" onClick={toggleAscending}>
          {projects.ascending ? <HiSortAscending /> : <HiSortDescending />}
        </button>
      )}
      {projects.searched && (
        <button onClick={resetSearch} className="icon">
          <IoMdRefresh />
        </button>
      )}
    </NavStyled>
  );
});
export default Nav;
