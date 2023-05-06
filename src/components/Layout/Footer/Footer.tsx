import { motion } from "framer-motion";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FooterTextInterface } from "src/Interfaces";
import { getTextByLang } from "src/utils/getTextByLang";
import { FooterStyled } from "./FooterStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { footerText } from "src/Models/Texts/PagesText/home.text";
export default function Footer() {
  const l = useRecoilValue(LanguageAtom);
  const text: FooterTextInterface = getTextByLang(l.code, footerText);
  return (
    <>
      <FooterStyled>
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
      </FooterStyled>
    </>
  );
}
