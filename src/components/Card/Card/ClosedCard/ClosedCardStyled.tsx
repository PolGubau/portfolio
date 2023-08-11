import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import { baseTheme } from "src/styles/theme/baseTheme";
import styled from "styled-components";

interface CardInterfaceInline {
  project: IProject;
  index: number;
}
/* background-image: url(${(props) => images/${props.project.pathToImg}"}); */

export const ClosedCardStyled = styled(motion.li)<CardInterfaceInline>`
  flex: 1 0 100%;
  width: 100%;
  height: 380px;
  display: flex;

  border-radius: 20px;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  /* IMAGE */
  background-image: url(${(props) => "images/" + props.project.pathToImg});
  background-color: ${(props) => props.project.backgroundColor};
  background-position-x: ${(props) => props.project.pointOfInterest.x}px;
  background-position-y: ${(props) => props.project.pointOfInterest.y}px;
  background-size: ${(props) => props.project.width}px;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  :hover {
    filter: brightness(0.9);
  }

  h3 {
    display: flex;
    font-size: 1.5rem;
    margin-bottom: 10px;
    padding: 20px 25px;
    color: ${(props) => props.project.textColor};
    text-shadow: 0px 0px 2px ${(props) => props.project.backgroundColor}90;
  }
  @media only screen and (min-width: ${baseTheme.breakpoints.tablet}px) {
    flex: 1 0 58%;
    max-width: 58%;
    :nth-child(4n + 1),
    :nth-child(4n + 4) {
      flex: 1 0 39%;
      max-width: 39%;
    }
  }
`;
