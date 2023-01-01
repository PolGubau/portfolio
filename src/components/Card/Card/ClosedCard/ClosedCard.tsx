import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IProject } from "src/Interfaces";
import { closeSpring } from "../../utils/animations";
import { ClosedCardStyled } from "./ClosedCardStyled";
import { Title } from "../../Title/Title";

interface CardInterfaceInline {
  project: IProject;
  ids: Array<number>;
  index: number;
}

export const ClosedCard = memo(({ project }: CardInterfaceInline) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  return (
    <ClosedCardStyled
      
      project={project}
      ref={cardRef}
      layoutTransition={closeSpring}
      className={`card`}
      onClick={() => {
        navigate(`/${project.path}`);
      }}
    >
      <Title project={project} isSelected={false} />
      <img src={`images/${project.pathToImg}`} alt={project.title} />
    </ClosedCardStyled>
  );
});
