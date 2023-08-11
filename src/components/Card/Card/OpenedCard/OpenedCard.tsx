import { IProject } from "src/Interfaces";
import { openSpring } from "../../utils/animations";
import { CardContent } from "../CardContent";
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
      <>
        {project.tags.map((tag: string) => {
          <p>{tag}</p>;
        })}
        <Title isSelected={true} project={project} />
        <CloseButton project={project} />

        <Image project={project} />

        <div className="description">
          <Description project={project} />
          <footer className="projectFooter">
            <Link className="button" to={project.link}>
              <Icon icon="search" /> Search
            </Link>
            {project.githubLink && (
              <Link className="button" to={project.githubLink}>
                <FiGithub size={0} />
              </Link>
            )}
          </footer>
        </div>
      </>
    </OpenedCardStyled>
  );
};
