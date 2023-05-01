import styled from "styled-components";
import Loader from "./Loader";

export const CenteredLoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
`;

const CenteredLoader = () => {
  return (
    <CenteredLoaderStyled>
      <Loader />
    </CenteredLoaderStyled>
  );
};
export default CenteredLoader;
