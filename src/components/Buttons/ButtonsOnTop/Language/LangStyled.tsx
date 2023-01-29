import { colors } from "src/styles/theme";
import styled from "styled-components";

export const LangStyled = styled.select`
  position: fixed;
  bottom: 30px;
  left: 25px;
  z-index: 20;
  background-color: ${colors.lightBlue};
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid black;

  .icon {
    background-color: ${colors.darkGray};
    border: 2px solid ${colors.transparent};
    border-radius: 20px;
    height: 50px;
    color: ${colors.white};
    cursor: pointer;
  }
  .icon:hover {
    animation: none;
    background: ${colors.transparent};
    color: ${colors.darkGray};
    border: 2px solid ${colors.darkGray};
  }
`;
