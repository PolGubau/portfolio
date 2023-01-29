import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IProject } from "src/Interfaces";
import { closeSpring } from "../../utils/animations";
import { ClosedCardStyled } from "./ClosedCardStyled";
import { Title } from "../../Title/Title";
import { useDispatch } from "react-redux";
import { changeSomeProjectSelectedActionCreator } from "src/redux/features/selectedSlice";

interface CardInterfaceInline {
  project: IProject;
  ids: Array<number>;
  index: number;
}

export const ClosedCard = memo(({ project, index }: CardInterfaceInline) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleClick = () => {
    dispatch(changeSomeProjectSelectedActionCreator(true));
    navigate(`/${project.path}`);
  };
  return (
    <ClosedCardStyled
      index={index}
      project={project}
      ref={cardRef}
      layoutTransition={closeSpring}
      className={`card`}
      onClick={handleClick}
    >
      <Title project={project} isSelected={false} />
      <img src={`images/${project.pathToImg}`} alt={project.title} />
    </ClosedCardStyled>
  );
});
