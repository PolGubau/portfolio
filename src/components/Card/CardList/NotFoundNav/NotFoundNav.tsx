import { NotFoundStyled } from "./NotFoundStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import notFoundText, {
  INotFound,
} from "src/Models/Texts/PagesText/notFound.text";
import { getTextByLang } from "src/utils/getTextByLang";
import useFilter from "src/hooks/useFilter";

export default function NotFoundNav({}: {}): JSX.Element {
  const lang = useRecoilValue(LanguageAtom);
  const text: INotFound = getTextByLang(lang.code, notFoundText);
  const { resetSearch } = useFilter();

  return (
    <NotFoundStyled>
      <h1>{text.title}</h1>
      <button onClick={resetSearch}>{text.buttonResetFilters}</button>
    </NotFoundStyled>
  );
}
