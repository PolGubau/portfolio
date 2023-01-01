import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMedia from "src/hooks/useMedia";
import { changeSomeProjectSelectedActionCreator } from "src/redux/features/selectedSlice";
import { breakpoints } from "src/styles/theme";
import styled from "styled-components";
const OverlayStyled = styled(motion.div)`
  bottom: 0;
  left: 50%;
  width: 100vw;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to top,
    #ffffff 0%,
    rgba(245, 245, 245, 0.5) 40%
  );
  /* opacity: 1; */
  transform: translateX(-50%);
  width: 100%;
  cursor: pointer;
  z-index: 5;
  a {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: 50%;

    transform: translateX(-50%);
  }
`;
const Overlay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mobile = useMedia(breakpoints.tablet);
  const handleClick = () => {
    dispatch(changeSomeProjectSelectedActionCreator(false));
    navigate("/");
  };
  return (
    <>
      {!mobile && (
        <OverlayStyled
          initial={false}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
        ></OverlayStyled>
      )}
    </>
  );
};
export default Overlay;
