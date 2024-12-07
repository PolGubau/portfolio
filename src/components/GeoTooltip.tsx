"use client";
import { Tooltip } from "pol-ui";

const GeoTooltip = () => {
  return (
    <Tooltip label={<div>DE</div>}>
      <span className="cursor-help">Freiburg.</span>
    </Tooltip>
  );
};

export default GeoTooltip;
