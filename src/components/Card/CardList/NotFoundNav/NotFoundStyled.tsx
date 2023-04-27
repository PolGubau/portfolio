import styled from "styled-components";

export const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    text-align: center;
  }
  button {
    min-width: 40%;
    max-width: 400px;
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.main};
    border: 1px solid ${({ theme }) => theme.colors.mainHover};
    cursor: pointer;
    :hover {
      filter: brightness(0.9);
    }
    :active {
      transform: scale(0.95);
    }
  }
`;
