import { breakpoints, colors } from "src/styles/theme";
import styled from "styled-components";

export const AboutStructureStyled = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  overflow: visible;

  @media only screen and (min-width: ${breakpoints.desktop}px) {
    .dreamsBox {
      border-color: #fff700;
      margin: 90px 0 0 0%;
      width: 45%;
    }
    .firstBlob {
      margin-top: 165px;
      height: 200px;
      position: relative;
      display: flex;
      gap: 10px;
      border-radius: 99px;
      border: 1px solid black;
      width: 60%;
      padding: 5px 10px;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(0, 0, 0, 0.2);
      justify-content: center;
      transition: 0.3s ease;
      align-items: center;
    }
    .blobsContainer {
      margin-bottom: 300px;
    }

    .redondaVerde {
      position: absolute;
      border-radius: 50%;
      transform: translate(-60%, -80px);
      z-index: -10;
      user-select: none;
      pointer-events: none;
      width: 1200px;
      aspect-ratio: 1/1;
      background-color: #daffc8;
    }
    .redondaAmarilla {
      position: absolute;
      border-radius: 50%;
      bottom: 0;
      right: 0;
      transform: translate(60%, 50%);
      z-index: -10;
      user-select: none;
      pointer-events: none;
      width: 1200px;
      aspect-ratio: 1/1;
      background-color: #f4ffc8;
    }
  }
`;
