import { decreaseFrom10, grow, growBouncing } from "src/styles/animations";
import { breakpointsString, colors, fontSizes } from "src/styles/theme";
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
    font-size: ${fontSizes.largeTitle};
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
    gap: 10px;
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

  .imageContainer {
    position: relative;
    width: 120px;
    display: flex;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    background-color: ${colors.lightBlue};

    .meinPhoto {
      object-fit: cover;
      border-radius: 50%;
    }
    .grower {
      animation: 0.5s ${grow} ease;
      width: 120px;
      height: 120px;
      transform: scale(10);
      border-radius: 50%;
      position: absolute;
      background-color: ${colors.lightBlue};
      z-index: -1;
    }
    .decreaser {
      animation: 0.5s ease-in ${decreaseFrom10};

      width: 120px;
      height: 120px;
      border-radius: 50%;
      position: absolute;
      background-color: ${colors.lightBlue};
      z-index: -1;
    }
  }

  .titles {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  @media only screen and (max-width: ${breakpointsString.tablet}) {
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
      margin-bottom: 5px;
      gap: 10%;
    }
  }
`;
