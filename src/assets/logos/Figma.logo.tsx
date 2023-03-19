import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={49}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.641 0a7.986 7.986 0 0 0-7.983 7.983 7.986 7.986 0 0 0 7.983 7.983 7.986 7.986 0 0 0-7.983 7.982 7.986 7.986 0 0 0 7.983 7.983 7.986 7.986 0 0 0-7.983 7.983 7.986 7.986 0 0 0 7.983 7.983 7.986 7.986 0 0 0 7.983-7.983V23.948a7.986 7.986 0 0 0 7.983 7.983 7.986 7.986 0 0 0 7.983-7.983 7.986 7.986 0 0 0-7.983-7.982 7.986 7.986 0 0 0 7.983-7.983A7.986 7.986 0 0 0 32.607 0H16.64Zm15.966 15.966h-7.983v7.982a7.986 7.986 0 0 1 7.983-7.982Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(.613)"
          d="M0 0h47.897v47.897H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
