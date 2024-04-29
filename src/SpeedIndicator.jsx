import React from "react";
import ReactSpeedometer from "react-d3-speedometer/slim";

export default function SpeedIndicator() {
  return (
    <ReactSpeedometer
      maxValue={500}
      value={473}
      needleColor="red"
      startColor="green"
      segments={10}
      endColor="blue"
    />
  );
}
