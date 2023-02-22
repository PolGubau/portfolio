import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import { IMadeForTextOneLanguage, madeForText } from "./MadeFor.text";
import "./MadeforModule.css";
import { useRecoilValue } from "recoil";
//

export default function Madefor({
  madeFor,
}: {
  madeFor:
    | undefined
    | {
        English: string;
        Spanish: string;
        Catalan: string;
      };
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