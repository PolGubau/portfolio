import styled from "styled-components";

export const CVBStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;

    min-width: 40%;
    max-width: 400px;
    margin-top: 20px;
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
