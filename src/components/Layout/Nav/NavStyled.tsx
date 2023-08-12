import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  padding: 0px;
  margin-bottom: 20px;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  gap: 5px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    justify-content: space-between;
  }
  .seachBar {
    gap: 5px;
    display: flex;
    outline: 1px solid ${({ theme }) => theme.colors.text};
    align-items: center;
    padding: 0 8px;
    border-radius: 15px;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: 100%;
      flex: 1;
      border-radius: 15px;
    }
  }

  .inputIconDiv {
    padding: 4px 5px;
    border-radius: 0 0 0 20px;
    display: flex;
    height: 28px;
    width: 30px;
    align-content: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    background-color: transparent;
    padding: 4px 10px;
    border: none;
    border-radius: 0 10px 10px 0;
    color: ${({ theme }) => theme.colors.text};
    align-items: center;
    align-content: center;
    flex: 1;
    outline: none;

    :focus:not(:focus-visible) {
      outline: 1px solid ${({ theme }) => theme.colors.text};
    }
  }

  .icon {
    background-color: transparent;
    aspect-ratio: 1;
    border: none;
    display: flex;
    min-height: 30px;
    min-width: 30px;
    color: ${({ theme }) => theme.colors.text};
    align-items: center;
    border-radius: 15px;
    justify-content: center;

    :hover {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 100%;
    justify-content: flex-start;
    text-decoration: none;
    align-items: center;
    align-content: flex-start;

    .contentNav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: row;
    }

    .searchNav {
      flex: 1;
    }

    .filterNav {
      width: fit-content;
      justify-content: flex-start;
    }

    .inputWithIcon {
      width: 100%;
      border-radius: 20px;
      border: 1px solid ${({ theme }) => theme.colors.text};
      justify-content: space-between;
    }

    .input {
      width: 94%;
      border-radius: 20px;
    }

    .filterWord,
    .sortIcon {
      border-radius: 20px;
    }
  }
`;
