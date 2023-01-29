import { MouseEventHandler } from "react";
import { errorOnSearch } from "src/Consts";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { NotFoundStyled } from "./NotFoundStyled";
export default function NotFoundNav({
  value,
  resetFilters,
}: {
  value: string;
  resetFilters: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const lang = useAppSelector(actualLanguage);
  return (
    <NotFoundStyled>
      {lang === "English" && (
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
      {lang === "Spanish" && (
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
      {lang === "Catalan" && (
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
