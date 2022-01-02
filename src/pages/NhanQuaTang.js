import React, { Component } from "react";
import api from "../apis/index";
import FilterSortBar from "../components/FilterSortBar";
import GiftCard from "../components/GiftCard";

export default class NhanQuaTang extends Component {
  state = { gifts: [], selectedTab: 1 };

  setTab = (index) => {
    this.setState({ selectedTab: index });
  };

  fetchGifts = async () => {
    const response = await api.get();
    this.setState({ gifts: response.data });
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
          <div className="tabs-container">
            <div className="bloc-tabs">
              <button
                className={
                  this.state.selectedTab === 1 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => this.setTab(1)}
              >
                Đổi quà tặng
              </button>
              <button
                className={
                  this.state.selectedTab === 2 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => this.setTab(2)}
              >
                Vòng quay may mắn
              </button>
            </div>
            <div className="content-tabs">
              <div
                className={
                  this.state.selectedTab === 1 ? "active-content" : "content"
                }
              >
                <FilterSortBar />
                <div className="gift-card-list">{this.renderGiftsList()}</div>
              </div>
            </div>
            <div
              className={
                this.state.selectedTab === 2 ? "active-content" : "content"
              }
            >
              Vòng quay may mắn
            </div>
          </div>
        </div>
      </div>
    );
  }
}
