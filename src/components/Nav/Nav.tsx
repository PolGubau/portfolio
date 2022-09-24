import "./NavModule.css";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";
import { memo, useState } from "react";
import { ProyectoInterface } from "src/Interfaces";
import { IoMdRefresh } from "react-icons/io";
import { placeholderInput } from "src/Consts";
import { BiSearch } from "react-icons/bi";
import useMedia from "src/hooks/useMedia";

export const Nav = memo(
  ({
    value,
    setValue,
    filter,
    setFilter,
    allData,
    lang,
    inputSearch,
  }: {
    value: string;
    setValue: Function;
    filter: ProyectoInterface[];
    setFilter: Function;
    allData: ProyectoInterface[];
    lang: any;
    inputSearch: string;
  }): JSX.Element => {
    const mobile = useMedia(450);
    const [newest, setNewest] = useState<boolean>(false);
    const [filtered, setFiltered] = useState<boolean>(false);

    const filteringByTagsAndTitle = () => {
      // when we write in the input, will be checked if the tag, title, or description starts like the value or contains the input value
      setFilter(
        allData.filter(
          (card) =>
            card.tags.some((tag) =>
              tag.toLowerCase().startsWith(value.toLowerCase())
            ) ||
            card.title.toLowerCase().startsWith(value.toLowerCase()) ||
            card.invisibleTags?.some((tag) =>
              tag.toLowerCase().startsWith(value.toLowerCase())
            )
        )
      );
    };

    const changeOrder = () => {
      if (!newest) {
        setFilter([...filter].sort((a, b) => a.year - b.year));
      } else {
        setFilter([...filter].sort((a, b) => b.year - a.year));
      }
      setNewest(!newest);
    };

    const onlyShowCathegory = (category: string) => {
      setFiltered(true);
      setFilter(allData.filter((card) => card.category.English === category));
    };

    const refresh = () => {
      setValue("");
      setFilter(allData);
      setNewest(false);
      setFiltered(false);
    };

    const filterTags = (e: any) => {
      setFiltered(true);

      if (e.target.value === "") {
        setFiltered(false);

        setFilter(allData);
        return;
      }
      filteringByTagsAndTitle();
    };
    if (inputSearch) {
      console.log("gotted", inputSearch);
      setFilter(
        allData.filter((card) =>
          card.tags.some((tag) =>
            tag.toLowerCase().startsWith(inputSearch.toLowerCase())
          )
        )
      );
    }

    const placeHolderInfo =
      lang === "Spanish"
        ? placeholderInput.Spanish
        : lang === "Catalan"
        ? placeholderInput.Catalan
        : placeholderInput.English;
    return (
      <>
        <nav className="nav">
          <div className="contentNav">
            <div className={`searchNav ${mobile ? "mobileSearch" : ""}`}>
              <div
                className={`inputWithIcon ${
                  value.length > 0 ? "activeInput" : ""
                }`}
              >
                <div className="inputIconDiv">
                  <BiSearch
                    className="iconSearch"
                    onClick={filteringByTagsAndTitle}
                  />
                </div>
                <input
                  type="text"
                  className={`input `}
                  value={value}
                  placeholder={placeHolderInfo}
                  onChange={(e) => {
                    setValue(e.target.value);
                    filterTags(e);
                  }}
                />
              </div>
            </div>
            <div className={`filterNav`}>
              {value.length === 0 && (
                <ul className="filterWord-container">
                  <li
                    className="filterWord"
                    onClick={() => onlyShowCathegory("web")}
                  >
                    Web
                  </li>
                  <li
                    className="filterWord"
                    onClick={() => onlyShowCathegory("design")}
                  >
                    {lang === "English" && "Design"}
                    {lang === "Spanish" && "Diseño"}
                    {lang === "Catalan" && "Disseny"}
                  </li>
                </ul>
              )}

              {filter.length > 0 && (
                <div onClick={changeOrder} className="sortIcon">
                  {newest ? <HiSortAscending /> : <HiSortDescending />}
                </div>
              )}
              {filtered && (
                <div onClick={refresh} className="refreshIcon">
                  <IoMdRefresh />
                </div>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
);
export default Nav;
