import React, { Component } from "react";
import checkbox from "../assets/check_box_outline_blank.png";

export default class FilterSortBar extends Component {
  render() {
    return (
      <div className="filter-sort-bar">
        <div className="filter-container">
          <div className="filter-item">
            <img src={checkbox} alt="checkbox" className="checkbox" />
            Tất cả
          </div>
          <div className="filter-item">
            <img src={checkbox} alt="checkbox" className="checkbox" />
            Voucher khuyến mại
          </div>
          <div className="filter-item">
            <img src={checkbox} alt="checkbox" className="checkbox" />
            Thẻ điện thoại
          </div>
          <div className="filter-item">
            <img src={checkbox} alt="checkbox" className="checkbox" />
            Quà tặng
          </div>
        </div>
      </div>
    );
  }
}
