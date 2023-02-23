import { colors } from "src/styles/theme";
import { baseTheme } from "src/styles/theme/baseTheme";
import styled from "styled-components";

export const RightBottomButtonsStyled = styled.div`
  position: fixed;
  bottom: 30px;
  right: 25px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: ${baseTheme.breakpoints.tablet}px) {
    bottom: 10px;
    right: 10px;
  }
`;
export const ButtonStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.buttons.base};
  color: ${({ theme }) => theme.colors.buttons.text};
  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  height: 50px;
  width: 50px;
  fill: ${colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    animation: none;
    background-color: ${({ theme }) => theme.colors.buttons.hover};
    color: ${({ theme }) => theme.colors.buttons.textHover};
    border: 2px solid ${({ theme }) => theme.colors.buttons.base};
  }
`;
