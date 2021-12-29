import React, { Component } from "react";
import coccocLogo from "../assets/CC Logo Points.png";
export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="content-wrapper">
          <div className="logo">
            <img src={coccocLogo} alt="logo" className="cc-logo"></img>
          </div>
          <div className="nav-items"></div>
        </div>
      </div>
    );
  }
}
