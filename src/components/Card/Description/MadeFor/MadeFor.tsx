import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import { IMadeForTextOneLanguage, madeForText } from "./MadeFor.text";
import "./MadeforModule.css";

//

export default function Madefor({ madeFor = "" }: { madeFor: string }) {
  const { language: lang } = useAppSelector(actualLanguage);
  const text: IMadeForTextOneLanguage = getTextByLang(lang, madeForText);

  if (madeFor) {
    return (
      <p>
        <span>{`${text.madeFor} `}</span>
        <span className="bold">{`${madeFor} `}</span>
      </p>
    );
  } else {
    return <p className="bold">{text.forMe}</p>;
  }
}
