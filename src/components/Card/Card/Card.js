import React, { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { useInvertedBorderRadius } from "src/components/Card/utils/use-inverted-border-radius";
import { Title } from "src/components/Card/Title/Title";
import { Image } from "src/components/Card/Image/Image";
import Description from "src/components/Card/Description/Description";
import { openSpring, closeSpring } from "src/components/Card/utils/animations";
import { useScrollConstraints } from "src/components/Card/utils/use-scroll-constraints";
import { useWheelScroll } from "src/components/Card/utils/use-wheel-scroll";
import "./Card.css";
import ChangeProjectButtons from "src/components/Card/ChangeProjectButtons";
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
    year,
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
      // y.get() < -600 && history.push("/");
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

    return (<>
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
        
        {/* Card */}
        <Link className={`card-content-container ${isSelected && "open"} card-open-link`} to={id}>
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
              year={year}
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
        </Link>
        {/* Outside Card */}
        {!isSelected && <Link  />}
      </motion.li>
    </>);
  },
);


const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 0.7 : 0 }}
    transition={{ duration: 0.3 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <Link to="/" />
  </motion.div>
);
