import React from "react";
import { Languages } from "src/Consts";
import "./Description.css";
import { BsSearch } from "react-icons/bs";

export default function Description({
  tags = "",
  description = "",
  madeFor = "",
  link = "",
  lang = Languages[0],
}) {
  return (
    <>
      <article className="">
        <header className="Description-header">
          <ul className="Description-tagsContainer">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p>
            {lang === Languages[0] && madeFor[lang] && "For "}
            {lang === Languages[1] && madeFor[lang] && "Para "}
            {lang === Languages[2] && madeFor[lang] && "Per a "}
            <b>{madeFor[lang]}</b>.
          </p>
        </header>
        <section>
          <p className="Description-descriptionText">{description[lang]}</p>
        </section>
        <section className="Description-footer">
          <a className="Description-search" href={link} target="_blank">
            <p>
              {lang === Languages[0] && "Search "}
              {lang === Languages[1] && "Échale un vistazo "}
              {lang === Languages[2] && "Fes-li una ullada "}

              <BsSearch />
            </p>
          </a>
        </section>
      </article>
    </>
  );
}
