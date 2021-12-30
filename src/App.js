import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NhanQuaTang from "./pages/NhanQuaTang";
import NhanDiemThuong from "./pages/NhanDiemThuong";
import XepHang from "./pages/XepHang";
import CauHoiThuongGap from "./pages/CauHoiThuongGap";
import QuanLyTaiKhoan from "./pages/QuanLyTaiKhoan";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<NhanQuaTang />} />
            <Route
              path="/nhan-diem-thuong"
              exact
              element={<NhanDiemThuong />}
            />
            <Route path="/xep-hang" exact element={<XepHang />} />
            <Route
              path="/cau-hoi-thuong-gap"
              exact
              element={<CauHoiThuongGap />}
            />
            <Route
              path="/quan-ly-tai-khoan"
              exact
              element={<QuanLyTaiKhoan />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
