import * as React from "react";
import { Card } from "./Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { cardData } from "../../Service/Consts";

function List({ match, history, lang }) {
  console.log(lang);

  return (
    <ul className="card-list">
      {cardData.map((card) => (
        <Card
          key={card.id}
          path={card.path}
          lang={lang}
          textColor={card.textColor}
          isSelected={match.params.id === card.id}
          history={history}
          description={card.description}
          width={card.width}
          {...card}
        />
      ))}
    </ul>
  );
}

export function CardList({}) {
  return (
    <Router>
      <Route path={["/:id", "/"]} component={List} />
    </Router>
  );
}
