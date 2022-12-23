import styled, { keyframes } from "styled-components";

// appear animation
export const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderStyled = styled.header`
  * {
    margin: 0;
    padding: 0;
    animation: ${appear} 0.3s ease-in-out;
  }
  h1 {
    font-weight: bold;
    font-size: var(--title);
    color: rgb(0, 0, 0);
    margin: 10px 0 10px 0;
    line-height: 0.9;
  }

  h3 {
    margin: 0 0 15px 0;
    font-weight: 600;
  }

  header {
    position: relative;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .langs {
    margin: 0 0.5rem 0 0;
    cursor: pointer;
  }

  .langs:hover {
    margin: 0 0.5rem 0 0;
    text-decoration: underline;
  }

  .langChoosen {
    background-color: red;
  }

  .meinPhoto {
    width: 120px;
    height: 120px;
    object-fit: cover;
    background-color: var(--primary);
    border-radius: 50%;
  }

  /* iF MOBILE */

  @media only screen and (max-width: 600px) {
    .descriptionAndImage {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      flex-direction: row-reverse;
      width: 100%;
    }

    .subTextAndImage {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      flex-direction: row;
      width: 100%;
      gap: 10%;
    }
  }
`;
