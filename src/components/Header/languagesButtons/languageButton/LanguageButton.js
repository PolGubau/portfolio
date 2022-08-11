import React, { useContext } from "react";
import LangContext from "src/context/LangContext";
import { Languages } from "src/Consts";
import "./LanguageButton.css";
export default function LanguageButton({
  langsToDisplay,
  Position,
  setLangsToDisplay,
}) {
  const { lang, setLang } = useContext(LangContext);
  return (
    <span
      className={`lang` + (lang === Languages[Position] ? " selected" : "")}
      onClick={() => {
        setLang(Languages[Position]);
        setLangsToDisplay(Position);
      }}
    >
      {Languages[langsToDisplay * 3 + Position]}
    </span>
  );
}
