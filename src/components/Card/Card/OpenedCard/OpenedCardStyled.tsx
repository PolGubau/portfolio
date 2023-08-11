import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import styled from "styled-components";

interface CardInterfaceInline {
  project: IProject;
}

export const OpenedCardStyled = styled(motion.div)<CardInterfaceInline>`
  position: relative;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  overflow-x: hidden;
  margin: 0 auto;
  left: 0;

  @media screen and (min-width: 768px) {
    height: 80vh;
    overflow-x: hidden;
    border-radius: 20px;
  }
  .card-content-PC {
    max-width: 700px;
    width: 100%;
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
