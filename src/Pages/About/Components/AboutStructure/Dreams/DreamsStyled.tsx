import styled from "styled-components";
interface StyledProps {
  smallerThanTablet: boolean;
}
export const DreamsStyled = styled.div<StyledProps>`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;
