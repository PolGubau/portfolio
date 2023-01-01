import { cardTexts } from "src/Consts";
import "./Description.css";
import { BsSearch } from "react-icons/bs";
import Madefor from "./MadeFor/MadeFor";
import { Link } from "react-router-dom";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IProject } from "src/Interfaces";
import { cardData } from "src/Data";
import { madeForText } from "./MadeFor/MadeFor.text";

export default function Description({
  project,
  id,
  ids,
}: {
  project: IProject;
  id: number;
  ids: number[];
}) {
  const { description, tags, link } = project;

  const { language: lang } = useAppSelector(actualLanguage);
  const descriptionText = getTextByLang(lang, description);

  return (
    <>
      <article className="descriptionContainer">
        <header className="Description-header">
          <Madefor madeFor={project.madeFor} />
        </header>
        <section>
          <p className="Description-descriptionText">{descriptionText}</p>
        </section>

        {/*  */}
      </article>
    </>
  );
}
