import React, { Component } from "react";
import CoccocPoint from "./CoccocPoint";
import DoiQuaBtn from "./DoiQuaBtn";
export default class GiftCard extends Component {
  render() {
    return (
      <div className="gift-card">
        <img
          src={this.props.imageUrl}
          alt="gift-img"
          className="gift-img"
        ></img>
        <div className="gift-content">
          <div className="gift-name">{this.props.name}</div>
          <div className="gift-duration">
            Hiệu lực: {this.props.activeTimeFrom} - {this.props.activeTimeTo}
          </div>
          <CoccocPoint point={this.props.requiredPoints} />
          <div className="gift-btn-container">
            <DoiQuaBtn />
          </div>
        </div>
      </div>
    );
  }
}
