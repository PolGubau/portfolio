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
      )}{" "}
    </>
  );
}
