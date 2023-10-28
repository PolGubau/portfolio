import { IProject } from "src/Interfaces";
import { openSpring } from "../../utils/animations";
import { OpenedCardStyled } from "./OpenedCardStyled";
import { Image } from "../../Image";
import { Description } from "../../Description";
import { Title } from "../../Title";
import { CloseButton } from "src/components/Buttons/CloseButton";
import { FiGithub } from "react-icons/fi";
import { CgNpm } from "react-icons/cg";
import { Link, Stack } from "pol-ui";

interface CardInterfaceInline {
  project: IProject;
}

export const OpenedCard = ({ project }: CardInterfaceInline) => {
  return (
    <OpenedCardStyled
      project={project}
      transition={openSpring}
      className={`cardContainer shadow-xl rounded-xl`}
    >
      <CloseButton project={project} />
      <header
        className="overflow-hidden h-64 relative rounded-t-xl"
        style={{
          backgroundColor: project.backgroundColor,
        }}
      >
        <Title project={project} />
        <Image project={project} />
      </header>

      {/* */}

      <Stack
        justify="center"
        style={{
          marginTop: "1rem",
        }}
      >
        {project.tags.map((tag: string) => (
          <p key={tag} className="px-3 py-2">
            {tag}
          </p>
        ))}
      </Stack>

      {/*  */}

      <div className="projectContent">
        <Description project={project} />
        <footer className="projectFooter">
          <Link href={project.link} icon="search">
            Search
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
