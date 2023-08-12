import Nav from "src/components/Layout/Nav/Nav";
import NotFoundNav from "./NotFoundNav/NotFoundNav";
import { CardListStyled, ContentStyled } from "./CardListStyled";
import { ClosedCard } from "../Card/ClosedCard/ClosedCard";
import { SearchProjectAtom } from "src/Recoil/Atoms/SearchProjectAtom";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useModal from "src/hooks/useModal";
import { IProject } from "src/Interfaces";
import { allProjects } from "src/utils";
import { OpenedCard } from "../Card/OpenedCard";
import { useGoTo } from "src/hooks";

const List = () => {
  const { path } = useParams<{ path: string }>();
  const { triggerModal, closeModal } = useModal();
  const { goThere } = useGoTo();

  const handleCloseModal = () => {
    closeModal();
    goThere("/");
  };

  const triggerOpenedCard = (card: IProject) => {
    triggerModal({
      handleClose: handleCloseModal,
      children: <OpenedCard project={card} />,
      title: card.title,
      maxWidth: "80vw",
    });
  };

  const projectList = useRecoilValue(SearchProjectAtom);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    if (path) {
      const openedProject = allProjects.find(
        (project) => project.path === path
      );

      if (!openedProject) return;
      triggerOpenedCard(openedProject);
    } else {
      closeModal();
    }
  }, [path]);

  return (
    <ContentStyled>
      <Nav />
      {projectList.toShow.length === 0 && <NotFoundNav />}
      <CardListStyled variants={container} initial="hidden" animate="show">
        {projectList.toShow.map((card, index) => (
          <ClosedCard index={index} project={card} key={card.id} />
        ))}
      </CardListStyled>
    </ContentStyled>
  );
};

export default List;
