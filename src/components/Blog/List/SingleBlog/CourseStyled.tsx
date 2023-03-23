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
  background-image: linear-gradient(
    ${({ color }) => color},
    ${({ color }) => applyOpacityToColor(color, 0.2)}
  );
  position: relative;
  .seenCheck {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    z-index: 1;
    padding: 20px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 0 0 20px 20px;
    text-align: center;
    font-size: 1.1em;
    font-weight: 500;
  }
  :hover {
    transform: scale(0.98);
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
