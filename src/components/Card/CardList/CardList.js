import { useContext, useState } from "react";
import { Card } from "src/components/Card/Card/Card";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { cardData } from "src/Data";
import "./CardList.css";
import LangContext from "src/context/LangContext";
import useMedia from "src/hooks/useMedia";
import Nav from "src/components/Nav/Nav";

function List() {
  const mobile = useMedia();
  const { path } = useParams();
  const { lang } = useContext(LangContext);
  const ids = cardData.map((project) => project.id);

  const [filter, setFilter] = useState(cardData);
  const actualProjects = filter;
  return (
    <>
      <Nav filter={filter} setFilter={setFilter} allData={cardData} />
      <ul className="card-list">
        {actualProjects.map((card, index) => (
          <Card
            key={card.id}
            allData={cardData}
            index={index}
            project={card}
            ids={ids}
            lang={lang}
            isSelected={path === card.path}
            mobile={mobile}
          />
        ))}
      </ul>
    </>
  );
}

export function CardList() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:path" element={<List />} />
      </Routes>
    </>
  );
}