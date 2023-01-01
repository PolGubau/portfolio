import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useScrollConstraints } from "src/components/Card/utils/use-scroll-constraints";
import { useWheelScroll } from "src/components/Card/utils/use-wheel-scroll";
import "./Card.css";

import { IProject } from "src/Interfaces";
import { closeSpring, openSpring } from "../../utils/animations";
import { CardContent } from "../CardContent";
import Overlay from "src/components/Overlay/Overlay";
import useMedia from "src/hooks/useMedia";
import { breakpoints } from "src/styles/theme";

interface CardInterfaceInline {
  project: IProject;
  ids: Array<number>;
}

export const OpenedCard = memo(({ project, ids }: CardInterfaceInline) => {
  const navigate = useNavigate();
  const mobile = useMedia(breakpoints.tablet);
  const cardRef = useRef(null);

  return (
    <>
      <motion.li
        className={`card`}
        initial={{
          y: 0,
          opacity: 1,
        }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Overlay />

        <motion.div
          ref={cardRef}
          className={`cardContainer ${mobile ? "openMobile" : " openPC"}`}
          layoutTransition={!mobile && openSpring}
        >
          <CardContent project={project} ids={ids} mobile={mobile} />
        </motion.div>
      </motion.li>
    </>
  );
});
