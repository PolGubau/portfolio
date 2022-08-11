import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring, openSpring } from "src/components/Card/utils/animations";
import "./Title.css";
import { FaArrowRight } from "react-icons/fa";

export const Title = ({
  title,
  category,
  textColor,
  isSelected,
  link,
  lang,
}) => {
  const inverted = useInvertedScale();
  const x = isSelected ? 30 : 20; // padding del titulo
  const y = x;
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <motion.div
      className="title-container"
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <a onClick={handleClick} href={link}>
        <h2 className="title" style={{ color: textColor }}>
          {title}
          {isSelected && (
            <motion.div
              transition={{ delay: 0.3, duration: 0.3 }}
              initial={{ display: "none", x: -100, opacity: 0 }}
              duration={2}
              animate={{ display: "flex", x: 0, opacity: 1 }}
              className="arrow"
            >
              <FaArrowRight style={{ color: textColor }} />
            </motion.div>
          )}
        </h2>
      </a>
      <motion.span
        className="category"
        style={{ color: textColor, opacity: isSelected ? 1 : 0 }}
      >
        {category[lang]}
      </motion.span>
    </motion.div>
  );
};

const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
