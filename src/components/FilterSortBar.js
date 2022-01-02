import React, { useState } from "react";
import checkboxBlank from "../assets/check_box_outline_blank.png";
import checkbox from "../assets/check_box.png";
import "../style/filterSortBar.css";
import DropDown from "./DropDown";
import filterIcon from "../assets/Vector.png";

export default function FilterSortBar() {
  const [options] = useState([
    "Tat ca",
    "Voucher khuyen mai",
    "The dien thoai",
    "Qua tang",
  ]);
  const [selectedOption, setSelectedOption] = useState("Tat ca");
  const [sortOptions] = useState([
    "Sắp xếp theo: Phổ biến",
    "Option 1",
    "Option 2",
  ]);

  const setOption = (option) => {
    setSelectedOption(options[option]);
  };

  return (
    <div className="filter-sort-bar">
      <div className="filter-sort-bar-desktop">
        <div className="filter-container">
          <label
            className={
              selectedOption === "Tat ca"
                ? "filter-item active-item"
                : "filter-item"
            }
            onClick={(e) => setOption(0)}
          >
            <img src={checkbox} alt="checkbox" className="check-box" />
            <img
              src={checkboxBlank}
              alt="checkbox"
              className="check-box-blank"
            />
            Tất cả
          </label>

          <label
            className={
              selectedOption === "Voucher khuyen mai"
                ? "filter-item active-item"
                : "filter-item"
            }
            onClick={(e) => setOption(1)}
          >
            <img src={checkbox} alt="checkbox" className="check-box" />
            <img
              src={checkboxBlank}
              alt="checkbox"
              className="check-box-blank"
            />
            Voucher khuyến mại
          </label>

          <label
            className={
              selectedOption === "The dien thoai"
                ? "filter-item active-item"
                : "filter-item"
            }
            onClick={(e) => setOption(2)}
          >
            <img src={checkbox} alt="checkbox" className="check-box" />
            <img
              src={checkboxBlank}
              alt="checkbox"
              className="check-box-blank"
            />
            Thẻ điện thoại
          </label>

          <label
            className={
              selectedOption === "Qua tang"
                ? "filter-item active-item"
                : "filter-item"
            }
            onClick={(e) => setOption(3)}
          >
            <img src={checkbox} alt="checkbox" className="check-box" />
            <img
              src={checkboxBlank}
              alt="checkbox"
              className="check-box-blank"
            />
            Quà tặng
          </label>
        </div>
        <div className="dropdown">
          <DropDown options={sortOptions} />
        </div>
      </div>
      <div className="filter-sort-bar-mobile">
        <div className="filter">
          <img src={filterIcon} alt="filter-icon" className="filter-icon" />
          Lọc
        </div>
      </div>
    </div>
  );
}
