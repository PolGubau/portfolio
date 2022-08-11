import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import "./ChangeProjectButtons.css";

//
export default function ChangeProjectButtons({ id, ids, isSelected }) {
  let actualID = ids.indexOf(id);
  //da la posición de la carta actual en el array ids

  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];

  return (
    <>
      {isSelected && (
        <div className="buttons-image">
          <motion.button
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            animate={{ opacity: 1, x: 0 }}
            className=" button controls-image prev-image"
          >
            <Link to={`/${prevID}`}>
              <GrFormPreviousLink />
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            animate={{ opacity: 1, x: 0 }}
            className="button controls-image next-image"
          >
            <Link to={`/${nextID}`}>
              <GrFormNextLink />
            </Link>
          </motion.button>
        </div>
      )}{" "}
    </>
  );
}
