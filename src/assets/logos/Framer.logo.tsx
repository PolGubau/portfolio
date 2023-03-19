import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M256.198 170.665 77 0h358.399v170.666H256.2l179.199 170.666H77V170.665h179.198ZM77 341.334h179.199V512L77 341.334Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
