import { MouseEventHandler } from "react";
import { errorOnSearch } from "src/Consts";
import { NotFoundStyled } from "./NotFoundStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { cardData } from "src/Data";
export default function NotFoundNav({}: {}): JSX.Element {
  const lang = useRecoilValue(LanguageAtom);
  const [projects, setSearched] = useRecoilState(SearchProjectAtom);
  const resetFilters: MouseEventHandler<HTMLButtonElement> = () => {
    setSearched({
      search: "",
      orderBy: "name",
      toShow: cardData,
    });
  };

  return (
    <NotFoundStyled>
      {lang.code === "EN" && (
        <>
          <h3>{errorOnSearch.English.title}</h3>
          <p>
            {errorOnSearch.English.description}: ({projects.search})
          </p>
          <button className="filterDelete" onClick={resetFilters}>
            {errorOnSearch.English.action}
          </button>
        </>
      )}
      {lang.code === "ES" && (
        <>
          <h3>{errorOnSearch.Spanish.title}</h3>
          <p>
            {errorOnSearch.Spanish.description}: ({projects.search})
          </p>
          <button className="filterDelete" onClick={resetFilters}>
            {errorOnSearch.Spanish.action}
          </button>
        </>
      )}
      {lang.code === "CA" && (
        <>
          <h3>{errorOnSearch.Catalan.title}</h3>
          <p>
            {errorOnSearch.Catalan.description}: ({projects.search})
          </p>
          <button className="filterDelete" onClick={resetFilters}>
            {errorOnSearch.Catalan.action}
          </button>
        </>
      )}
    </NotFoundStyled>
  );
}
