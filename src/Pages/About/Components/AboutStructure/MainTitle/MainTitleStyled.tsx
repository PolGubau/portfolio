import { motion } from "framer-motion";
import styled from "styled-components";

export const MainTitleStyled = styled(motion.h3)`
  margin: 0;
  animation: appearFromLeft 0.5s ease;
  margin-top: 100px;
  border: 1px solid white;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  perspective: 1000px;
  padding: 20px 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0);

  background-color: rgba(0, 0, 180, 0.1);

  font-size: 3em;
  @media screen and (max-width: 500px) {
    font-size: 2em;
  }
  @media screen and (max-width: 300px) {
    font-size: 1.5em;
  }

  :hover {
    transform: scale(1.1);
    transition: 0.3s ease;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`;
