import { slideUp } from "src/styles/animations";
import styled from "styled-components";
interface Props {
  maxWidth?: string;
}

export const ModalStyled = styled.section<Props>`
  overflow: hidden;
  position: relative;
  max-height: 80vh;
  min-width: 600px;
  max-width: ${({ maxWidth }) => maxWidth ?? "80vw"};
  animation: ${slideUp} 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  width: fit-content;
  text-align: center;
  box-shadow: "0 0 10px rgba(0, 0, 0, 0.2)";
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  header {
    padding: 0 20px;
    max-width: 550px;
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
    width: 100%;
  }

  .modalContent {
    padding: 20px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    width: 100%;
  }

  footer {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (width <= 768px) {
    width: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0;
  }
`;
