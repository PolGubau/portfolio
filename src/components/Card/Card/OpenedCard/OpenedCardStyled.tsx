import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import styled from "styled-components";

interface CardInterfaceInline {
  project: IProject;
}
const cardWidth = "900px";

export const OpenedCardStyled = styled(motion.div)<CardInterfaceInline>`
  z-index: 6;
  width: fit-content;
  position: fixed;
  display: flex;
  pointer-events: none;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 20px;
  overflow-x: hidden;
  margin: 0 auto;
  left: 0;
  z-index: 10;

  @media screen and (min-width: 768px) {
    height: 80vh;
    left: calc(50% - (${cardWidth} / 2));
    top: 5vh;
    overflow-x: hidden;
    width: ${cardWidth};
  }
  .card-content-PC {
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
