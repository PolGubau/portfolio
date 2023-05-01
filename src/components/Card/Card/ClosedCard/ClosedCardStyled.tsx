import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import { baseTheme } from "src/styles/theme/baseTheme";
import styled, { keyframes } from "styled-components";

interface CardInterfaceInline {
  project: IProject;
  index: number;
}

export const ClosedCardStyled = styled(motion.li)<CardInterfaceInline>`
  padding: 0;
  flex: 1 0 100%;
  width: 100%;
  height: 380px;
  position: relative;
  display: flex;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.project.backgroundColor};
  justify-content: flex-start;
  pointer-events: auto;
  position: relative;
  border-radius: 20px;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: 0.1s ease-in-out;
  :hover {
    filter: brightness(0.9);
  }
  @media only screen and (min-width: ${baseTheme.breakpoints.tablet}px) {
    flex: 1 0 58%;
    max-width: 58%;
    padding-left: 0;
    padding-right: 0;

    :nth-child(4n + 1),
    :nth-child(4n + 4) {
      flex: 1 0 39%;
      max-width: 39%;
    }
  }

  img {
    transition: 0.1s ease-in-out;
    user-select: none;
    pointer-events: none;
    height: ${(props) => props.project.width}px;
    margin-right: ${(props) => props.project.pointOfInterest.x}px;
    margin-bottom: ${(props) => props.project.pointOfInterest.y}px;
  }
`;
