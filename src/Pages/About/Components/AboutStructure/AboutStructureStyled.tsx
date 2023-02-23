import styled from "styled-components";
interface StyledProps {
  smallerThanTablet: boolean;
}
export const AboutStructureStyled = styled.main<StyledProps>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  overflow: visible;

  .blobsContainer {
    margin-bottom: 300px;
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.smallerThanTablet ? "20px" : "0px")};
  }
  .redondaVerde {
    position: absolute;
    border-radius: 50%;
    transform: translate(-60%, -80px);
    user-select: none;
    pointer-events: none;
    width: 1200px;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => theme.colors.green};
  }
  .redondaAmarilla {
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    transform: translate(60%, 50%);
    user-select: none;
    pointer-events: none;
    width: 1200px;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  .firstBlob {
    margin-top: ${(props) => (props.smallerThanTablet ? "10px" : "165px")};
    height: ${(props) => (props.smallerThanTablet ? "fit-content" : "200px")};
    text-align: ${(props) => (props.smallerThanTablet ? "center" : "left")};
    width: ${(props) => (props.smallerThanTablet ? "100%" : "fit-content")};
    max-width: ${(props) => (props.smallerThanTablet ? "100%" : "70vw")};
    min-width: 60%;

    min-height: 100px;
    position: relative;
    display: flex;
    gap: 10px;
    padding: 20px;
    border-radius: 99px;

    border: 1px solid black;
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
`;
