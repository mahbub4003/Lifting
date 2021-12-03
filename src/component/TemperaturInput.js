import React from "react";
const scaleNames = {
  c: "celsius",
  f: "Fahrenheite",
};

function TemperaturInput({ temperatur, scale, onChangeHandler }) {
  return (
    <div>
      <fieldset>
        <legend>Input temperatur in {scaleNames[scale]}:</legend>
        <input
          type="text"
          onChange={(e) => onChangeHandler(e, scale)}
          value={temperatur}
        />
      </fieldset>
    </div>
  );
}

export default TemperaturInput;
