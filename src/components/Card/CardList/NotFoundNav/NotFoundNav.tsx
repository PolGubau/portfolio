import { MouseEventHandler } from "react";
import { errorOnSearch } from "src/Consts";
import "./NotFoundNav.css";
export default function NotFoundNav({
  lang,
  value,
  resetFilters,
}: {
  value: string;
  lang: string;
  resetFilters: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
