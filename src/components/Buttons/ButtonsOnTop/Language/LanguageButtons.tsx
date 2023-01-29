import {
  availableLangCodesType,
  availableLanguages,
} from "src/Constants/Languages";
import { useAppDispatch, useAppSelector } from "src/redux/app/hooks";
import {
  actualLanguage,
  changeLanguageActionCreator,
} from "src/redux/features/languageSlice";
import { LangStyled } from "./LangStyled";

const ButtonsOnTop = () => {
  const dispatch = useAppDispatch();
  const languageSetted = useAppSelector(actualLanguage);

  const setNewLanguage = (newLang: availableLangCodesType) => {
    if (newLang === languageSetted) return;
    dispatch(changeLanguageActionCreator(newLang));
    localStorage.setItem("language", newLang);
  };

  return (
    <LangStyled
      name="language"
      onChange={(e) => setNewLanguage(e.target.value as availableLangCodesType)}
    >
      {availableLanguages.map(
        (language) =>
          language.available && (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          )
      )}
    </LangStyled>
  );
};

export default ButtonsOnTop;
