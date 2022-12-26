import { headerText } from "src/Consts";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import LanguageButtons from "./languagesButtons/LanguageButtons";
import { motion } from "framer-motion";
import useMedia from "src/hooks/useMedia";
import { HeaderStyled } from "./HeaderStyled";

import { breakpoints } from "src/styles/theme";
import { Link } from "react-router-dom";
import { PagesNavStyled } from "./PagesNavStyled";
import { useEffect } from "react";
export default function Header() {
  const { language: lang } = useAppSelector(actualLanguage);
  const text = getTextByLang(lang, headerText);
  const mobile = useMedia(breakpoints.tablet);

  // useEffect to see in witch page we are
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

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
          <>
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
          </>
        )}
        {/* <PagesNavStyled>
          <Link
            to={"/"}
            className={`link ${location.pathname === "/" && "active"}`}
          >
            Projects
          </Link>
          <Link
            className={`link ${location.pathname === "about" && "active"}`}
            to={"/about"}
          >
            About
          </Link>
        </PagesNavStyled> */}
      </HeaderStyled>
    </>
  );
}
