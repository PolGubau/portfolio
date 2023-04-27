import { MouseEventHandler } from "react";
import { NotFoundStyled } from "./NotFoundStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { allProjects } from "src/Models/Texts/ProjectsTexts";
import notFoundText, {
  INotFound,
} from "src/Models/Texts/PagesText/notFound.text";
import { getTextByLang } from "src/utils/getTextByLang";

export default function NotFoundNav({}: {}): JSX.Element {
  const lang = useRecoilValue(LanguageAtom);
  const text: INotFound = getTextByLang(lang.code, notFoundText);
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
      <h1>{text.title}</h1>
      <button onClick={resetFilters}>{text.buttonResetFilters}</button>
    </NotFoundStyled>
  );
}
