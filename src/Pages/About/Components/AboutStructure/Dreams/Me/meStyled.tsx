import styled from "styled-components";
interface StyledProps {
  smallerThanTablet: boolean;
}
export const MeStyled = styled.div<StyledProps>`
  max-width: 90vw;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 1.2rem;
    font-weight: normal;
  }

  ul {
    height: 500px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;
