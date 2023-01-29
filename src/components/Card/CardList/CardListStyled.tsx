import { breakpointsString, colors } from "src/styles/theme";
import styled from "styled-components";

export const CardListStyled = styled.section`
  margin-top: 25px;
  gap: 15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  max-width: 100vw;
  align-content: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ContentStyled = styled.section`
  border-top: 1px solid ${colors.darkGray};
  @media only screen and (max-width: ${breakpointsString.tablet}) {
    border: none;
  }
`;
