import { FaAngleUp } from "react-icons/fa";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";

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
    background-color: var(--greyDark);
    border: 2px solid transparent;
    border-radius: 20px;
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
  }
  .icon-style:hover {
    animation: none;
    background: transparent;
    color: var(--greyDark);
    border: 2px solid var(--greyDark);
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
