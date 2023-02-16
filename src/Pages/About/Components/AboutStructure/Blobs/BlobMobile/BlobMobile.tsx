import { IDataBlobs } from "../../dataBlobs";
import { BlobMobileStyled } from "./BlobMobileStyled";

const BlobMobile = ({ blob }: { blob: IDataBlobs }) => {
  return (
    <BlobMobileStyled
      color={blob.style.color}
      hasUpperTitle={blob.upperTitle ? true : false}
    >
      <article>
        <div className="titles">
          {blob.upperTitle && <p className="upperTitle">{blob.upperTitle}</p>}
          <h3>{blob.title}</h3>
        </div>
        <p>{blob.description}</p>
        <p>{blob.date}</p>
      </article>
    </BlobMobileStyled>
  );
};

export default BlobMobile;
