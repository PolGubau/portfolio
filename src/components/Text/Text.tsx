import React from "react";
import TextStyled from "./Styled";
import { textSizer } from "./functions";

interface Props {
  children?: React.ReactNode;
  value?: string;
  size?: number;
  weight?: string;
  color?: string;
  href?: string;
}

const Text: React.FC<Props> = ({
  children, // Text to be displayed
  value, // Value of the text
  size, // Size of the text
  weight = "normal", // Weight of the text
  color = undefined, // Color of the text
  href = undefined, // Link to the text
}) => {
  return (
    <TextStyled $weight={weight} $color={color}>
      {textSizer({ size, href, text: value ?? String(children) })}
    </TextStyled>
  );
};
export default Text;
