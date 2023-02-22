import { colors } from "src/styles/theme";
import styled from "styled-components";

export const RightBottomButtonsStyled = styled.div`
  position: fixed;
  bottom: 30px;
  right: 25px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ButtonStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.buttons.base};
  color: ${({ theme }) => theme.colors.buttons.text};
  border: 2px solid ${colors.transparent};
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

    border: 2px solid ${colors.darkGray};
  }
`;
