import React, { useState } from 'react';
import './App.css';
const hexToRgb = (hex) => {
  // Удаляем символ #
  hex = hex.replace('#', '');

  // Преобразуем короткий формат в длинный
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }

  // Преобразуем HEX в RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const isValidHex = (hex) => {
  return /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);
};

const ColorConverter = () => {
  const [hex, setHex] = useState('#9921ff'); // Example color
  const [rgb, setRgb] = useState(hexToRgb('#9921ff'));

  const handleChange = (event) => {
    const newHex = event.target.value;
    setHex(newHex);

    if (isValidHex(newHex)) {
      setRgb(hexToRgb(newHex));
    } else {
      setRgb('Invalid HEX');
    }
  };

  return (
    <div className="App" style={{ backgroundColor: rgb }}>
      <div className="blok"> 
      <input
        type="text"
        value={hex}
        onChange={handleChange}
        placeholder="Enter HEX color"
        maxLength={7}
      />
      <p>{rgb}</p>
      </div>
    </div>
  );
};

export default ColorConverter;