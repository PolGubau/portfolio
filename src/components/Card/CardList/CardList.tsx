import { useParams } from "react-router-dom";
import Nav from "src/components/Layout/Nav/Nav";

import NotFoundNav from "./NotFoundNav/NotFoundNav";
import CentralActionsButtons from "src/components/Buttons/ButtonsOnTop/CentralProjectButtons/CentralActionsButtons";
import { CardListStyled, ContentStyled } from "./CardListStyled";
import { OpenedCard } from "../Card/OpenedCard/OpenedCard";
import { ClosedCard } from "../Card/ClosedCard/ClosedCard";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { useRecoilValue } from "recoil";
import ChangeVisibilityButton from "./ChangeVisibility/ChangeVisibilityButton";
import useFilter from "src/hooks/useFilter";
import { allProjects } from "src/Models/Texts/ProjectsTexts";

const List = () => {
  const { projects } = useFilter();

  const projectList = useRecoilValue(SearchProjectAtom);
  const { path } = useParams();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <ContentStyled>
      <Nav />
      {projectList.toShow.length === 0 && <NotFoundNav />}

      {allProjects.map(
        (card) =>
          card.path === path && <OpenedCard project={card} key={card.id} />
      )}

      <CardListStyled variants={container} initial="hidden" animate="show">
        {projectList.toShow.map((card, index) => (
          <ClosedCard index={index} project={card} key={card.id} />

          // <ClosedCard index={index} project={card} key={card.id} />
        ))}
      </CardListStyled>
      {!projects.searched && <ChangeVisibilityButton />}
      <CentralActionsButtons />
    </ContentStyled>
  );
};

export default List;
