import { useRecoilValue } from "recoil";
import useMedia from "src/hooks/useMedia";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { firstBlobText } from "src/Models/aboutPageText";
import { getTextByLang } from "src/utils/getTextByLang";
import { AboutStructureStyled } from "./AboutStructureStyled";
import Blob from "./Blobs/Blob";
import BlobMobile from "./Blobs/BlobMobile/BlobMobile";
import { dataBlobs } from "./dataBlobs";
import DreamsDone from "./Dreams/DreamsDone";
const yearsSince2018 = new Date().getFullYear() - 2018;
import { baseTheme } from "src/styles/theme/baseTheme";
const breakpoints = baseTheme.breakpoints;
const AboutStructure = () => {
  const smallerThanTablet = useMedia(breakpoints.tablet);
  const l = useRecoilValue(LanguageAtom);
  const text = getTextByLang(l.code, firstBlobText);

  return (
    <AboutStructureStyled smallerThanTablet={smallerThanTablet}>
      <div className="greenCircle"></div>
      <div className="yellowCircle"></div>

      <div className="firstBlob">
        <p>
          {text.beforeYear}
          {` `}
          {yearsSince2018} {` `}
          {text.afterYear}
        </p>
        <p>{text.based}</p>
      </div>
      <section className="dreamsAndPartners">
        <DreamsDone />
      </section>
      <section className="blobsContainer">
        {dataBlobs.map((blob, index) =>
          smallerThanTablet ? (
            <BlobMobile key={index} blob={blob} />
          ) : (
            <Blob key={index} blob={blob} />
          )
        )}
      </section>
    </AboutStructureStyled>
  );
};

export default AboutStructure;
