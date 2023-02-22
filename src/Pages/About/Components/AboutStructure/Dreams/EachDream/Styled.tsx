import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

interface StyledProps {
  done: boolean;
}

export const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Styled = styled(motion.div)<StyledProps>`
  position: relative;
  display: flex;
  gap: 10px;
  border-radius: 99px;
  border: 1px solid black;
  width: fit-content;
  padding: 5px 10px;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: center;
  transition: 0.3s ease;
  align-items: center;
  .line {
    position: absolute;
    left: -2%;
    width: 104%;
    height: 1px;
    background-color: #000000;
    opacity: 0.2;
    display: flex;
  }

  .loadingIcon {
    animation: ${spin} 1s linear infinite;
  }
`;
