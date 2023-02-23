import { IoIosArrowDown } from "react-icons/io";
import { useRecoilState } from "recoil";
import GenericWrapper from "src/components/Wrapper/GenericWrapper";
import {
  availableLanguages,
  IAvailableLanguages,
} from "src/Constants/Languages";
import useMedia from "src/hooks/useMedia";
import {
  LanguageAtom,
  ToggleLanguageSelectorAtom,
} from "src/Recoil/Atoms/LanguageAtom";
import { breakpoints } from "src/styles/theme";
import { LanguageButtons } from "./Styled";

export default function CustomSelect() {
  const [language, setLanguage] = useRecoilState(LanguageAtom);
  const [langSelector, setLangSelector] = useRecoilState(
    ToggleLanguageSelectorAtom
  );
  const handleTrigger = () => {
    setLangSelector(!langSelector);
  };
  const isSmallerThanTablet = useMedia(breakpoints.tablet);
  return (
    <LanguageButtons onClick={handleTrigger} isSelectingLanguage={langSelector}>
      {langSelector && (
        <>
          <div className="selectorLanguage">
            {availableLanguages.map((lang: IAvailableLanguages) => {
              return (
                <div
                  key={lang.code}
                  className={`option ${
                    lang.code === language.code ? "active" : ""
                  }`}
                  onClick={() => {
                    setLanguage(lang);
                    setLangSelector(false);
                  }}
                >
                  <span className="flag">{lang.flag}</span>
                  <p className="langName">
                    {isSmallerThanTablet ? lang.code : lang.name}
                  </p>
                </div>
              );
            })}
          </div>
          <GenericWrapper onClick={() => setLangSelector(false)} />
        </>
      )}
      <div className="trigger">
        <span className="flag">{language.flag}</span>
        <p className="arrow">
          <span className={`icon ${langSelector ? "active" : ""}`}>
            <IoIosArrowDown size={25} />
          </span>
        </p>
      </div>
    </LanguageButtons>
  );
}
