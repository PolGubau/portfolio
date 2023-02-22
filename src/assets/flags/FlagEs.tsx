import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="0.8em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.112.988H7.888c-2.334 0-3.167.277-4.017.731a5.144 5.144 0 0 0-2.14 2.14C1.276 4.71 1 5.542 1 7.876v13.657c0 2.334.276 3.167.73 4.017a5.144 5.144 0 0 0 2.141 2.14c.85.454 1.683.73 4.017.73h21.224c2.334 0 3.167-.276 4.017-.73a5.144 5.144 0 0 0 2.14-2.14c.455-.85.731-1.683.731-4.017V7.876c0-2.334-.276-3.167-.73-4.017a5.144 5.144 0 0 0-2.141-2.14c-.85-.454-1.683-.73-4.017-.73Z"
      fill="#FF4B4B"
      stroke="#fff"
      strokeWidth={1.5}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.95 9.234h33.107V20.18H1.95V9.234Z"
      fill="#FFC800"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.822 11.973a.92.92 0 0 1 .92.92v3.633a.92.92 0 0 1-1.84 0v-3.634a.92.92 0 0 1 .92-.92ZM5.623 11.973a.92.92 0 0 1 .92.92v3.633a.92.92 0 0 1-1.84 0v-3.634a.92.92 0 0 1 .92-.92Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.289 11.055h3.862c.457 0 .828.37.828.827v3.711a2.76 2.76 0 0 1-5.518 0v-3.71c0-.458.37-.828.828-.828Z"
      fill="#FF4B4B"
    />
  </svg>
);

export default SvgComponent;
