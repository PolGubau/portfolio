import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IDataBlobs } from "../../dataBlobs";
import { BlobMobileStyled } from "./BlobMobileStyled";

const BlobMobile = ({ blob }: { blob: IDataBlobs }) => {
  return (
    <BlobMobileStyled color={blob.style.color} hasUpperTitle>
      <article>
        <div className="titles">
          {blob.upperTitle && <p className="upperTitle">{blob.upperTitle}</p>}
          <h3>{blob.title}</h3>
        </div>
        <ReactMarkdown className="description">
          {blob.description}
        </ReactMarkdown>
        <p>{blob.date}</p>
      </article>
    </BlobMobileStyled>
  );
};

export default BlobMobile;
