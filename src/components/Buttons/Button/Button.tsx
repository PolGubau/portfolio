import { ButtonStyled } from "./ButtonStyled";
import { Icon } from "src/components/Icon";
import { IconType } from "src/components/Icon/Icon";
import useModal from "src/hooks/useModal";
export type ButtonType = "main" | "normal" | "error" | "transparent";
export interface IButtonProps {
  children?: React.ReactNode | null;
  icon?: IconType;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  id?: string;
  buttonType?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  title?: string;
  name?: string;
  value?: string;
  autoFocus?: boolean;
  outlined?: boolean;
  label?: string;
  type?: ButtonType;
  fullWidth?: boolean;
  customColor?: string;
}

const Button = ({
  children = null,
  icon,
  fullWidth = false,
  onClick,
  disabled,
  className,
  id,
  buttonType = "button",
  style,
  title,
  name,
  value,
  autoFocus,
  outlined = false,
  label = "",
  type = "normal",
  customColor,
}: IButtonProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <ButtonStyled
      fullWidth={fullWidth}
      className={className}
      id={id}
      style={style}
      title={title}
      outlined={outlined}
      $customColor={customColor}
    >
      {label && <span>{label}</span>}
      <button
        className={`button type-${type}`}
        onClick={handleClick}
        disabled={disabled}
        autoFocus={autoFocus}
        type={buttonType}
        name={name}
        value={value}
      >
        {Boolean(icon) && <Icon icon={icon} className="icon" />}
        {Boolean(children) &&
          (children ? (
            <span className="text">{children}</span>
          ) : (
            <span className="text">{value}</span>
          ))}
      </button>
    </ButtonStyled>
  );
};
export default Button;
