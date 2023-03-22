import styled from "styled-components";

export const BlogContentStyled = styled.div`
  overflow-x: hidden;
  header {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.grey};
    .goBack {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: ${({ theme }) => theme.colors.buttons.base};
      color: ${({ theme }) => theme.colors.buttons.text};
      font-weight: 600;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 10px;
      width: fit-content;
      transition: 0.2s ease-in-out;
      :hover {
        background-color: ${({ theme }) => theme.colors.buttons.hover};
      }
    }
    h3 {
      font-size: 2rem;
      margin: 0;
    }
  }

  .details {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 10px;
    .level {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: ${({ theme }) => theme.colors.grey};
      padding: 5px 10px;
      border-radius: 10px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      p {
        padding: 5px 10px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.main};
      }
    }
  }
  .content {
    h3 {
      font-size: 1.5rem;
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.buttons.hover};
    }
    h2 {
      font-size: 2rem;
      margin-top: 20px;
      padding-top: 0px;
    }
    h1 {
      font-size: 2.5rem;
      margin-top: 20px;
      background-color: ${({ theme }) => theme.colors.main};
      padding: 0 10px;
      border-radius: 10px;
      font-weight: bold;
    }
    img {
      margin: 10px 0;
      max-width: 100%;
      max-height: 50vh;
      border-radius: 20px;
      border: 1px solid ${({ theme }) => theme.colors.grey};
    }
    margin-bottom: 60px;
  }
`;
