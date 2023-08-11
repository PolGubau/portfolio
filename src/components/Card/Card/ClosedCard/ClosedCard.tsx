import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IProject } from "src/Interfaces";
import { ClosedCardStyled } from "./ClosedCardStyled";
import { useSetRecoilState } from "recoil";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";
import useModal from "src/hooks/useModal";
interface CardInterfaceInline {
  project: IProject;
  index: number;
}

export const ClosedCard = memo(({ project, index }: CardInterfaceInline) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const setProjectSelected = useSetRecoilState(projectSelectedAtom);

  const { triggerModal } = useModal();
  const handleClick = () => {
    triggerModal({
      title: project.title,
    });
    setProjectSelected(project);
    navigate(`/${project.path}`);
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 6,
        inertia: 100,
      },
    },
  };
  return (
    <ClosedCardStyled
      index={index}
      project={project}
      variants={item}
      ref={cardRef}
      className={`card`}
      onClick={handleClick}
    >
      <h3>{project.title}</h3>
    </ClosedCardStyled>
  );
});
