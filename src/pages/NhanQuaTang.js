import React, { useState, useEffect } from "react";
import api from "../apis/index";
import FilterSortBar from "../components/FilterSortBar";
import GiftCard from "../components/GiftCard";
import Pagination from "../components/Pagination";

export default function NhanQuaTang() {
  const [gifts, setGifts] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [giftsPerPage, setGiftPerPage] = useState(20);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1110);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    const fetchGifts = async () => {
      setLoading(true);
      const response = await api.get();
      setGifts(response.data);
      setLoading(false);
    };

    fetchGifts();
    if (isDesktop) {
      setGiftPerPage(20);
    } else setGiftPerPage(8);
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const setTab = (index) => {
    setSelectedTab(index);
  };

  // get displayed gifts (20 per page)
  const indexOfLastGift = currentPage * giftsPerPage;
  const indexOfFirstGift = indexOfLastGift - giftsPerPage;
  const currentGifts = gifts.slice(indexOfFirstGift, indexOfLastGift);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderGiftsList = () => {
    if (loading) {
      return <h2>Loading</h2>;
    }
    return currentGifts.map((gift) => (
      <GiftCard
        key={gift.id}
        imageUrl={gift.imageUrl}
        name={gift.name}
        activeTimeFrom={date(gift.activeTimeFrom)}
        activeTimeTo={date(gift.activeTimeTo)}
        requiredPoints={gift.requiredPoints}
      />
    ));
  };

  const date = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear().toString().slice(-2)
    );
  };

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
              className={selectedTab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => setTab(1)}
            >
              Đổi quà tặng
            </button>
            <button
              className={selectedTab === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => setTab(2)}
            >
              Vòng quay may mắn
            </button>
          </div>
          <div className="content-tabs">
            <div className={selectedTab === 1 ? "active-content" : "content"}>
              <FilterSortBar />
              <div className="gift-card-list">{renderGiftsList()}</div>
              <Pagination
                itemsPerPage={giftsPerPage}
                totalItems={gifts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
          <div className={selectedTab === 2 ? "active-content" : "content"}>
            Vòng quay may mắn
          </div>
        </div>
      </div>
    </div>
  );
}
