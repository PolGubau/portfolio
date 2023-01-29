import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import { breakpoints, breakpointsString } from "src/styles/theme";
import styled, { keyframes } from "styled-components";

interface CardInterfaceInline {
  project: IProject;
  index: number;
}
//create a transition that using its ID to determine the delay
const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const bright = keyframes`
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.05);
  }
  100% {
    filter: brightness(1);
  }
`;

export const ClosedCardStyled = styled(motion.li)<CardInterfaceInline>`
  animation: ${bright} 0.5s ease-in-out;
  animation-delay: ${(props) => props.index * 0.2}s;

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
  :hover {
    filter: brightness(1.03);
  }

  img {
    height: ${(props) => props.project.width}px;
    margin-right: ${(props) => props.project.pointOfInterest.x}px;
    margin-bottom: ${(props) => props.project.pointOfInterest.y}px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    flex: 1 0 100%;
    width: 100%;
  }

  @media only screen and (max-width: ${breakpointsString.tablet}) {
    flex: 1 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;

    :nth-child(4n + 1),
    :nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
`;
