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
    border-radius: 0 0 15px 0;
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    align-items: center;
    align-content: center;
  }

  .icon {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
    padding: 8px 5px 5px 5px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    border-radius: 15px;
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
    flex-wrap: wrap;

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
