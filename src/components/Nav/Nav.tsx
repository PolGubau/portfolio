import "./NavModule.css";
import { HiSortDescending, HiSortAscending } from "react-icons/hi";
import { useState } from "react";
import { ProyectoInterface } from "src/Interfaces";
import { IoMdRefresh } from "react-icons/io";

export default function Nav({
  filter,
  setFilter,
  allData,
}: {
  filter: ProyectoInterface[];
  setFilter: Function;
  allData: ProyectoInterface[];
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
    setFiltered(false);
  };

  return (
    <>
      <nav className="nav">
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
            Design
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
