import { useRecoilValue } from "recoil";
import {
  aboutYouText,
  IAboutYouText,
} from "src/Models/Texts/PagesText/aboutYou.text";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import { PartnersStyled } from "./style/Partners.styled";

const Partners = () => {
  const l = useRecoilValue(LanguageAtom);
  const text: IAboutYouText = getTextByLang(l.code, aboutYouText);
  return (
    <PartnersStyled>
      <div className="title">
        <h3>{text.partnersTitle}</h3>
      </div>
      logos
    </PartnersStyled>
  );
};
export default Partners;
