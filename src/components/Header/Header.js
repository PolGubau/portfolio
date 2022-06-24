import * as React from "react";
import { motion } from "framer-motion";
import { Languages } from "../../Service/Consts";
import "./Header.css";
export default function Header({ lang, setLang }) {
  return (
    <>
      <header>
        <section>
          <article>
            <div className="langsContainer">
              <span className="langs" onClick={() => setLang(Languages[0])}>
                {Languages[0]}
              </span>
              <span className="langs" onClick={() => setLang(Languages[1])}>
                {Languages[1]}
              </span>
              <span className="langs" onClick={() => setLang(Languages[2])}>
                {Languages[2]}
              </span>
              <span>Ara mateix: {lang}</span>
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
            <motion.img
              className="meinPhoto"
              src={`images/me.png`}
              alt="Me"
              initial={false}
            />
          </div>
        </section>
      </header>
    </>
  );
}
