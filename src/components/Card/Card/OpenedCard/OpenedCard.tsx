import { memo, useRef } from "react";
import { motion } from "framer-motion";

import { IProject } from "src/Interfaces";
import { openSpring } from "../../utils/animations";
import { CardContent } from "../CardContent";
import Overlay from "src/components/Layout/Overlay/Overlay";
import useMedia from "src/hooks/useMedia";
import { OpenedCardStyled } from "./OpenedCardStyled";
import { baseTheme } from "src/styles/theme/baseTheme";

interface CardInterfaceInline {
  project: IProject;
  ids: Array<number>;
}

export const OpenedCard = memo(({ project, ids }: CardInterfaceInline) => {
  const mobile = useMedia(baseTheme.breakpoints.tablet);
  const cardRef = useRef(null);

  return (
    <>
      <OpenedCardStyled project={project} transition={openSpring}>
        <Overlay />

        <motion.div
          ref={cardRef}
          className={`cardContainer ${mobile ? "openMobile" : " openPC"}`}
        >
          <CardContent project={project} ids={ids} mobile={mobile} />
        </motion.div>
      </OpenedCardStyled>
    </>
  );
});
