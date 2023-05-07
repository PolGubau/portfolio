import styled from "styled-components";

export const NaCategoriesStyled = styled.ul`
  display: flex;
  gap: 5px;
  .category {
    background-color: ${({ theme }) => theme.colors.background};
    padding: 3px 10px;
    border-radius: 15px;

    :hover {
      filter: brightness(0.8);
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    }
  }

  .category-active {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;
