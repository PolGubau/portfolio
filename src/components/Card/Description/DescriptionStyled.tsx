import styled from "styled-components";

export const DescriptionStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  overflow-y: auto;

  p {
    color: ${({ theme }) => theme.colors.text};
    padding: 0;
  }
  .command {
    width: fit-content;
    margin-top: 20px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.mainHover};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-family: "Fira Code", monospace;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding-left: 20px;
    button {
      transform: scale(0.9);
    }
  }
`;
