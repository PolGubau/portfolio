import styled from "styled-components";

export const WrapperStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: grid;
  place-items: center;
  z-index: 120;
`;
interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ onClick, children }: any) => {
  return <WrapperStyled onClick={onClick}>{children}</WrapperStyled>;
};
export default Wrapper;
