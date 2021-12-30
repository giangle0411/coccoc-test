import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CoccocPoint from "./CoccocPoint";

export default class NavUserBlock extends Component {
  render() {
    return (
      <div className="nav-user-block">
        <img src={this.props.avatar} alt="avatar" className="user-avatar"></img>
        <NavLink
          to="/quan-ly-tai-khoan"
          id="quan-ly-tai-khoan"
          exact="true"
          className="user-name"
        >
          {this.props.name}
        </NavLink>
        -
        <CoccocPoint point={this.props.point} />
      </div>
    );
  }
}
