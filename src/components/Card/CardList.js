import * as React from "react";
import { Card } from "./Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { cardData } from "../../Service/Data";
import "./CardList.css";
import langHook from "../../hooks/langHook";

function List({ match, history }) {
  const lang = langHook();
  const ids = [];
  cardData.map((card) => {
    ids.push(card.id);
  });
  return (
    <ul className="card-list">
      {cardData.map((card) => (
        <Card
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
