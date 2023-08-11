import React from "react";
import { IconStyled } from "./IconStyled";
import { getIcon } from "src/utils";
import { IconNames } from "src/Models/iconsData";

export type IconType = React.ReactNode | IconNames;
interface IconProps {
  icon: IconType;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: string;
  className?: string;
}

const Icon = ({ icon, onClick, color, size, className }: IconProps) => {
  return (
    <IconStyled
      onClick={onClick}
      color={color}
      size={size}
      className={className}
    >
      {typeof icon === "string" ? getIcon(icon as IconNames) : icon}
    </IconStyled>
  );
};
export default Icon;
