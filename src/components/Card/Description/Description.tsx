import { cardTexts } from "src/Consts";
import "./Description.css";
import { BsSearch } from "react-icons/bs";
import Madefor from "./MadeFor/MadeFor";
import { Link } from "react-router-dom";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";

export default function Description({ project }: { project: any }) {
  const { description, madeFor = "", tags, link } = project;

  const { language: lang } = useAppSelector(actualLanguage);
  const text = getTextByLang(lang, cardTexts);
  const descriptionText = getTextByLang(lang, description);
  const madeForText = getTextByLang(lang, madeFor);
  console.log("madeForText", text.linkButton);

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
          <Madefor madeFor={madeForText} />
        </header>
        <section>
          <p className="Description-descriptionText">{descriptionText}</p>
        </section>
        <section className="Description-footer">
          <a className="Description-search" href={link} target="_blank">
            {text.linkButton}
            <BsSearch />
          </a>
        </section>
      </article>
    </>
  );
}
