import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";
import "./Image.css";
import { useState } from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export const Image = ({
  id,
  path,
  width,
  isSelected,
  pointOfInterestX = 0,
  pointOfInterestY = 0,
  backgroundColor,
  imagesNum = 4,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const inverted = useInvertedScale();
  // si hay imagen donde ir, la ponemos en el estado
  const nextImage = (d) => {
    if (imageIndex + d > -1 && imageIndex + d < imagesNum) {
      setImageIndex(imageIndex + d);
    }
  };
  return (
    <motion.div
      className="card-image-container"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      {isSelected && (
        <div className="buttons-image">
          <motion.button
            className="controls-image prev-image"
            onClick={() => {
              nextImage(-1);
            }}
          >
            <GrFormPreviousLink />
          </motion.button>
          <motion.button
            className="controls-image next-image"
            onClick={() => {
              nextImage(1);
            }}
          >
            <GrFormNextLink />
          </motion.button>
        </div>
      )}

      <motion.img
        className="card-image"
        src={`images/${id}/${imageIndex}.webp`}
        alt=""
        width={isSelected ? `${width + 100}px` : `${width}px`}
        initial={false}
        animate={
          isSelected
            ? { x: pointOfInterestX + 50, y: pointOfInterestY + -20 }
            : { x: pointOfInterestX, y: pointOfInterestY }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};
