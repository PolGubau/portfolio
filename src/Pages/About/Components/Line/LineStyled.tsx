import styled from "styled-components";

export const LineStyled = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: -1;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: row;
  svg {
    height: fit-content;
    display: flex;
    path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }
`;
