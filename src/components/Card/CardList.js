import * as React from "react";
import { Card } from "./Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { cardData } from "../../Service/Consts";

const List = ({ match, history, lang }) => (
  <ul className="card-list">
    {cardData.map((card) => (
      <Card
        key={card.id}
        path={card.path}
        lang={lang}
        isSelected={match.params.id === card.id}
        history={history}
        description={card.description}
        {...card}
      />
    ))}
  </ul>
);

export const CardList = ({ lang }) => (
  <Router>
    <Route path={["/:id", "/"]} render={() => <List {...lang} />} />
  </Router>
);
