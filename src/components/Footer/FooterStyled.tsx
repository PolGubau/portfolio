import { colors } from "src/styles/theme";
import styled from "styled-components";

export const FooterStyled = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  position: relative;
  margin-top: 40px;
  margin-bottom: 100px;
  h1 {
    font-weight: bold;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 6px 0 12px;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
  }

  section {
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .cv {
    padding: 15px 20px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    :hover {
      cursor: pointer;
      background-color: ${colors.blue};
    }
  }

  .icon {
    margin-right: 7px;
  }
  article {
    margin-top: 20px;
  }
`;
