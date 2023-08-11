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
  height: 80vh;
  border-radius: 20px;
  max-width: 80vw;
  width: 1000px;

  @media screen and (max-width: 768px) {
    height: 80vh;
    max-width: 90vw;
  }
  .button {
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    padding: 10px;
    border-radius: 10px;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    .projectFooter {
      display: flex;
      align-items: stretch;
      justify-content: center;
      gap: 10px;
      align-items: center;
      & > *:first-child {
        flex: 1;
      }
    }
  }
`;
