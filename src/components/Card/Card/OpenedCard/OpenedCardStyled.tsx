import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import { breakpoints, breakpointsString, colors } from "src/styles/theme";
import styled, { keyframes } from "styled-components";

interface CardInterfaceInline {
  project: IProject;
}
//create a transition that using its ID to determine the delay
const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const OpenedCardStyled = styled(motion.li)<CardInterfaceInline>`
  .cardContainer {
    width: fit-content;
    position: relative;
    display: flex;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    background: ${colors.blue};
    /* overflow-x: hidden; */
    margin: 0 auto;
  }

  .openPC {
    top: 10vh;
    width: 90vw;
    max-width: 900px;
    max-height: 100vh;
    height: fit-content;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 10;
    padding: 0;
  }

  .openMobile {
    top: 0px;
    width: 100%;
    border-radius: 20px;
    min-height: 100%;
    left: 0;
    position: fixed;
    z-index: 10;
  }

  .card-content-PC {
    /* padding: 350px 35px 0px 35px; */
    max-width: 700px;
    width: 90vw;
  }

  .card-content-Mobile {
    display: flex;
    max-width: 700px;
    width: calc(100% - 5vw);
  }

  .imageAndDescription {
    width: 100%;
  }

  .imageAndDescriptionMobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
  }
`;
