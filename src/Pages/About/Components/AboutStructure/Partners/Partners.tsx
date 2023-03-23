import { useRecoilValue } from "recoil";
import AlmatoIcon from "src/assets/logos/brands/Almato";
import BinanceIcon from "src/assets/logos/brands/Binance";
import CaixaBankIcon from "src/assets/logos/brands/CaixaBank";
import HereticsIcon from "src/assets/logos/brands/Heretics";
import MediaMarkt from "src/assets/logos/brands/MediaMarkt";
import MesalvoIcon from "src/assets/logos/brands/Mesalvo";
import NovartisIcon from "src/assets/logos/brands/Novartis";
import NuweIcon from "src/assets/logos/brands/Nuwe";
import SantanderIcon from "src/assets/logos/brands/Santander";
import UabIcon from "src/assets/logos/brands/UabIcon";

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
      <div className="logosGrid">
        <BinanceIcon />
        <HereticsIcon />
        <AlmatoIcon />
        <SantanderIcon />
        <MediaMarkt />
        <CaixaBankIcon />
        <MesalvoIcon />
        <UabIcon />
        <NuweIcon />
        <NovartisIcon />
      </div>
    </PartnersStyled>
  );
};
export default Partners;
