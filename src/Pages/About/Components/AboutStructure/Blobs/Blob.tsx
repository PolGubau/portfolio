import { Variants } from "framer-motion";
import { useRecoilValue } from "recoil";
import { IDataStudies } from "src/Models/Texts/StudiesText";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import { BlobStyled } from "./BlobStyle";

const Blob = ({ blob }: { blob: IDataStudies }) => {
  const f = useRecoilValue(LanguageAtom);
  const textDescription = getTextByLang(f.code, blob.description);
  const comeFromLeft: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };
  const comeFromRight: Variants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };
  const hasUpperTitle = blob.upperTitle ? true : false;

  return (
    <BlobStyled
      width={blob.style.width}
      height={blob.style.height}
      marginTop={blob.style.marginTop}
      color={blob.style.color}
      placed={blob.placed}
      hasUpperTitle={hasUpperTitle}
      className="box b2"
      // initial="offscreen"
      // whileInView="onscreen"
      // viewport={{ once: false, amount: "all" }}
      // variants={blob.placed === "left" ? comeFromLeft : comeFromRight}
    >
      <article>
        <div className="titles">
          {blob.upperTitle && (
            <p className="upperTitle">
              {blob.upperTitle}
              {/* <span>{blob.flag}</span> */}
            </p>
          )}
          <h3>{blob.title}</h3>
        </div>
        <p className="content">{textDescription}</p>
        <p className="date">{blob.date}</p>
      </article>
    </BlobStyled>
  );
};

export default Blob;
