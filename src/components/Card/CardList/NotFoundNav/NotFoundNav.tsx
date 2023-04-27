import { MouseEventHandler } from "react";
import { NotFoundStyled } from "./NotFoundStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { allProjects } from "src/Models/Texts/ProjectsTexts";

export default function NotFoundNav({}: {}): JSX.Element {
  const lang = useRecoilValue(LanguageAtom);
  const [projects, setSearched] = useRecoilState(SearchProjectAtom);

  const resetFilters: MouseEventHandler<HTMLButtonElement> = () => {
    setSearched({
      searched: "",
      orderBy: "name",
      toShow: allProjects,
    });
  };

  return (
    <NotFoundStyled>
      <h1>Not found</h1>
      <button onClick={resetFilters}>Reset filters</button>
    </NotFoundStyled>
  );
}
