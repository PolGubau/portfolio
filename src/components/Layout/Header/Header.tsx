import { getTextByLang } from "src/utils/getTextByLang";
import UpperButtons from "./upperButtons/upperButtons";
import useMedia from "src/hooks/useMedia";
import { HeaderStyled } from "./HeaderStyled";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMountTransition from "src/hooks/useMountTransition";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { baseTheme } from "src/styles/theme/baseTheme";
import { headerText } from "src/Models/Texts/PagesText/home.text";

export default function Header() {
  const l = useRecoilValue(LanguageAtom);
  const text = getTextByLang(l.code, headerText);
  const smallerThanTablet = useMedia(baseTheme.breakpoints.mobile);
  const location = useLocation();
  const isAbout = location.pathname === "/about";
  const [isMounted, setIsMounted] = useState(isAbout);
  const hasTransitionedIn = useMountTransition(isMounted, 1000);
  useEffect(() => {
    if (isAbout) {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, [location]);

  return (
    <>
      <HeaderStyled>
        {smallerThanTablet ? (
          <section>
            <article>
              <div className="langsContainer">
                <UpperButtons />
              </div>
              <h1>{text.title}</h1>
            </article>
            <article className="subTextAndImage">
              <h2>{text.description}</h2>
              <div className="imageContainer">
                <motion.img
                  className="meinPhoto"
                  src={`images/me.webp`}
                  alt="Me"
                  width={120}
                  initial={false}
                />
                {hasTransitionedIn && (
                  <div
                    className={`${isMounted ? "grower" : "growerReversed"}`}
                  ></div>
                )}
              </div>
            </article>
          </section>
        ) : (
          <>
            <section className="sectionInPC">
              <article className="titles">
                <div className="langsContainer">
                  <UpperButtons />
                </div>
                <h1>{text.title}</h1>
                <h2>{text.description}</h2>
              </article>

              <div className="imageContainer">
                <motion.img
                  className="meinPhoto"
                  src={`images/me.webp`}
                  alt="Me"
                  width={120}
                  initial={false}
                />
                {hasTransitionedIn && (
                  <div
                    className={`${isMounted ? "grower" : "growerReversed"}`}
                  ></div>
                )}
              </div>
            </section>
          </>
        )}
      </HeaderStyled>
    </>
  );
}
