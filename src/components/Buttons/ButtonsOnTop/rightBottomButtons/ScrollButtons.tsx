import { BsArrowUpShort } from "react-icons/bs";
import { ButtonStyled } from "./Styles/RightButtonsStyled";

const ScrollButton = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ButtonStyled onClick={goToTop}>
      <BsArrowUpShort size={30} />
    </ButtonStyled>
  );
};

export default ScrollButton;
