import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useScrollConstraints } from "src/components/Card/utils/use-scroll-constraints";
import { useWheelScroll } from "src/components/Card/utils/use-wheel-scroll";
import "./Card.css";
import "./Overlay.css";
import { CardContent } from "./CardContent";
import { closeSpring, openSpring } from "../utils/animations";
import { ProyectoInterface } from "src/Interfaces";

interface CardInterfaceInline {
  project: ProyectoInterface;
  allData: Array<ProyectoInterface>;
  ids: Array<number>;
  lang: any;
  isSelected: any;
  mobile: boolean;
  index: number;
}

export const Card = memo(
  ({
    index,
    project,
    ids,
    lang,
    isSelected,
    mobile,
    allData,
  }: CardInterfaceInline) => {
    const y = useMotionValue(0);
    const navigate = useNavigate();

    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      const dismissDistance = 100;
      if (y.get() > dismissDistance) {
        navigate("/");
      }
      if (!mobile && y.get() < -dismissDistance) {
        navigate("/");
      }
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
              if (!isSelected) {
                navigate(`/${project.path}`);
              }
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
              allData={allData}
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

const Overlay = ({
  isSelected,
  mobile,
}: {
  isSelected: boolean;
  mobile: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <>
      {!mobile && (
        <motion.div
          initial={false}
          animate={{ opacity: isSelected ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isSelected ? "auto" : "none" }}
          className="overlay"
          onClick={() => navigate("/")}
        ></motion.div>
      )}
    </>
  );
};
