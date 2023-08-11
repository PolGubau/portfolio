import { IProject } from "src/Interfaces";
import { openSpring } from "../../utils/animations";
import { CardContent } from "../CardContent";
import useMedia from "src/hooks/useMedia";
import { OpenedCardStyled } from "./OpenedCardStyled";
import { baseTheme } from "src/styles/theme/baseTheme";
import { Image } from "../../Image";
import { Description } from "../../Description";
import { Title } from "../../Title";

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
        <Image project={project} />

        <div
          className={`${mobile ? "card-content-Mobile" : "card-content-PC"} `}
        >
          <Description project={project} />
        </div>
      </>
    </OpenedCardStyled>
  );
};
