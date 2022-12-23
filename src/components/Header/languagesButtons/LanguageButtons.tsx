import { languagesTexts } from "src/Consts";
import { useAppSelector } from "src/redux/app/hooks";
import {
  actualLanguage,
  changeLanguageActionCreator,
} from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import "./LanguageButtons.css";
import { useAppDispatch } from "src/redux/app/hooks";
import {
  availableLangCodesType,
  availableLanguages,
} from "src/Constants/Languages";

const LanguageButtons = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(actualLanguage);

  interface languagesTextsType {
    English: string;
    Spanish: string;
    Catalan: string;
  }
  const text: languagesTextsType = getTextByLang(language, languagesTexts);

  const setNewLanguage = (newLang: availableLangCodesType) => {
    if (newLang === language) return;
    dispatch(changeLanguageActionCreator(newLang));
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="languagesContainer">
      {/* <span onClick={() => setNewLanguage("en")}>{text.English}</span> */}
      {availableLanguages.map((lang) => (
        <span
          key={lang.code}
          onClick={() => setNewLanguage(lang.code)}
          className={lang.code === language ? "active" : ""}
        >
          {text[lang.name as keyof languagesTextsType]}
        </span>
      ))}
    </div>
  );
};

export default LanguageButtons;
