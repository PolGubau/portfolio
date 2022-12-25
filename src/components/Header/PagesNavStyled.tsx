import styled from "styled-components";

export const PagesNavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
  .link {
    text-decoration: none;
    padding: 5px 10px;
  }
  .active {
    background-color: red;
  }
`;
