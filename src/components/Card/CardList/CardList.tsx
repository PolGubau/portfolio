import { useNavigate, useParams } from "react-router-dom";
import Nav from "src/components/Layout/Nav/Nav";

import NotFoundNav from "./NotFoundNav/NotFoundNav";
import CentralActionsButtons from "src/components/Buttons/ButtonsOnTop/CentralProjectButtons/CentralActionsButtons";
import { CardListStyled, ContentStyled } from "./CardListStyled";
import { OpenedCard } from "../Card/OpenedCard/OpenedCard";
import { ClosedCard } from "../Card/ClosedCard/ClosedCard";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { useRecoilValue } from "recoil";

const List = () => {
  const projectList = useRecoilValue(SearchProjectAtom);
  const { path } = useParams();

  return (
    <ContentStyled>
      <Nav />
      {projectList.toShow.length === 0 && <NotFoundNav />}
      <CardListStyled>
        {projectList.toShow.map((card, index) =>
          path === card.path ? (
            <OpenedCard key={card.id} project={card} />
          ) : (
            <ClosedCard key={card.id} index={index} project={card} />
          )
        )}
      </CardListStyled>
      <CentralActionsButtons />
    </ContentStyled>
  );
};

export default List;
