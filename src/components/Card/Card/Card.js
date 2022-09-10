import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollConstraints } from "src/components/Card/utils/use-scroll-constraints";
import { useWheelScroll } from "src/components/Card/utils/use-wheel-scroll";
import "./Card.css";
import "./Overlay.css";
import { useHistory } from "react-router-dom";
import { CardContent } from "./CardContent";
import { closeSpring, openSpring } from "../utils/animations";

const dismissDistance = 100;

export const Card = memo(
  ({ index, project, ids, lang, isSelected, mobile }) => {
    let history = useHistory();

    const y = useMotionValue(0);

    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      y.get() > dismissDistance && history.push("/");
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );

    return (
      <>
        <motion.li
          ref={containerRef}
          className={`card`}
          initial={
            isSelected
              ? {
                  y: 0,
                  opacity: 1,
                }
              : { y: 50, opacity: 0 }
          }
          animate={{ y: 0, opacity: 1 }}
          transition={
            isSelected
              ? {
                  delay: 0,
                }
              : { delay: index * 0.1 }
          }
        >
          <Overlay isSelected={isSelected} mobile={mobile} />

          <motion.div
            ref={cardRef}
            onClick={() => {
              !isSelected && history.push(`/${project.id}`);
            }}
            className={`cardContainer ${
              isSelected ? (mobile ? "openMobile" : " openPC") : " noOpened"
            }`}
            style={{ y }}
            layoutTransition={isSelected ? !mobile && openSpring : closeSpring}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
          >
            <CardContent
              project={project}
              ids={ids}
              lang={lang}
              isSelected={isSelected}
              mobile={mobile}
            />
          </motion.div>
        </motion.li>
      </>
    );
  }
);

const Overlay = ({ isSelected, mobile }) => (
  <>
    {!mobile && (
      <motion.div
        initial={false}
        animate={{ opacity: isSelected ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isSelected ? "auto" : "none" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
    )}
  </>
);
