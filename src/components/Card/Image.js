import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";
import "./Image.css";
import { useState } from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Image = ({
  id,
  ids,
  path,
  width,
  isSelected,
  pointOfInterestX = 0,
  pointOfInterestY = 0,
  backgroundColor,
}) => {
  const inverted = useInvertedScale();

  let actualID = ids.indexOf(id);
  console.log("🚀 ~ file: Image.js ~ line 29 ~ actualID", actualID);
  //da la posición de la carta actual en el array ids

  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];

  return (
    <motion.div
      className="card-image-container"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      {isSelected && (
        <div className="buttons-image">
          <motion.button className="controls-image prev-image">
            <Link to={`/${prevID}`}>
              <GrFormPreviousLink />
            </Link>
          </motion.button>
          <motion.button className="controls-image next-image">
            <Link to={`/${nextID}`}>
              <GrFormNextLink />
            </Link>
          </motion.button>
        </div>
      )}

      <motion.img
        className="card-image"
        src={`images/${id}/0.webp`}
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
