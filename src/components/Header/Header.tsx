import "./Header.css";
import { headerText } from "src/Consts";
import "../../styles/blobz.min.css";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import LanguageButtons from "./languagesButtons/LanguageButtons";
import { motion } from "framer-motion";

export default function Header() {
  const { language: lang } = useAppSelector(actualLanguage);
  const text = getTextByLang(lang, headerText);

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

            <motion.img
              className="meinPhoto"
              src={`images/me.webp`}
              alt="Me"
              width={120}
              initial={false}
            />
        </section>
      </header>
    </>
  );
}
