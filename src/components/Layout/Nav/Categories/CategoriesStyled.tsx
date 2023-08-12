import styled from "styled-components";

export const NaCategoriesStyled = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: stretch;
  padding: 0;
  gap: 5px;
  margin: 0;

  .category {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 20px;
    min-height: 30px;
    padding: 0 10px;
    outline: none;
    border: none;

    :hover {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }

  .category-active {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;
