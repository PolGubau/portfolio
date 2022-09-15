import { useContext, useState } from "react";
import { Card } from "src/components/Card/Card/Card";
import { Route, Routes, useParams } from "react-router-dom";
import { cardData } from "src/Data";
import "./CardList.css";
import LangContext from "src/context/LangContext";
import useMedia from "src/hooks/useMedia";
import Nav from "src/components/Nav/Nav";

function List() {
  const mobile = useMedia();
  const params = useParams();
  const { lang } = useContext(LangContext);
  const ids = cardData.map((project) => project.title);

  const [filter, setFilter] = useState(cardData);
  console.log("Filter", filter);
  const actualProjects = filter;
  return (
    <>
      <Nav filter={filter} setFilter={setFilter} allData={cardData} />
      <ul className="card-list">
        {actualProjects.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            project={card}
            ids={ids}
            lang={lang}
            isSelected={params.id === card.title}
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
        <Route
          path="/:id"
          element={
            <>
              One
              <List />
            </>
          }
        />
      </Routes>
    </>
  );
}
