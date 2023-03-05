import { baseTheme } from "src/styles/theme/baseTheme";
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
  align-items: flex-start;
  justify-content: center;
`;
export const ContentStyled = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  @media only screen and (max-width: ${baseTheme.breakpoints.tablet}) {
    border: none;
  }
`;
