import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring, openSpring } from "./animations";

export const Title = ({ title, category, textColor, isSelected }) => {
  const inverted = useInvertedScale();
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <motion.div
      className="title-container"
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <span className="category" style={{ color: textColor }}>
        {category}
      </span>
      <h2 style={{ color: textColor }}>{title}</h2>
    </motion.div>
  );
};

const scaleTranslate = ({ x, y, scaleX, scaleY }) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
