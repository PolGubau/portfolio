import React, { useContext } from "react";
import { Card } from "src/components/Card/Card/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { cardData } from "src/Data";
import "./CardList.css";
import LangContext from "src/context/LangContext";
import useMedia from "src/hooks/useMedia";

function List({ match }) {
  const mobile = useMedia();

  const { lang } = useContext(LangContext);
  const ids = [];
  cardData.map((card) => {
    ids.push(card.id);
  });

  return (
    <>
      nav
      <ul className="card-list">
        {cardData.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            project={card}
            ids={ids}
            lang={lang}
            isSelected={match.params.id === card.id}
            mobile={mobile}
          />
        ))}
      </ul>
    </>
  );
}

export function CardList() {
  return (
    <Router>
      {/* Urls posibles para que me enseñe la lista de cards */}
      <Route path={["/:id", "/"]} component={List} />
    </Router>
  );
}
