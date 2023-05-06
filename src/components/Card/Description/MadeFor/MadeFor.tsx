import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import { IMadeForTextOneLanguage, madeForText } from "./MadeFor.text";
import "./MadeforModule.css";
import { useRecoilValue } from "recoil";
import { ITextByLanguage } from "src/Interfaces";
//

export default function Madefor({
  madeFor,
}: {
  madeFor: ITextByLanguage | undefined;
}) {
  const l = useRecoilValue(LanguageAtom);

  const text: IMadeForTextOneLanguage = getTextByLang(l.code, madeForText);
  const whoIMadeFor = madeFor ? getTextByLang(l.code, madeFor) : "";

  return !whoIMadeFor ? (
    <p className="bold">{text.forMe}</p>
  ) : (
    <p>
      <span>{`${text.madeFor} `}</span>
      <span className="bold">{`${whoIMadeFor} `}</span>
    </p>
  );
}
