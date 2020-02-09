import React from 'react';

const ColorPicker = ({ colors, selColorIdx, changeColor }) => (
  <div>
    {colors.map((color, idx) => (
      <button key={color} value={idx} onClick={changeColor}>{color}</button>
    ))}
  </div>
);

export default ColorPicker;