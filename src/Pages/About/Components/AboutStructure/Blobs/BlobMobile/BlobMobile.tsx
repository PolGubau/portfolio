import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useRecoilValue } from "recoil";
import { IDataStudies } from "src/Models/Texts/StudiesText";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import { BlobMobileStyled } from "./BlobMobileStyled";

const BlobMobile = ({ blob }: { blob: IDataStudies }) => {
  const f = useRecoilValue(LanguageAtom);
  const textDescription = getTextByLang(f.code, blob.description);
  return (
    <BlobMobileStyled color={blob.style.color} hasUpperTitle>
      <article>
        <div className="titles">
          {blob.upperTitle && <p className="upperTitle">{blob.upperTitle}</p>}
          <h3>{blob.title}</h3>
        </div>
        <ReactMarkdown className="description">{textDescription}</ReactMarkdown>
        <p>{blob.date}</p>
      </article>
    </BlobMobileStyled>
  );
};

export default BlobMobile;
