import { breakpoints, colors } from "src/styles/theme";
import styled from "styled-components";

export const AboutStructureStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    .box {
      display: flex;
      flex-direction: column;

      justify-content: flex-start;
      align-items: center;
      height: 150px;
      border: 1px solid green;
      h3 {
        font-size: 2rem;
        margin-top: -17px;
        background-color: white;
        width: fit-content;
        padding: 0 5px;
        line-height: 1;
        span {
          font-size: 1.5rem;
          font-weight: 400;
        }
      }
    }
    .b1 {
      border-color: #0059ff;
      margin: 0% 0 0 10%;
      height: 200px;
      margin-top: 235px;
      width: 50%;
      border-radius: 999px;
    }
    .dreamsBox {
      border-color: #fff700;
      margin: 0% 0 0 60%;
      width: 40%;
      margin-top: 20px;
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
    .b2 {
      border-color: #fff700;
      margin: 0% 0 0 45%;
      width: 50%;
      margin-top: 600px;
      border-radius: 9999px;
      h3 {
        margin-top: -50px;
      }
    }
    .b3 {
      border-color: #6f00ff;
      margin: 0% 0 0 0;
      height: 170px;
      margin-top: 20px;
      width: 50%;
      border-radius: 9999px;
    }
    .b4 {
      border-color: #ff0051;
      height: 170px;
      border-radius: 9999px;
      width: 50%;
      margin: 0% 0 0 47%;
      margin-top: 20px;
      h3 {
        margin-top: -50px;
      }
    }
    .b5 {
      border-color: #00eaff;
      margin-top: 25px;
      height: 130px;
      border-radius: 9999px;
      width: 52%;
    }
    .b6 {
      border-color: #22ff00;
      margin-top: 110px;
      height: 140px;
      border-radius: 9999px;
      width: 50%;
    }
    .b7 {
      margin: 0% 0 0 42%;
      margin-top: 70px;
      height: 220px;
      border-radius: 9999px;
      width: 50%;
      margin-bottom: 700px;
    }
  }
`;
