import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import coccocLogo from "../assets/CC Logo Points.png";
import userAvatar from "../assets/Avatar.png";
import NavUserBlock from "./NavUserBlock";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="content-wrapper">
          <div className="nav-content">
            <div className="logo">
              <img src={coccocLogo} alt="logo" className="cc-logo"></img>
            </div>
            <div className="nav-items">
              <NavLink
                to="/"
                id="nhan-qua-tang"
                exact="true"
                className="nav-item"
                style={({ isActive }) => (isActive ? { color: "#4FBA69" } : {})}
              >
                Nhận quà tặng
              </NavLink>
              <NavLink
                to="/nhan-diem-thuong"
                id="nhan-diem-thuong"
                exact="true"
                className="nav-item"
                style={({ isActive }) => (isActive ? { color: "#4FBA69" } : {})}
              >
                Nhận điểm thưởng
              </NavLink>
              <NavLink
                to="xep-hang"
                id="xep-hang"
                exact="true"
                className="nav-item"
                style={({ isActive }) => (isActive ? { color: "#4FBA69" } : {})}
              >
                Xếp hạng
              </NavLink>
              <NavLink
                to="/cau-hoi-thuong-gap"
                id="cau-hoi-thuong-gap"
                exact="true"
                className="nav-item"
                style={({ isActive }) => (isActive ? { color: "#4FBA69" } : {})}
              >
                Câu hỏi thường gặp
              </NavLink>
              <NavUserBlock
                avatar={userAvatar}
                point="1.250"
                name="Huy Thắng"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
