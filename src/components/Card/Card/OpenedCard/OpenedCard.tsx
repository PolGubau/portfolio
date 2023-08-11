import { IProject } from "src/Interfaces";
import { openSpring } from "../../utils/animations";
import { CardContent } from "../CardContent";
import useMedia from "src/hooks/useMedia";
import { OpenedCardStyled } from "./OpenedCardStyled";
import { baseTheme } from "src/styles/theme/baseTheme";

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
      <CardContent project={project} mobile={mobile} />
    </OpenedCardStyled>
  );
};
