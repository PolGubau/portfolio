import { Variants, motion } from "framer-motion";
import { IDataBlobs } from "../dataBlobs";
import { BlobStyled } from "./BlobStyle";

const Blob = ({ blob }: { blob: IDataBlobs }) => {
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
      hasUpperTitle
      className="box b2"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: "all" }}
      variants={blob.placed === "left" ? comeFromLeft : comeFromRight}
    >
      <article>
        <div className="titles">
          {blob.upperTitle && <p className="upperTitle">{blob.upperTitle}</p>}
          <h3>{blob.title}</h3>
        </div>
        <p>{blob.description}</p>
        <p>{blob.date}</p>
      </article>
    </BlobStyled>
  );
};

export default Blob;
