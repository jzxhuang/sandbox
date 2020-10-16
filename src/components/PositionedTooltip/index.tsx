import React, { CSSProperties } from "react";
import { Tooltip, TooltipProps } from "@material-ui/core";

interface PositionedTooltipProps extends TooltipProps {
  left?: number | string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
}

/**
 * A tooltip that's absolutely positioned
 */
const PositionedTooltip = (props: PositionedTooltipProps) => {
  const style: CSSProperties = {
    position: "absolute",
    left: props.left,
    top: props.top,
    right: props.right,
    bottom: props.bottom,
  };

  return (
    <Tooltip {...props} style={style}>
      {props.children}
    </Tooltip>
  );
};

export default PositionedTooltip;
