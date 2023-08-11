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
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.background}40;
  z-index: 5;
  display: grid;
  place-items: center;
  main {
    z-index: 6;
  }
`;
interface Props {
  children: React.ReactNode;
}
const Overlay: React.FC<Props> = ({ children }) => {
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
        >
          <main>{children}</main>
        </OverlayStyled>
      )}
    </>
  );
};
export default Overlay;
