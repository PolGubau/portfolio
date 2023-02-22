import styled from "styled-components";

export const OptionsStyled = styled.section`
  position: fixed;
  color: ${(props) => props.theme.colors.text};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  max-width: 500px;
  min-width: 300px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  z-index: 999;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0px;
    padding: 0;
  }
  .closeButton {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.buttons.base};
    color: ${(props) => props.theme.colors.buttons.text};
    fill: ${(props) => props.theme.colors.buttons.text};
    border: 1px solid ${(props) => props.theme.colors.background};
    position: absolute;
    padding: 5px;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  }
  .option {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 10px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};

    padding: 5px 5px 5px 10px;
    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0px;
      padding: 0;
    }
    .switch {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 30px;
      width: 30px;
      background-color: ${(props) => props.theme.colors.buttons.base};
      border-radius: 5px;
      border: 1px solid black;
      span {
        display: none;
      }
    }
    .selected {
      span {
        display: flex;
        background-color: #323232;
        width: 70%;
        height: 70%;
        border-radius: 2px;
      }
    }
  }
`;
