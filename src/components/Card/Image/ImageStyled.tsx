import styled from "styled-components";
interface IImageStyled {
  opened: boolean;
  backgroundColor: string;
  mobile: boolean;
}
export const ImageStyled = styled.div<IImageStyled>`
  perspective: 1000px;
  border-radius: 20px;
  overflow: ${(props) => (props.opened ? "visible" : "hidden")};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;
  transform: translateZ(0);
  z-index: 2;
  height: ${(props) => (props.mobile ? "300px" : "40vh")};

  background-color: ${(props) => props.backgroundColor};
  .card-image {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    align-self: auto;
    /* width: 60%; */
    height: 45vh;
    padding-top: 20px;
    padding-right: 20px;
    transition: 0.3s ease-out all;
    perspective: ${(props) => (props.opened ? "1000px" : "0px")};

    :hover {
      transition: none;
    }
  }
`;
