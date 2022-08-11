import React, { useState, useContext } from "react";

import { motion } from "framer-motion";
import "./Header.css";
import LangContext from "src/context/LangContext";
import { headerText } from "src/Consts";
import LanguageButtons from "./languagesButtons/LanguageButtons";

export default function Header() {
  const { lang } = useContext(LangContext);

  return (
    <>
      <header>
        <section>
          <article>
            <div className="langsContainer">
              <LanguageButtons />
            </div>

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
