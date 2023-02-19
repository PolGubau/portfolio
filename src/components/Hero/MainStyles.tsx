import styled from "styled-components";

export const MainStyled = styled.main`
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.background};
  overflow-x: hidden;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .container {
    max-width: 950px;

    flex: 1 1 100%;
  }
`;
