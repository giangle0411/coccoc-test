import React, { Component } from "react";
import coccocPointLogo from "../assets/Union.png";

export default class CoccocPoint extends Component {
  render() {
    return (
      <div className="coccoc-point">
        {this.props.point}
        <div className="logo">
          <img
            src={coccocPointLogo}
            alt="point-logo"
            className="cc-point-logo"
          ></img>
        </div>
      </div>
    );
  }
}
