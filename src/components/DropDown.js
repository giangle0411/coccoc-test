import React from "react";
import "../style/dropdown.css";

export default function DropDown({ options }) {
  return (
    <select className="select">
      {options.map((option) => (
        <option key={option} className="option">
          {option}
        </option>
      ))}
    </select>
  );
}
