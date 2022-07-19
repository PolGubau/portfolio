import * as React from "react";
import { motion } from "framer-motion";
import { Languages } from "../../Consts";
import "./Footer.css";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import LangContext from "../../context/LangContext";
import { useContext } from "react";
import { footerText } from "../../Consts";
export default function Footer() {
  const { lang } = useContext(LangContext);

  return (
    <>
      <footer>
        <section>
          <article>
            <h2>Pol Gubau Amores</h2>

            <motion.p>{footerText[lang].greeting}</motion.p>
          </article>
          <article>
            <a href="files/cv2022.pdf" download>
              <div className="cv">{footerText[lang].curriculum}</div>
            </a>
          </article>
          {/*  */}
          <article>
            <ul>
              <li>
                <a href="mailto:gubaupol@gmail.com">
                  <span className="icon">
                    <MdOutlineAlternateEmail />
                  </span>
                  <motion.span>{footerText[lang].email}</motion.span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/pol-gubau-amores-398898184/"
                >
                  <span className="icon">
                    <RiLinkedinLine />
                  </span>
                  <motion.span>{footerText[lang].linkedin}</motion.span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/gubaupol">
                  <span className="icon">
                    <RiGithubLine />
                  </span>
                  <motion.span>{footerText[lang].github}</motion.span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/polgubi02/">
                  <span className="icon">
                    <FaInstagram />
                  </span>
                  <motion.span>{footerText[lang].instagram}</motion.span>
                </a>
              </li>
            </ul>
          </article>
        </section>
      </footer>
    </>
  );
}
