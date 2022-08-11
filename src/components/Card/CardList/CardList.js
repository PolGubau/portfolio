import React, { useContext } from "react";
import { Card } from "src/components/Card/Card/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { cardData } from "src/Data";
import "./CardList.css";
import LangContext from "src/context/LangContext";
import useMedia from "src/hooks/useMedia";

function List({ match, history }) {
  const mobile = useMedia();

  const { lang } = useContext(LangContext);
  const ids = [];
  cardData.map((card) => {
    ids.push(card.id);
  });

  return (
    <ul className="card-list">
      {cardData.map((card, index) => (
        <Card
          index={index}
          ids={ids}
          key={card.id}
          path={card.path}
          lang={lang}
          textColor={card.textColor}
          isSelected={match.params.id === card.id}
          history={history}
          description={card.description}
          madeFor={card.madeFor}
          width={card.width}
          link={card.link}
          mobile={mobile}
          tags={card.tags}
          {...card}
        />
      ))}
    </ul>
  );
}

export function CardList() {
  return (
    <Router>
      <Route path={["/:id", "/"]} component={List} />
    </Router>
  );
}
