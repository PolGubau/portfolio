import { useRecoilValue } from "recoil";
import { categoriesText } from "src/Models/Texts/PagesText/home.text";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import useFilter from "src/hooks/useFilter";
import { getTextByLang } from "src/utils/getTextByLang";
import { NaCategoriesStyled } from "./CategoriesStyled";

const Categories = () => {
  const state = useRecoilValue(SearchProjectAtom);
  const l = useRecoilValue(LanguageAtom);
  const { onlyShowCategory } = useFilter();

  const filterCategory = (category: string) => {
    onlyShowCategory(category);
  };

  return (
    <NaCategoriesStyled>
      {categoriesText.map((category) => {
        const text = getTextByLang(l.code, category.text);
        return (
          <li key={category.name}>
            <button
              className={`category ${
                state.filteredCategory === category.name
                  ? "category-active"
                  : ""
              }`}
              onClick={() => filterCategory(category.name)}
            >
              {text}
            </button>
          </li>
        );
      })}
    </NaCategoriesStyled>
  );
};
export default Categories;
