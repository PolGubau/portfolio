import { IoIosArrowDown } from "react-icons/io";
import { useRecoilState } from "recoil";
import GenericWrapper from "src/components/Wrapper/GenericWrapper";
import { availableLanguages, IAvalibleLanguges } from "src/Constants/Languages";
import useMedia from "src/hooks/useMedia";
import {
  LanguageAtom,
  ToggleLanguageSelectorAtom,
} from "src/Recoil/Atoms/LanguageAtom";
import { breakpoints } from "src/styles/theme";
import styled from "styled-components";

const LanguageButtons = styled.div`
  .trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: fixed;
    bottom: 30px;
    left: 25px;
    color: ${(props) => props.theme.colors.text};
    padding: 10px;
    border: none;
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.buttons.base};
    cursor: pointer;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #3c8c9e;
    }
  }
  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 2.3em;
    padding: 0;
    svg {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: fit-content;
    padding: 0;
    margin-left: 10px;
    color: ${(props) => props.theme.colors.buttons.text};

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .active {
      rotate: 180deg;
    }
  }
  .selectorLanguage {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    bottom: 90px;
    left: 25px;
    z-index: 999;
    background-color: ${(props) => props.theme.colors.buttons.base};
    border-radius: 15px;
    gap: 5px;
    padding: 5px;
    .active {
      background-color: ${(props) => props.theme.colors.buttons.active};
    }
    .option {
      width: 100%;
      justify-content: flex-start;
      display: flex;
      align-items: center;
      flex-grow: 1;
      border-radius: 10px;
      padding: 8px;
      gap: 8px;
      padding: 5px;
      color: ${(props) => props.theme.colors.buttons.text};
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.buttons.hover};
      }

      .flag {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-size: 2.3em;
        padding: 0;
        svg {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

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
    <LanguageButtons onClick={handleTrigger}>
      {langSelector && (
        <>
          <div className="selectorLanguage">
            {availableLanguages.map((lang: IAvalibleLanguges) => {
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
                  <p>{isSmallerThanTablet ? lang.code : lang.name}</p>
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
