/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Calendar({ days, dates }) {
  const calendar = [];
  const [cellColor, setCellColor] = useState(Array(28).fill("orange"));

  const [select, setSelect] = useState(null);
  const [colorSelect, setColorSelect] = useState(null);

  const colorPicker = ["green", "yellow", "blue", "red"];

  function handleSelect(index) {
    setSelect(index); // get color index
    setColorSelect(colorPicker[index]); //get color selected
  }

  function handleCellClick(index) {
    const updatedCellColor = [...cellColor];
    updatedCellColor[index] = colorSelect;
    setCellColor(updatedCellColor);
  }

  for (let i = 0; i < 28; i++) {
    const date = dates[i];
    //ensures index within 0 to 6
    const day = days[i % 7].name;
    calendar.push({ date, day });
  }

  return (
    <>
      <div className="category">
        <button
          className="categoryCell holiday"
          onClick={() => handleSelect(0)}
          style={{ border: select === 0 ? "5px solid black" : "none" }}
        >
          Holiday
        </button>
        <button
          className="categoryCell work"
          onClick={() => handleSelect(1)}
          style={{ border: select === 1 ? "5px solid black" : "none" }}
        >
          Work
        </button>
        <button
          className="categoryCell errands"
          onClick={() => handleSelect(2)}
          style={{ border: select === 2 ? "5px solid black" : "none" }}
        >
          Errands
        </button>
        <button
          className="categoryCell sick"
          onClick={() => handleSelect(3)}
          style={{ border: select === 3 ? "5px solid black" : "none" }}
        >
          Sick
        </button>
      </div>

      <div className="calendar">
        {calendar.map((cell, index) => (
          <div
            key={index}
            className="cell"
            style={{ backgroundColor: cellColor[index] }}
            onClick={() => handleCellClick(index)}
          >
            <p>{cell.day}</p>
            <p>{cell.date}</p>
          </div>
        ))}
      </div>
    </>
  );
}
