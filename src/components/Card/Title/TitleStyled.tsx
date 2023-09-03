import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import styled from "styled-components";

interface ITitleInterface {
  project: IProject;
}
export const TitleStyled = styled(motion.div)<ITitleInterface>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 40px 60px;
  max-width: 500px;
  z-index: 3;

  .title {
    border-radius: 10px;
    display: flex;
    font-size: 1.8em;
    font-weight: 600;
    margin: 0px 0;
    width: fit-content;
  }

  .arrow {
    display: none;

    margin: 5px 5px;
  }

  .titleOpened:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .title:hover .arrow {
    display: flex;
  }

  .details {
    display: flex;
    flex-direction: column;
  }

  .category {
    font-size: 14px;
    margin: 0px 0;
    padding: 0;
    text-transform: uppercase;
  }

  .yearCard {
    font-size: 14px;
    margin: 0px 0;
    padding: 0;
    text-transform: uppercase;
    text-shadow: -1px -1px 0 ${(props) => props.project.backgroundColor},
      1px -1px 0 ${(props) => props.project.backgroundColor},
      -1px 1px 0 ${(props) => props.project.backgroundColor},
      1px 1px 0 ${(props) => props.project.backgroundColor};
  }

  .tags {
    max-width: 50%;
    font-size: 0.8em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0;
    gap: 5px;
  }
`;
