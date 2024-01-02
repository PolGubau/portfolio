"use client";

import React from "react";

const AnimatedLogo = () => {
  return (
    <svg
      className="w-96 h-96 "
      width="482"
      height="442"
      viewBox="0 0 482 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className=" stroke-primary"
        d="M179 363.5C173.333 329.333 148.6 259.7 95 254.5M54 298.5C56.6667 261.5 59.6 203.5 105.5 127C144.5 62 241 32 265 51.5C289 71 227.5 168 207.5 194.5C191.5 215.7 68.5 362 9 432.5M149 146.5L335.5 292.5C347.167 278.667 363.5 248.5 335.5 238.5C300.5 226 283.5 260 278.5 269M264 312L274 298.5L309.5 328C297.167 363.833 266.5 432.3 242.5 419.5C212.5 403.5 193 306 233.5 246C274 186 328 108.5 473 9M345 194.5C353 214.333 373.3 247.8 390.5 223C407.7 198.2 382.333 178 367.5 171M189 264C194 264 197.5 268 197.5 274.5C197.333 277.5 195.4 283.5 189 283.5C182.6 283.5 179.5 278 179.5 274.5C179.5 271 181 264 189 264Z"
        stroke="black"
        strokeWidth="20"
        strokeLinecap="round"
        strokeDasharray="0,0,0,2264.97119140625"
      >
        <animate
          attributeType="XML"
          attributeName="stroke-dasharray"
          repeatCount="1"
          dur="2.5s"
          values="0,0,0,2264.97119140625; 2264.97119140625,0,0,0"
          keyTimes="0; 1"
          fill="freeze"
        ></animate>
      </path>
    </svg>
  );
};

export default AnimatedLogo;
