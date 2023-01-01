import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import { IMadeForTextOneLanguage, madeForText } from "./MadeFor.text";
import "./MadeforModule.css";

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
  const { language: lang } = useAppSelector(actualLanguage);

  const text: IMadeForTextOneLanguage = getTextByLang(lang, madeForText);
  const whoIMadeFor = madeFor ? getTextByLang(lang, madeFor) : "";

  return !whoIMadeFor ? (
    <p className="bold">{text.forMe}</p>
  ) : (
    <p>
      <span>{`${text.madeFor} `}</span>
      <span className="bold">{`${whoIMadeFor} `}</span>
    </p>
  );
}
