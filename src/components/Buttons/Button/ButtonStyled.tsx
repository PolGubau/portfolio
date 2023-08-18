import styled, { css } from "styled-components";

interface IButtonStyled {
  outlined?: boolean;
  fullWidth?: boolean;
  $customColor?: string;
}

export const ButtonStyled = styled.div<IButtonStyled>`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 5px;
  border: none;
  outline: none;
  min-height: 45px;

  border: none;

  .type-main {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.background};
  }

  .type-normal {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }

  .type-transparent {
    background-color: transparent;
    border: none;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  .type-error {
    color: ${({ theme }) => theme.colors.text.normal};
    background-color: transparent;
    border: none;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.error};
    }
  }

  button {
    padding: 10px;
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    transition: all 0.1s ease-in-out;
    outline: none;

    svg {
      max-width: 25px;
      max-height: 25px;
    }

    :hover {
      outline: none;
      cursor: pointer;
      filter: brightness(0.8);
    }

    :focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.main};
      outline: 2px solid ${({ theme }) => theme.colors.main};
    }

    :active {
      outline: none;
      transform: scale(0.95);
    }
    span {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    ${({ fullWidth }) =>
      fullWidth &&
      `
    width: 100%;
  `}

    ${({ $customColor }) => {
      if ($customColor) {
        switch ($customColor) {
          case "error":
            return css`
              background-color: ${({ theme }) =>
                theme.colors.error.dark} !important;
            `;
          default:
            return css`
              background-color: ${$customColor} !important;
            `;
        }
      }
    }}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .button:has(.icon) .text {
      display: none;
    }
  }
`;
