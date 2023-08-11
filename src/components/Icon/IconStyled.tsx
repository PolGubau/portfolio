import styled from "styled-components";

interface IconStyledProps {
  onClick?: any;
  size?: string;
  color?: string;
}

export const IconStyled = styled.div<IconStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => size || "1.5rem"};

  ${({ onClick }) =>
    onClick &&
    `
    cursor: pointer;
  `}

  ${({ color }) => color && `color: ${color};`}
`;
