import { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { IProject } from "src/Interfaces";
import { openSpring } from "../../utils/animations";
import { CardContent } from "../CardContent";
import Overlay from "src/components/Layout/Overlay/Overlay";
import useMedia from "src/hooks/useMedia";
import { OpenedCardStyled } from "./OpenedCardStyled";
import { baseTheme } from "src/styles/theme/baseTheme";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";
import { useSetRecoilState } from "recoil";

interface CardInterfaceInline {
  project: IProject;
}

export const OpenedCard = memo(({ project }: CardInterfaceInline) => {
  const mobile = useMedia(baseTheme.breakpoints.tablet);
  const setProjectSelected = useSetRecoilState(projectSelectedAtom);

  useEffect(() => {
    setProjectSelected(project);
  }, [project, setProjectSelected]);

  return (
    <>
      <Overlay />

      <OpenedCardStyled
        project={project}
        transition={openSpring}
        className={`cardContainer ${mobile ? "openMobile" : " openPC"}`}
      >
        <CardContent project={project} mobile={mobile} />
      </OpenedCardStyled>
    </>
  );
});
