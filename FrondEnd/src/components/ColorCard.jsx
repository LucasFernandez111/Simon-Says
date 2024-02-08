import React from "react";

const ColorCard = ({ color, handleClick, colorCurrent, border }) => {
  return (
    <button
      className={`w-48 h-48 bg-${color}-500 ${border} duration-200 m-1 hover:scale-95 hover:brightness-50  ${
        colorCurrent === color && "brightness-200"
      }`}
      onClick={() => handleClick(color)}
    ></button>
  );
};

export default ColorCard;
