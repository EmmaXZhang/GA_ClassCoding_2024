/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Calendar({ days, dates }) {
  const calendar = [];
  const [cellColor, setCellColor] = useState(Array(28).fill("orange"));

  const [selectedCategory, setSelectedCategory] = useState(null);

  const colorPicker = ["green", "yellow", "blue", "red"];
  const categories = ["Holiday", "Work", "Errands", "Sick"];

  function handleSelect(index) {
    setSelectedCategory(index);
  }

  function handleCellClick(index) {
    const updatedCellColor = [...cellColor];
    updatedCellColor[index] = colorPicker[selectedCategory];
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
        {categories.map((category, index) => (
          <button
            key={index}
            className="categoryCell"
            onClick={() => handleSelect(index)}
            style={{
              backgroundColor: colorPicker[index],
              border: index === selectedCategory ? "5px solid black" : "none",
            }}
          >
            {category}
          </button>
        ))}
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
