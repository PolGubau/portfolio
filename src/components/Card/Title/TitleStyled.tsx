import { motion } from "framer-motion";
import { IProject } from "src/Interfaces";
import styled from "styled-components";

interface ITitleInterface {
  project: IProject;
}
export const TitleStyled = styled(motion.div)<ITitleInterface>`
  position: absolute;
  top: 5%;
  left: 5%;
  max-width: 500px;
  z-index: 3;

  .title {
    background-color: ${(props) => props.project.backgroundColor};

    border-radius: 10px;
    display: flex;
    font-size: 1.8em;
    font-weight: 600;
    margin: 0px 0;
    width: fit-content;
    padding: 5px;
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
  }

  .Description-tagsContainer {
    max-width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0;
  }

  .Description-tag {
    padding: 4px 8px;
    border-radius: 10px;
    background-color: var(--primary-dark);
    margin: 5px;
  }
`;
