import { colors } from "src/styles/theme";
import styled from "styled-components";

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  gap: 5px;
  transition: all 0.3s ease;
  flex-wrap: wrap;

  .option {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 3px 10px;
    border-radius: 15px;
    background-color: ${colors.lightGray};
    :hover {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }

  .active {
    background-color: ${colors.blue};
    :hover {
      background-color: ${colors.darkBlue};
    }
  }
`;
