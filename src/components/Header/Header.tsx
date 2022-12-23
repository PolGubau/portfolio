import "./Header.css";
import { headerText } from "src/Consts";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import LanguageButtons from "./languagesButtons/LanguageButtons";
import { motion } from "framer-motion";
import useMedia from "src/hooks/useMedia";
import { HeaderStyled } from "./HeaderStyled";
export default function Header() {
  const { language: lang } = useAppSelector(actualLanguage);
  const text = getTextByLang(lang, headerText);
  const mobile = useMedia(800);

  return (
    <>
      <HeaderStyled>
        {mobile ? (
          <section>
            <article>
              <div className="langsContainer">
                <LanguageButtons />
              </div>
              <h1>{text.title}</h1>
            </article>
            <article className="subTextAndImage">
              <h3>{text.description}</h3>
              <motion.img
                className="meinPhoto"
                src={`images/me.webp`}
                alt="Me"
                width={120}
                initial={false}
              />
            </article>
          </section>
        ) : (
          <section>
            <article>
              <div className="langsContainer">
                <LanguageButtons />
              </div>

              <h1>{text.title}</h1>
              <h3>{text.description}</h3>
            </article>
            <motion.img
              className="meinPhoto"
              src={`images/me.webp`}
              alt="Me"
              width={120}
              initial={false}
            />
          </section>
        )}
      </HeaderStyled>
    </>
  );
}
