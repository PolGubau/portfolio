import { colors, fontSizes } from "src/styles/theme";
import styled from "styled-components";

export const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;

  .filterDelete {
    margin: 10px 0;
    padding: 5px 10px;
    font-size: ${fontSizes.text};
    background-color: ${colors.blue};
    border: 1px solid ${colors.black};
    cursor: pointer;
    :hover {
      color: ${colors.white};
      background-color: ${colors.darkBlue};
    }
    :active {
      transform: scale(0.95);
    }
  }
`;
