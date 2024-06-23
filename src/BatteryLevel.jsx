/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import raw from "../BatteryLevel.txt";

export default function BatteryLevel() {
  const [batteryLevel, setBatteryLevel] = useState(90);

  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setBatteryLevel(text);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <BatteryInfo batteryLevel={batteryLevel} />
        </div>
      </div>
    </div>
  );
}

// Component to display the battery info
const BatteryInfo = ({ batteryLevel }) => (
  <div
    className={`w-32 h-14 border-2 ${
      batteryLevel > 70
        ? "border-green-500"
        : batteryLevel > 20
        ? "border-yellow-500"
        : "border-red-500"
    } rounded-lg flex items-center justify-start overflow-hidden relative`}
  >
    <div
      className={`${
        batteryLevel > 70
          ? "bg-green-300"
          : batteryLevel > 20
          ? "bg-yellow-300"
          : "bg-red-300"
      } h-full`}
      style={{ width: `${batteryLevel}%` }}
    ></div>
    <div className="absolute w-full h-full flex items-center justify-center text-lg font-semibold">
      {batteryLevel}%
    </div>
    <ChargingIcon batteryLevel={batteryLevel} />
  </div>
);

const ChargingIcon = ({ batteryLevel }) => {
  return (
    <svg
      className={`absolute right-0 mr-[-6px] w-6 h-6 ${
        batteryLevel > 70
          ? "text-green-500"
          : batteryLevel > 20
          ? "text-yellow-500"
          : "text-red-500"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7L6 12h4v8l5-5h-4v-8z"
      />
    </svg>
  );
};
