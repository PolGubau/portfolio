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

const mainColor = ({ theme }: any) => theme.colors.text;
const textColor = ({ theme }: any) => theme.colors.text;
const backgroundColor = ({ theme }: any) => theme.colors.background;

export const Styled = styled(motion.div)<StyledProps>`
  position: relative;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 99px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  width: fit-content;
  padding: 5px 10px;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.opacity50.main};
  /* opacity to background */

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid ${({ theme }) => theme.colors.text};
  justify-content: center;
  transition: 0.3s ease;
  align-items: center;
  .line {
    position: absolute;
    left: -2%;
    width: 104%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
    opacity: 0.2;
    display: flex;
  }

  .loadingIcon {
    animation: ${spin} 1s linear infinite;
  }
`;
