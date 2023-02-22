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
      d="M29.112.945H7.888c-2.334 0-3.167.277-4.017.731a5.144 5.144 0 0 0-2.14 2.14C1.276 4.666 1 5.5 1 7.833V21.49c0 2.334.276 3.167.73 4.017a5.144 5.144 0 0 0 2.141 2.14c.85.454 1.683.73 4.017.73h21.224c2.334 0 3.167-.276 4.017-.73a5.144 5.144 0 0 0 2.14-2.14c.455-.85.731-1.683.731-4.017V7.833c0-2.334-.276-3.167-.73-4.017a5.144 5.144 0 0 0-2.141-2.14c-.85-.454-1.683-.73-4.017-.73Z"
      fill="#1CB0F6"
      stroke="#fff"
      strokeWidth={1.5}
    />
    <path
      d="M15.665 1.895v9.459h19.392v6.622H15.665v9.46H9.044v-9.46H1.949v-6.622h7.095v-9.46h6.621Z"
      fill="#FFC800"
    />
  </svg>
);

export default SvgComponent;
