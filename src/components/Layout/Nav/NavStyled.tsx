import { baseTheme } from "src/styles/theme/baseTheme";
import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 7px;
  margin: 0 0 0 0;
  padding: 0px;
  list-style: none;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-decoration: none;

  .contentNav {
    gap: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .filterNav {
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
  }

  .searchNav {
    gap: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .mobileSearch {
    width: 100%;
  }

  .inputIconDiv {
    padding: 4px 5px;
    height: 100%;
    border-radius: 0 0 0 20px;
    display: flex;
    height: 28px;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .iconSearch {
    cursor: pointer;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputWithIcon {
    width: 200px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    display: flex;
    border-top: none;
    outline: none;
    margin: 0;
    border-radius: 0 0 15px 15px;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
  }

  .activeInput {
    width: 311px;
  }

  .input {
    padding: 4px 10px;
    width: calc(100% - 20px);
    border: none;
    border-radius: 0 0 15px 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .filterWord-container {
    /* margin-top: 2px; */
    display: flex;
    gap: 5px;
  }

  .filterWord {
    padding: 3px 7px;
    border-radius: 0 0 15px 15px;
    :hover {
      background-color: ${({ theme }) => theme.colors.main};
      cursor: pointer;
    }
  }

  .sortIcon {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
    padding: 8px 5px 5px 5px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    border-radius: 0 0 10px 10px;
    :hover {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }
  .refreshIcon {
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
    padding: 8px 5px 5px 5px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    border-radius: 0 0 10px 10px;
    :hover {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }

  @media only screen and (max-width: ${baseTheme.breakpoints.tablet}) {
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
