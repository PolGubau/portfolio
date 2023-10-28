import { CardListStyled, ContentStyled } from "./CardListStyled";
import { ClosedCard } from "../Card/ClosedCard/ClosedCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useModal from "src/hooks/useModal";
import { IProject } from "src/Interfaces";
import { allProjects, relevantProjects } from "src/utils";
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
      isOpen: true,
      handleClose: handleCloseModal,
      children: <OpenedCard project={card} />,
    });
  };

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
      <CardListStyled variants={container} initial="hidden" animate="show">
        {relevantProjects.map((card, index) => (
          <ClosedCard index={index} project={card} key={card.id} />
        ))}
      </CardListStyled>
    </ContentStyled>
  );
};

export default List;
