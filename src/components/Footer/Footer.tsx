import { motion } from "framer-motion";
import "./Footer.css";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { footerText } from "src/Consts";
import { FooterTextInterface } from "src/Interfaces";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
export default function Footer() {
  const { language } = useAppSelector(actualLanguage);
  const text: FooterTextInterface = getTextByLang(language, footerText);
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
                  href="https://www.linkedin.com/in/polgubauamores/"
                >
                  <span className="icon">
                    <RiLinkedinLine />
                  </span>
                  <motion.span>{text.linkedin}</motion.span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/polgubau">
                  <span className="icon">
                    <RiGithubLine />
                  </span>
                  <motion.span>{text.github}</motion.span>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/polgubau/">
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
