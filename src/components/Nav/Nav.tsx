import "./NavModule.css";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";
import { useState } from "react";
import { ProyectoInterface } from "src/Interfaces";
import { IoMdRefresh } from "react-icons/io";
import { placeholderInput } from "src/Consts";
import { BiSearch } from "react-icons/bi";
export default function Nav({
  value,
  setValue,
  filter,
  setFilter,
  allData,
  lang,
}: {
  value: string;
  setValue: Function;
  filter: ProyectoInterface[];
  setFilter: Function;
  allData: ProyectoInterface[];
  lang: any;
}): any {
  const [newest, setNewest] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<boolean>(false);
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
    setFilter(allData);
    setNewest(false);
    setFiltered(false);
  };

  const filterTags = (e: any) => {
    if (e.target.value === "") {
      setFilter(allData);
      return;
    }
    // when we write in the input, will be checked if the tag, title, or description starts like the value or contains the input value
    setFilter(
      allData.filter(
        (card) =>
          card.tags.some((tag) =>
            tag.toLowerCase().startsWith(e.target.value.toLowerCase())
          ) ||
          card.title.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
          card.invisibleTags?.some((tag) =>
            tag.toLowerCase().startsWith(e.target.value.toLowerCase())
          )
      )
    );
  };

  const placeHolderInfo =
    lang === "Spanish"
      ? placeholderInput.Spanish
      : lang === "Catalan"
      ? placeholderInput.Catalan
      : placeholderInput.English;

  return (
    <>
      <nav className="nav">
        <div className="inputWithIcon">
          <BiSearch />
          <input
            type="text"
            className="input"
            value={value}
            placeholder={placeHolderInfo}
            onChange={(e) => {
              setValue(e.target.value);
              filterTags(e);
            }}
          />
        </div>
        {filtered && (
          <div className="refresh" onClick={refresh}>
            <IoMdRefresh />
          </div>
        )}

        <ul className="years">
          <li className="year" onClick={() => onlyShowCathegory("web")}>
            Web
          </li>
          <li className="year" onClick={() => onlyShowCathegory("design")}>
            {lang === "English" && "Design"}
            {lang === "Spanish" && "Diseño"}
            {lang === "Catalan" && "Disseny"}
          </li>
        </ul>

        <div onClick={changeOrder} className="sortIcon">
          {filter.length > 0 ? (
            newest ? (
              <HiSortAscending />
            ) : (
              <HiSortDescending />
            )
          ) : (
            <div className="refresh" onClick={refresh}>
              <IoMdRefresh />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
