import { useContext } from "react";

import { motion } from "framer-motion";
import "./Header.css";
import LangContext from "src/context/LangContext";
import { headerText } from "src/Consts";
import LanguageButtons from "./languagesButtons/LanguageButtons";
import { HeaderTextInterface } from "src/Interfaces";
import "../../styles/blobz.min.css";

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
            <div className="blob tk-blob">
              <motion.img
                className="meinPhoto"
                src={`images/me.webp`}
                alt="Me"
                width={120}
                initial={false}
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
              </svg>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
