import { IProject } from "src/Interfaces";
import { openSpring } from "../../utils/animations";
import useMedia from "src/hooks/useMedia";
import { OpenedCardStyled } from "./OpenedCardStyled";
import { baseTheme } from "src/styles/theme/baseTheme";
import { Image } from "../../Image";
import { Description } from "../../Description";
import { Title } from "../../Title";
import { CloseButton } from "src/components/Buttons/CloseButton";
import { Icon } from "src/components/Icon";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { CgNpm } from "react-icons/cg";

interface CardInterfaceInline {
  project: IProject;
}

export const OpenedCard = ({ project }: CardInterfaceInline) => {
  const mobile = useMedia(baseTheme.breakpoints.tablet);
  return (
    <OpenedCardStyled
      project={project}
      transition={openSpring}
      className={`cardContainer ${mobile ? "openMobile" : " openPC"}`}
    >
      <header className="cardHeader">
        <CloseButton project={project} />
        <Title project={project} />
        <Image project={project} />
      </header>
      <div className="projectContent">
        <Description project={project} />
        <footer className="projectFooter">
          <Link className="button" to={project.link}>
            <Icon icon="search" /> Search
          </Link>
          {project.githubLink && (
            <Link className="button" target="_blank" to={project.githubLink}>
              <FiGithub size={20} />
            </Link>
          )}
          {project.npmLink && (
            <Link className="button" target="_blank" to={project.npmLink}>
              <CgNpm size={24} />
            </Link>
          )}
        </footer>
      </div>
    </OpenedCardStyled>
  );
};
