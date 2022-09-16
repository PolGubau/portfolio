import { createContext, useState } from "react";
import { Languages } from "../Consts";

const LangContext = createContext({
  lang: Languages[0],
  setLang: (lang: string) => {},
});
export function LangProvider({ children }: any) {
  const [lang, setLang] = useState(Languages[0]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
export default LangContext;
