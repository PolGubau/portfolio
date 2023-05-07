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
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.text};

    :hover {
      background-color: ${({ theme }) => theme.colors.mainHover};
      color: ${({ theme }) => theme.colors.background};
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colors.main};
    :hover {
      color: ${({ theme }) => theme.colors.text};

      background-color: ${({ theme }) => theme.colors.main};
    }
  }
`;
