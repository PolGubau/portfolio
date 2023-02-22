import styled from "styled-components";

export const MainStyled = styled.main`
  margin: 0;
  padding: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  .App {
    max-width: 950px;
    flex: 1 1 100%;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.text};
  }
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999;
    background: ${({ theme }) => theme.colors.background};
  }
`;
