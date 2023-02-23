import { baseTheme } from "src/styles/theme/baseTheme";
import styled from "styled-components";

export const LanguageButtons = styled.div`
  .trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: fixed;
    bottom: 30px;
    left: 25px;
    color: ${(props) => props.theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.background};
    padding: 10px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.buttons.base};
    cursor: pointer;
    @media screen and (max-width: ${baseTheme.breakpoints.tablet}px) {
      bottom: 10px;
      left: 10px;
    }
  }
  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 2.3em;
    padding: 0;
    svg {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: fit-content;
    padding: 0;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.buttons.text};

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .active {
      rotate: 180deg;
    }
  }
  .selectorLanguage {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    bottom: 90px;
    left: 25px;
    z-index: 999;
    background-color: ${({ theme }) => theme.colors.buttons.base};
    border-radius: 15px;
    gap: 5px;

    color: ${({ theme }) => theme.colors.buttons.text};

    padding: 5px;
    @media screen and (max-width: ${baseTheme.breakpoints.tablet}px) {
      bottom: 70px;
      left: 10px;
      gap: 10px;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.buttons.active};
    }
    .option {
      width: 100%;
      justify-content: flex-start;
      display: flex;
      align-items: center;
      flex-grow: 1;
      border-radius: 10px;
      padding: 8px;
      gap: 8px;
      padding: 5px;
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.buttons.hover};
      }
      .langName {
        color: ${({ theme }) => theme.colors.buttons.text};
      }

      .flag {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-size: 2.3em;
        padding: 0;
        svg {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
