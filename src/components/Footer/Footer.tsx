import { motion } from "framer-motion";
import "./Footer.css";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import LangContext from "../../context/LangContext";
import { useContext } from "react";
import { footerText } from "../../Consts";
import { FooterTextInterface } from "src/Interfaces";
export default function Footer() {
  const { lang } = useContext(LangContext);

  let text: FooterTextInterface = footerText.English;
  if (lang === "Spanish") {
    text = footerText.Spanish;
  }
  if (lang === "English") {
    text = footerText.English;
  }
  if (lang === "Catalan") {
    text = footerText.Catalan;
  }

  return (
    <>
      <footer>
        <section>
          <article>
            <h2>Pol Gubau Amores</h2>

            <motion.p>{text.greeting}</motion.p>
          </article>
          <article>
            <a href="files/cv2022.pdf" download>
              <div className="cv">{text.curriculum}</div>
            </a>
          </article>

          <article>
            <ul>
              <li>
                <a href="mailto:gubaupol@gmail.com">
                  <span className="icon">
                    <MdOutlineAlternateEmail />
                  </span>
                  <motion.span>{text.email}</motion.span>
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
                  <motion.span>{text.linkedin}</motion.span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/gubaupol">
                  <span className="icon">
                    <RiGithubLine />
                  </span>
                  <motion.span>{text.github}</motion.span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/polgubi02/">
                  <span className="icon">
                    <FaInstagram />
                  </span>
                  <motion.span>{text.instagram}</motion.span>
                </a>
              </li>
            </ul>
          </article>
        </section>
      </footer>
    </>
  );
}
