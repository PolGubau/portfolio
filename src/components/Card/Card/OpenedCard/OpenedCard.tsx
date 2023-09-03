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
import { FiGithub } from "react-icons/fi";
import { CgNpm } from "react-icons/cg";
import { Button, Link } from "pol-ui";
import { useFilter, useGoTo } from "src/hooks";

interface CardInterfaceInline {
  project: IProject;
}

export const OpenedCard = ({ project }: CardInterfaceInline) => {
  const mobile = useMedia(baseTheme.breakpoints.tablet);
  const { goThere } = useGoTo();
  const { filterProjects } = useFilter();
  const handleClickTag = (tag: string) => {
    filterProjects(tag);
    goThere("/");
  };
  return (
    <OpenedCardStyled
      project={project}
      transition={openSpring}
      className={`cardContainer ${mobile ? "openMobile" : " openPC"}`}
    >
      <CloseButton project={project} />
      <header className="cardHeader">
        <Title project={project} />
        <Image project={project} />
      </header>
      <div className="tags">
        {project.tags.map((tag: string) => (
          <Button
            variant="text"
            key={tag}
            onClick={() => handleClickTag(tag)}
            className="Description-tag"
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="projectContent">
        <Description project={project} />
        <footer className="projectFooter">
          <Link className="button" href={project.link}>
            <Icon icon="search" /> Search
          </Link>
          {project.githubLink && (
            <Link className="button" href={project.githubLink}>
              <FiGithub size={20} />
            </Link>
          )}
          {project.npmLink && (
            <Link className="button" href={project.npmLink}>
              <CgNpm size={24} />
            </Link>
          )}
        </footer>
      </div>
    </OpenedCardStyled>
  );
};
