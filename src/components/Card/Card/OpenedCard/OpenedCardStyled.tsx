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

  .cardHeader {
    width: 100%;
    background-color: ${({ project }) => project.backgroundColor};
    display: flex;
    justify-content: center;
  }
  .button {
    min-height: 45px;
    min-width: 45px;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    padding: 10px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      filter: brightness(1.05);
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.text};
    }
    :focus {
      outline: 2px solid ${({ theme }) => theme.colors.main};
    }
  }
  .projectContent {
    height: 100%;
    padding: 40px;
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    gap: 40px;
  }
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
`;
