import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Rotating = ({ width, strokeColor, strokeWidth, animationDuration }) => {
  return (
    <RotatingLines
      width={width}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
      animationDuration={animationDuration}
    />
  );
};

export default Rotating;
