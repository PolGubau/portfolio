import { memo } from "react";
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
  const { search } = projectList;

  // const filteringByTagsAndTitle = () => {

  //   setFilter(
  //     allData.filter(
  //       (card) =>
  //         card.tags.some((tag) =>
  //           tag.toLowerCase().startsWith(search.toLowerCase())
  //         ) ||
  //         card.title.toLowerCase().startsWith(search.toLowerCase()) ||
  //         card.invisibleTags?.some((tag) =>
  //           tag.toLowerCase().startsWith(searched.toLowerCase())
  //         )
  //     )
  //   );
  // };

  // const changeOrder = () => {
  //   if (!newest) {
  //     setFilter([...filter].sort((a, b) => a.year - b.year));
  //   } else {
  //     setFilter([...filter].sort((a, b) => b.year - a.year));
  //   }
  //   setNewest(!newest);
  // };

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

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProjectList({
      ...projectList,
      search: event.target.value,
    });
  };

  return (
    <NavStyled>
      <div className="contentNav">
        <div className={`searchNav ${mobile ? "mobileSearch" : ""}`}>
          <div
            className={`inputWithIcon ${
              search.length > 0 ? "activeInput" : ""
            }`}
          >
            <div className="inputIconDiv">
              <BiSearch
                className="iconSearch"
                // onClick={filteringByTagsAndTitle}
              />
            </div>
            <input
              maxLength={20}
              type="text"
              className={`input `}
              value={search}
              placeholder={text.placeholder}
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
        <div className={`filterNav`}>
          {search.length === 0 && (
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

          {/* {filter.length > 0 && (
              <div onClick={changeOrder} className="sortIcon">
                {newest ? <HiSortAscending /> : <HiSortDescending />}
              </div>
            )}
            {filtered && (
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
