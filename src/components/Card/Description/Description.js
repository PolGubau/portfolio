import React from "react";
import { Languages } from "src/Consts";
import "./Description.css";
import { BsSearch } from "react-icons/bs";
import Madefor from "./MadeFor/MadeFor";

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
       <Madefor
          madeFor={madeFor}
          lang={lang}
          Languages={Languages}
        />
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
