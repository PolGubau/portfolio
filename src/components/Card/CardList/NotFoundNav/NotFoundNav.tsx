import { MouseEventHandler } from "react";
import { errorOnSearch } from "src/Consts";
import { NotFoundStyled } from "./NotFoundStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
export default function NotFoundNav({
  value,
  resetFilters,
}: {
  value: string;
  resetFilters: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const lang = useRecoilValue(LanguageAtom);
  return (
    <NotFoundStyled>
      {lang.code === "EN" && (
        <>
          <h3>{errorOnSearch.English.title}</h3>
          <p>
            {errorOnSearch.English.description}: ({value})
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
            {errorOnSearch.Spanish.description}: ({value})
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
            {errorOnSearch.Catalan.description}: ({value})
          </p>
          <button className="filterDelete" onClick={resetFilters}>
            {errorOnSearch.Catalan.action}
          </button>
        </>
      )}
    </NotFoundStyled>
  );
}
