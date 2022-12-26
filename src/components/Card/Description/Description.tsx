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
  const text = getTextByLang(lang, cardTexts);
  const descriptionText = getTextByLang(lang, description);

  const actualID = ids.indexOf(id);
  //da la posición de la carta actual en el array ids
  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];

  const prevPath = cardData?.find((project) => project.id === prevID)?.path;
  const nextPath = cardData?.find((project) => project.id === nextID)?.path;

  return (
    <>
      <article>
        <header className="Description-header">
          <ul className="Description-tagsContainer">
            {tags.map((tag: string) => (
              <Link
                key={tag}
                to="/"
                state={{
                  inputSearch: tag,
                }}
                className="Description-tag"
              >
                {tag}
              </Link>
            ))}
          </ul>
          <Madefor madeFor={project.madeFor} />
        </header>
        <section>
          <p className="Description-descriptionText">{descriptionText}</p>
        </section>

        {/*  */}
        <section className="Description-footer">
          <Link to={`/${prevPath}`} className="changeProjectLink">
            <FaArrowLeft size={25} />
          </Link>
          <a className="Description-search" href={link} target="_blank">
            {text.linkButton}
            <BsSearch />
          </a>{" "}
          <Link to={`/${nextPath}`} className="changeProjectLink">
            <FaArrowRight size={25} />
          </Link>
        </section>
      </article>
    </>
  );
}
