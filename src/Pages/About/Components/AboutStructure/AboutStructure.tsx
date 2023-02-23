import useMedia from "src/hooks/useMedia";
import { breakpoints } from "src/styles/theme";
import { AboutStructureStyled } from "./AboutStructureStyled";
import Blob from "./Blobs/Blob";
import BlobMobile from "./Blobs/BlobMobile/BlobMobile";
import { dataBlobs } from "./dataBlobs";
import DreamsDone from "./Dreams/DreamsDone";
const yearsSince2018 = new Date().getFullYear() - 2018;

const AboutStructure = () => {
  const smallerThanTablet = useMedia(breakpoints.tablet);
  console.log("ChangingSize", smallerThanTablet);
  const dataSinceSecond = dataBlobs.filter((blob, index) => index > 0);

  return (
    <AboutStructureStyled smallerThanTablet={smallerThanTablet}>
      <div className="greenCircle"></div>
      <div className="yellowCircle"></div>

      <div className="firstBlob">
        <p>An art background and {yearsSince2018} years of experience.</p>
        <p>Based in Barcelona.</p>
      </div>
      <section className="dreamsAndPartners">
        <DreamsDone />
      </section>
      <section className="blobsContainer">
        {dataSinceSecond.map((blob, index) =>
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
