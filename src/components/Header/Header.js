import * as React from "react";
import { motion } from "framer-motion";
import { Languages } from "../../Service/Consts";
import "./Header.css";

import { useState } from "react";
//
export default function Header({ lang, setLang }) {
  const [langsToDisplay, setLangsToDisplay] = useState(0);

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
              {/* <span>Ara mateix: {lang}</span> */}
            </div>
            <h1>Pol Gubau Amores</h1>

            <h3>
              {lang === Languages[0] && "Front-End Developer and UX designer."}
              {lang === Languages[1] &&
                "Desarrollador Front-End y diseñador UX."}
              {lang === Languages[2] &&
                "Programador Front-End i dissenyador UX."}
            </h3>
          </article>
          <div className="avatar">
            <a href="/">
              <motion.img
                className="meinPhoto"
                src={`images/me.png`}
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
