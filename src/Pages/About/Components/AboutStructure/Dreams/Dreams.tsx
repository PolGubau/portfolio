import { DreamsStyled } from "./DreamsStyled";
import EachDream from "./EachDream/EachDream";
import useMedia from "src/hooks/useMedia";
import { DreamsList } from "../../../../../Models/Texts/dreamsText/DreamList";
import { baseTheme } from "src/styles/theme/baseTheme";
import {
  aboutYouText,
  IAboutYouText,
} from "src/Models/Texts/PagesText/aboutYou.text";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
const breakpoints = baseTheme.breakpoints;

const Dreams = () => {
  const smallerThanTablet = useMedia(breakpoints.tablet);
  const l = useRecoilValue(LanguageAtom);
  const text: IAboutYouText = getTextByLang(l.code, aboutYouText);
  return (
    <DreamsStyled smallerThanTablet={smallerThanTablet}>
      <h3>{text.dreamsTitle}</h3>
      <ul>
        {DreamsList.map((dream) => (
          <EachDream dream={dream} key={dream.id} />
        ))}
      </ul>
    </DreamsStyled>
  );
};

export default Dreams;
