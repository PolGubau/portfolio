import styled from "styled-components";

const GenericWrapperStyled = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 900;
  main {
    width: fit-content;
    z-index: 999;
  }
`;

const GenericWrapper = ({
  onClick,
  children,
}: {
  onClick: any;
  children?: React.ReactNode;
}) => {
  return (
    <GenericWrapperStyled onClick={onClick}>
      {children && <main>{children}</main>}
    </GenericWrapperStyled>
  );
};

export default GenericWrapper;
