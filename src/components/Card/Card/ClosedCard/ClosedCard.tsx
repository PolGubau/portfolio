import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IProject } from "src/Interfaces";
import { closeSpring } from "../../utils/animations";
import { ClosedCardStyled } from "./ClosedCardStyled";
import { Title } from "../../Title/Title";
import { useRecoilState } from "recoil";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";

interface CardInterfaceInline {
  project: IProject;
  index: number;
}

export const ClosedCard = memo(({ project, index }: CardInterfaceInline) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [projectSelected, setProjectSelected] =
    useRecoilState(projectSelectedAtom);

  const handleClick = () => {
    setProjectSelected(project);
    navigate(`/${project.path}`);
  };
  return (
    <ClosedCardStyled
      index={index}
      project={project}
      ref={cardRef}
      className={`card`}
      transition={closeSpring}
      onClick={handleClick}
    >
      <Title project={project} isSelected={false} />
      <img src={`images/${project.pathToImg}`} alt={project.title} />
    </ClosedCardStyled>
  );
});
