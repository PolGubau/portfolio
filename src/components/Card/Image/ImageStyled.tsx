import styled from "styled-components";
interface IImageStyled {
  opened: boolean;
  mobile: boolean;
  tablet: boolean;
}
export const ImageStyled = styled.div<IImageStyled>`
  perspective: 1000px;
  width: 100%;
  border-radius: ${(props) => (props.tablet ? "0px" : "20px")};
  overflow: ${(props) => (props.opened ? "visible" : "hidden")};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  flex-grow: 1;
  z-index: 2;
  height: ${(props) => (props.mobile ? "300px" : "40vh")};
  overflow: hidden;

  .card-image {
    object-fit: cover;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    align-self: auto;
    overflow: hidden;
    max-height: 400px;
    max-width: 60%;
    padding-top: ${(props) => (props.tablet ? "20px" : "0px")};
    padding-right: 20px;
    opacity: ${(props) => (props.mobile ? "0.4" : "1")};
    transition: 0.3s ease-out all;
    perspective: ${(props) => (props.opened ? "1000px" : "0px")};
    :hover {
      transition: 0.3s ease-out all;
    }
  }
`;
