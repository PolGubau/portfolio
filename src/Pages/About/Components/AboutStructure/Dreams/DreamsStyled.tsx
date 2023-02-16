import styled from "styled-components";
interface StyledProps {
  smallerThanTablet: boolean;
}
export const DreamsStyled = styled.div<StyledProps>`
  h3 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  margin-top: 120px;
  margin-bottom: ${(props) => (props.smallerThanTablet ? "10px" : "360px")};
  ul {
    height: 500px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
`;
