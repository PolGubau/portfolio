import React from "react";

export default function LanguageButton({
  Languages,
  langsToDisplay,
  Position,
  setLangsToDisplay,
}) {
  return (
    <span
      className={`lang`}
      onClick={() => {
        setLang(Languages[Position]);
        setLangsToDisplay(Position);
      }}
    >
      {Languages[langsToDisplay * 3 + Position]}
    </span>
  );
}
