import { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "src/components/Layout/Nav/Nav";

import NotFoundNav from "./NotFoundNav/NotFoundNav";
import CentralActionsButtons from "src/components/Buttons/ButtonsOnTop/CentralProjectButtons/CentralActionsButtons";
import { CardListStyled, ContentStyled } from "./CardListStyled";
import { OpenedCard } from "../Card/OpenedCard/OpenedCard";
import { ClosedCard } from "../Card/ClosedCard/ClosedCard";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { useRecoilState } from "recoil";
import { IProject } from "src/Interfaces";
import { allProjects } from "src/Models/Texts/ProjectsTexts";

const List = () => {
  const [projectsData, setProjectsData] = useRecoilState(SearchProjectAtom);
  const shown = projectsData.toShow;
  const { path } = useParams();

  const ids = allProjects.map((project) => project.id);

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
