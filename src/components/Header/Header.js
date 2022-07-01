import React, { useState, useContext } from "react";

import { motion } from "framer-motion";
import { Languages } from "../../Consts";
import "./Header.css";
import LangContext from "../../context/LangContext";

export default function Header() {
  const [langsToDisplay, setLangsToDisplay] = useState(0);

  const { lang, setLang } = useContext(LangContext);

  return (
    <>
      <header>
        <section>
          <article>
            <div className="langsContainer">
              <span
                className="langs"
                onClick={() => {
                  setLang(Languages[0]);
                  setLangsToDisplay(0);
                }}
              >
                {Languages[langsToDisplay * 3]}
              </span>
              <span
                className="langs"
                onClick={() => {
                  setLang(Languages[1]);
                  setLangsToDisplay(1);
                }}
              >
                {Languages[langsToDisplay * 3 + 1]}
              </span>
              <span
                className="langs"
                onClick={() => {
                  setLang(Languages[2]);
                  setLangsToDisplay(2);
                }}
              >
                {Languages[langsToDisplay * 3 + 2]}
              </span>
            </div>
            <h1>Pol Gubau Amores</h1>

            <h3>
              {{ lang } === Languages[0] &&
                "Front-End Developer and UX designer."}
              {{ lang } === Languages[1] &&
                "Desarrollador Front-End y diseñador UX."}
              {{ lang } === Languages[2] &&
                "Programador Front-End i dissenyador UX."}
            </h3>
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
