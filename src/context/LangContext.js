import React, { createContext, useState } from "react";
import { Languages } from "../Consts";

const LangContext = createContext();

export function langProvider({ children }) {
  const [lang, setLang] = useState(Languages[0]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContext;
