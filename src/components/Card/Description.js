import React from "react";
import { Languages } from "src/Service/Consts";
import "./Description.css";
import { BsSearch } from "react-icons/bs";

export default function Description({
  tags = "",
  description = "",
  lang = "English",
  madeFor = "",
  link = "",
}) {
  return (
    <>
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
    </>
  );
}
