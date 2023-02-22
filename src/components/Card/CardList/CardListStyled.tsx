import { breakpointsString } from "src/styles/theme";
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
  .card {
    flex: 0 0 36%;
    max-width: 40%;
    padding: 0;
    :nth-child(4n + 1),
    :nth-child(4n + 4) {
      flex: 0 0 56%;
      max-width: 56%;
    }
  }
`;
export const ContentStyled = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  @media only screen and (max-width: ${breakpointsString.tablet}) {
    border: none;
  }
`;
