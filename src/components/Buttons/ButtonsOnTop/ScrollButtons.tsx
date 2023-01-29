import styled from "styled-components";
import { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { colors } from "src/styles/theme";

const ButtonsStyled = styled.div`
  .top-to-btm {
    position: relative;
  }
  .icon-position {
    position: fixed;
    bottom: 30px;
    right: 25px;
    z-index: 20;
  }
  .icon-style {
    background-color: ${colors.darkGray};
    border: 2px solid ${colors.transparent};
    border-radius: 20px;
    height: 50px;
    width: 50px;
    fill: ${colors.white};
    cursor: pointer;
  }
  .icon-style:hover {
    animation: none;
    background: ${colors.transparent};
    fill: ${colors.darkGray};

    border: 2px solid ${colors.darkGray};
  }
`;
const ButtonsOnTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ButtonsStyled>
      <div className="top-to-btm">
        {showTopBtn && (
          <BsArrowUpShort
            className="icon-position icon-style"
            onClick={goToTop}
          />
        )}
      </div>
    </ButtonsStyled>
  );
};

export default ButtonsOnTop;
