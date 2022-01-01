import React, { Component } from "react";
import api from "../apis/index";
import FilterSortBar from "../components/FilterSortBar";
import GiftCard from "../components/GiftCard";

export default class NhanQuaTang extends Component {
  state = { gifts: [] };

  fetchGifts = async () => {
    const response = await api.get();
    this.setState({ gifts: response.data });
    console.log(response.data);
  };

  componentDidMount() {
    this.fetchGifts();
  }

  date(timestamp) {
    const date = new Date(timestamp * 1000);
    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear().toString().slice(-2)
    );
  }

  renderGiftsList() {
    return this.state.gifts.map((gift, index) => {
      return (
        <GiftCard
          key={index}
          imageUrl={gift.imageUrl}
          name={gift.name}
          activeTimeFrom={this.date(gift.activeTimeFrom)}
          activeTimeTo={this.date(gift.activeTimeTo)}
          requiredPoints={gift.requiredPoints}
        />
        // <div className="gift-card" key={index}>
        //   <img src={gift.imageUrl} alt="gift-img" className="gift-img"></img>
        //   <div className="gift-content">
        //     <div className="gift-name">{gift.name}</div>
        //     <div className="gift-duration">
        //       Hiệu lực: {this.date(gift.activeTimeFrom)} -{" "}
        //       {this.date(gift.activeTimeTo)}
        //     </div>
        //     <CoccocPoint point={gift.requiredPoints} />
        //     <div className="gift-btn-container">
        //       <DoiQuaBtn />
        //     </div>
        //   </div>
        // </div>
      );
    });
  }

  render() {
    return (
      <div className="nhan-qua-tang">
        <div className="header">
          <div className="content-wrapper">
            <div className="heading title">Nhận quà tặng</div>
          </div>
        </div>
        <div className="content-wrapper">
          <FilterSortBar />
          <div className="gift-card-list">{this.renderGiftsList()}</div>
        </div>
      </div>
    );
  }
}
