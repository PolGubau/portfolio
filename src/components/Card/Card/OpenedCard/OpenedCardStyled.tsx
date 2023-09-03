import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import styled from "styled-components";

interface CardInterfaceInline {
  project: IProject;
}

export const OpenedCardStyled = styled(motion.div)<CardInterfaceInline>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .cardHeader {
    max-height: 300px;
    overflow: hidden;
    width: 100%;
    background-color: ${({ project }) => project.backgroundColor};
    display: flex;
    justify-content: flex-end;
    border-radius: 10px;
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
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;
