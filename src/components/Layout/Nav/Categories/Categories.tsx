import { useRecoilValue } from "recoil";
import { categoriesText } from "src/Models/Texts/PagesText/home.text";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import useFilter from "src/hooks/useFilter";
import { getTextByLang } from "src/utils/getTextByLang";

const Categories = () => {
  const state = useRecoilValue(SearchProjectAtom);
  const l = useRecoilValue(LanguageAtom);
  const { onlyShowCategory } = useFilter();

  return (
    <ul className="filterWord-container">
      {categoriesText.map((category) => {
        const text = getTextByLang(l.code, category.text);
        return (
          <li
            key={category.name}
            className={`filterWord ${
              state.filteredCategory === category.name ? "active" : ""
            }`}
            onClick={() => onlyShowCategory(category.name)}
          >
            {text}
          </li>
        );
      })}
    </ul>
  );
};
export default Categories;
