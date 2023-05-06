import { useRecoilValue } from "recoil";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import {
  aboutYouText,
  IAboutYouText,
} from "src/Models/Texts/PagesText/aboutYou.text";
import { closeSpring } from "src/components/Card/utils/animations";
import { MainTitleStyled } from "./MainTitleStyled";

const MainTitle = () => {
  const l = useRecoilValue(LanguageAtom);
  const text: IAboutYouText = getTextByLang(l.code, aboutYouText);

  return (
    <MainTitleStyled
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={closeSpring}
      exit={{ opacity: 0, x: -100 }}
      whileTap={{ scale: 0.9 }}
      onMouseLeave={(e) => {
        const image = e.target as HTMLImageElement;
        image.style.transform = `rotateY(0deg) rotateX(0deg)`;
        image.style.transition = "all 0.6s ease";
      }}
      onMouseEnter={(e) => {
        const image = e.target as HTMLImageElement;
        image.style.transform = `rotateY(0deg) rotateX(0deg)`;
        image.style.transition = "all 0.1s ease";
      }}
      onMouseMove={(e) => {
        const image = e.target as HTMLImageElement;
        const x = image.offsetLeft;
        const y = image.offsetTop;
        const mouseX = e.pageX - x;
        const mouseY = e.pageY - y;
        const width = image.offsetWidth;
        const height = image.offsetHeight;

        const amountX = 40;
        const amountY = 15;

        const rotateY = (mouseX / width) * amountX - amountX / 2;
        const rotateX = (mouseY / height) * amountY - amountY / 2;

        image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

        image.style.transition = "all 0.1s ease";
      }}
    >
      {text.mainTitle}
    </MainTitleStyled>
  );
};
export default MainTitle;
