import styled from "styled-components";

export const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;

  .filterDelete {
    margin: 10px 0;
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.black};
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }
    :active {
      transform: scale(0.95);
    }
  }
`;
