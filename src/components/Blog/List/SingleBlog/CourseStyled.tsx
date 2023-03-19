import { Link } from "react-router-dom";
import styled from "styled-components";
interface Props {
  color: string;
}
export const applyOpacityToColor = (color: any, opacity: number) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return color + opacityHex;
};

export const BlogStyled = styled(Link)<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  aspect-ratio: 1/1;

  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 1px 3px #d4d4d4;
  border: 1px solid #ccc;
  background-image: linear-gradient(
    ${({ color }) => color},
    ${({ color }) => applyOpacityToColor(color, 0.2)}
  );
  position: relative;
  .name {
    z-index: 1;
    /* background-color: ${({ theme }) => theme.colors.background}; */
    padding: 20px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 0 0 20px 20px;
    font-size: 1.1em;
    font-weight: 500;
  }
  :hover {
    transform: scale(0.95);
    filter: brightness(0.9);
  }
`;

export const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    color: white;
  }
`;
