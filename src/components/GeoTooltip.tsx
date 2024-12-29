"use client";
import { Tooltip } from "pol-ui";
import { useMemo } from "react";

export const GeoTooltip = () => {
  return useMemo(
    () => (
      <Tooltip label={<div>DE</div>}>
        <span className="cursor-help">Freiburg.</span>
      </Tooltip>
    ),
    [],
  );
};
