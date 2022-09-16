import React, { useState } from "react";
import LanguageButton from "./languageButton/LanguageButton";
import "./LanguageButtons.css";
export default function LanguageButtons() {
  const [langsToDisplay, setLangsToDisplay] = useState(0);

  return (
    <div className="languagesContainer">
      <LanguageButton
        Position={0}
        langsToDisplay={langsToDisplay}
        setLangsToDisplay={setLangsToDisplay}
      />
      <LanguageButton
        Position={1}
        langsToDisplay={langsToDisplay}
        setLangsToDisplay={setLangsToDisplay}
      />
      <LanguageButton
        Position={2}
        langsToDisplay={langsToDisplay}
        setLangsToDisplay={setLangsToDisplay}
      />
    </div>
  );
}
