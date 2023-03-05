import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useMedia from "src/hooks/useMedia";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";
import { emptyProject } from "src/utils/empties/Project";
import { baseTheme } from "src/styles/theme/baseTheme";
const breakpoints = baseTheme.breakpoints;

const OverlayStyled = styled(motion.div)`
  bottom: 0;
  left: 50%;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.background};
  opacity: 0.8;
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
  const [projectSelected, setProjectSelected] =
    useRecoilState(projectSelectedAtom);

  const navigate = useNavigate();
  const mobile = useMedia(breakpoints.tablet);
  //
  const handleClick = () => {
    setProjectSelected(emptyProject);
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
