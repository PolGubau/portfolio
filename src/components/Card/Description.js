import React from "react";
import "./Description.css";
export default function Description({ tags, description, langIndex = 0 }) {
  return (
    <>
      <section>
        <ul className="tagsContainer">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
      <section>
        <p className="descriptionText">{description[langIndex]}</p>
      </section>
    </>
  );
}
