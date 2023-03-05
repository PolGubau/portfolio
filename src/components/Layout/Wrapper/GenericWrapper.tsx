import styled from "styled-components";

const GenericWrapperStyled = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  /* backdrop-filter: blur(2px); */
  z-index: 998;
`;

const GenericWrapper = ({ onClick }: { onClick: any }) => {
  return <GenericWrapperStyled onClick={onClick}></GenericWrapperStyled>;
};

export default GenericWrapper;
