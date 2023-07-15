import useMedia from "src/hooks/useMedia";
import { AboutStructureStyled } from "./AboutStructureStyled";
import Blob from "./Blobs/Blob";
import BlobMobile from "./Blobs/BlobMobile/BlobMobile";

import DreamsDone from "./Dreams/Dreams";
import { baseTheme } from "src/styles/theme/baseTheme";
import MyDescription from "./Dreams/Me/meDescription";
import { dataStudies } from "src/Models/Texts/StudiesText";
import Partners from "./Partners";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { getTextByLang } from "src/utils/getTextByLang";
import {
  aboutYouText,
  IAboutYouText,
} from "src/Models/Texts/PagesText/aboutYou.text";
import MainTitle from "./MainTitle/MainTitle";
const breakpoints = baseTheme.breakpoints;

//
const AboutStructure = () => {
  const smallerThanTablet = useMedia(breakpoints.tablet);
  const l = useRecoilValue(LanguageAtom);
  const text: IAboutYouText = getTextByLang(l.code, aboutYouText);
  return (
    <AboutStructureStyled smallerThanTablet={smallerThanTablet}>
      <div className="greenCircle"></div>
      <div className="yellowCircle"></div>

      <MainTitle />

      <section className="descriptionAndDreams">
        <MyDescription />
        <DreamsDone />
      </section>
      <section className="blobsContainer">
        <div className="title">
          <h3>{text.studiesTitle} </h3>
        </div>
        {dataStudies.map((blob, index) =>
          smallerThanTablet ? (
            <BlobMobile key={index} blob={blob} />
          ) : (
            <Blob key={index} blob={blob} />
          )
        )}
      </section>
      <Partners />
    </AboutStructureStyled>
  );
};

export default AboutStructure;
