import { useState } from "react";
import { Languages } from "../Consts";

// function that changes current language by prop
export default function changeLang(language) {
  const [lang, setLang] = useState(Languages[0]);

  if (language) setLang(language);
  return lang;
}
