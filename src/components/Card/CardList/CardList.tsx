import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardData } from "src/Data";
import Nav from "src/components/Nav/Nav";

import NotFoundNav from "./NotFoundNav/NotFoundNav";
import CentralActionsButtons from "src/components/Buttons/ButtonsOnTop/CentralProjectButtons/CentralActionsButtons";
import { CardListStyled, ContentStyled } from "./CardListStyled";
import { OpenedCard } from "../Card/OpenedCard/OpenedCard";
import { ClosedCard } from "../Card/ClosedCard/ClosedCard";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { useRecoilState } from "recoil";

const List = () => {
  const [projectsData, setProjectsData] = useRecoilState(SearchProjectAtom);
  const shown = projectsData.toShow;
  const { path } = useParams();

  const ids = cardData.map((project) => project.id);

  return (
    <ContentStyled>
      <Nav />
      {shown.length === 0 && <NotFoundNav />}
      <CardListStyled>
        {shown.map((card, index) =>
          path === card.path ? (
            <OpenedCard key={card.id} project={card} ids={ids} />
          ) : (
            <ClosedCard key={card.id} index={index} project={card} ids={ids} />
          )
        )}
      </CardListStyled>
      <CentralActionsButtons />
    </ContentStyled>
  );
};

export default List;
