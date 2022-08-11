import React, { useState, useContext } from "react";

import { motion } from "framer-motion";
import { Languages } from "../../Consts";
import "./Header.css";
import LangContext from "../../context/LangContext";
import { headerText } from "../../Consts";
import LanguageButton from "./languagesButtons/LanguageButton";
export default function Header() {
  const [langsToDisplay, setLangsToDisplay] = useState(0);

  const { lang, setLang } = useContext(LangContext);

  return (
    <>
      <header>
        <section>
          <article>
            <div className="langsContainer">
              <LanguageButton
                Languages={Languages}
                langsToDisplay={langsToDisplay}
                Position={0}
                setLangsToDisplay={setLangsToDisplay}
              />
              <LanguageButton
                Languages={Languages}
                langsToDisplay={langsToDisplay}
                Position={1}
                setLangsToDisplay={setLangsToDisplay}
              />
              <LanguageButton
                Languages={Languages}
                langsToDisplay={langsToDisplay}
                Position={2}
                setLangsToDisplay={setLangsToDisplay}
              />
            </div>

            {/*  */}
            <h1>{headerText[lang].title}</h1>
            <h3>{headerText[lang].description}</h3>
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
