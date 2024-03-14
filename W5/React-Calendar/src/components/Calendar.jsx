/* eslint-disable react/prop-types */
import { useState } from "react";
import Category from "./Category";

export default function Calendar({ days, dates }) {
  const calendar = [];
  const [cellColor, setCellColor] = useState(Array(28).fill("orange"));

  //0-3, pick color index
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryData = [
    { name: "Holiday", color: "green" },
    { name: "Work", color: "yellow" },
    { name: "Errands", color: "blue" },
    { name: "Sick", color: "red" },
  ];

  function handleSelect(index) {
    setSelectedCategory(index);
  }

  function handleCellClick(index) {
    const updatedCellColor = [...cellColor];
    updatedCellColor[index] = categoryData[selectedCategory].color;
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
      <Category
        categoryData={categoryData}
        handleSelect={handleSelect}
        selectedCategory={selectedCategory}
      />

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
