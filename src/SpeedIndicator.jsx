import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer/slim";
import raw from "../Speed.txt";

export default function SpeedIndicator() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setSpeed(Number(text));
      });
  }, []);
  return (
    <ReactSpeedometer
      maxValue={500}
      value={speed}
      needleColor="red"
      startColor="green"
      segments={10}
      endColor="blue"
    />
  );
}
