import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useRecoilValue } from "recoil";
import useMedia from "src/hooks/useMedia";
import {
  aboutYouText,
  IAboutYouText,
} from "src/Models/Texts/PagesText/aboutYou.text";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { baseTheme } from "src/styles/theme/baseTheme";
import { getTextByLang } from "src/utils/getTextByLang";
import LogosCarrousel from "./LogosCarrousel";
import { MeStyled } from "./meStyled";

const breakpoints = baseTheme.breakpoints;
const yearsFrom2018 = new Date().getFullYear() - 2018;

const MeDescription = () => {
  const smallerThanTablet = useMedia(breakpoints.tablet);
  const l = useRecoilValue(LanguageAtom);
  const text: IAboutYouText = getTextByLang(l.code, aboutYouText);
  return (
    <MeStyled smallerThanTablet={smallerThanTablet}>
      <ReactMarkdown>{text.firstParagraph}</ReactMarkdown>
      <div className="logos">
        <LogosCarrousel />
      </div>
    </MeStyled>
  );
};

export default MeDescription;
