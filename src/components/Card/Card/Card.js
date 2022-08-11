import * as React from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { useInvertedBorderRadius } from "./utils/use-inverted-border-radius";
import { Title } from "./Title";
import { Image } from "./Image";
import Description from "./Description";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "./utils/use-scroll-constraints";
import { useWheelScroll } from "./utils/use-wheel-scroll";
import "./Card.css";
import ChangeProjectButtons from "./ChangeProjectButtons/index";
// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 100;

export const Card = memo(
  ({
    index,
    isSelected,
    id,
    title,
    category,
    history,
    pointOfInterestX,
    pointOfInterestY,
    textColor,
    backgroundColor,
    description,
    path,
    width,
    mobile,
    tags,
    link,
    madeFor,
    ids,

    lang,
  }) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);

    const inverted = useInvertedBorderRadius(20);

    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      // DISTANCIAS DONDE SE QUITA LA CARTA AL HACER SCROLL
      y.get() > dismissDistance && history.push("/");
      // y.get() > -150 && history.push("/");
    }

    function checkZIndex(latest) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
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
        <Overlay isSelected={isSelected} />
        <motion.div
          className={`card-content-container ${isSelected && "open"}`}
        >
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? !mobile && openSpring : closeSpring}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <ChangeProjectButtons id={id} ids={ids} isSelected={isSelected} />
            <Title
              lang={lang}
              title={title}
              category={category}
              isSelected={isSelected}
              textColor={textColor}
              link={link}
            />

            <Image
              id={id}
              ids={ids}
              width={width}
              path={path}
              isSelected={isSelected}
              pointOfInterestX={pointOfInterestX}
              pointOfInterestY={pointOfInterestY}
              backgroundColor={backgroundColor}
            />

            <motion.div
              className="content-container"
              style={{ ...inverted, originY: 0, originX: 0 }}
            >
              <Description
                tags={tags}
                description={description}
                lang={lang}
                link={link}
                madeFor={madeFor}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        {!isSelected && <Link to={id} className={`card-open-link`} />}
      </motion.li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 0.6 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <Link to="/" />
  </motion.div>
);
