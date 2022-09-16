import { useContext } from "react";

import { motion } from "framer-motion";
import "./Header.css";
import LangContext from "src/context/LangContext";
import { headerText } from "src/Consts";
import LanguageButtons from "./languagesButtons/LanguageButtons";
import { HeaderTextInterface } from "src/Interfaces";

export default function Header() {
  const { lang } = useContext(LangContext);

  let text: HeaderTextInterface = headerText.English;
  if (lang === "Spanish") {
    text = headerText.Spanish;
  }
  if (lang === "English") {
    text = headerText.English;
  }
  if (lang === "Catalan") {
    text = headerText.Catalan;
  }
  return (
    <>
      <header>
        <section>
          <article>
            <div className="langsContainer">
              <LanguageButtons />
            </div>

            <h1>{text.title}</h1>
            <h3>{text.description}</h3>
          </article>

          <div className="avatar">
            <a href="/">
              <motion.img
                className="meinPhoto"
                src={`images/me.webp`}
                alt="Me"
                initial={false}
              />
            </a>
          </div>
        </section>
      </header>
    </>
  );
}
