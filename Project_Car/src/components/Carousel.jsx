import React from "react";
import { NavLink } from "react-router-dom";

export default function Carousel() {
  return (
    <div>
      <section className="Carousel">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div className="carousel_content">
                <h1>DU LỊCH HAI HÀ</h1>
                <h3>Không đi chơi phí cả một đời người</h3>
                <p>
                  Chọn du lịch HAI HÀ chọn đúng đối tác đưa các bạn đến với những nơi đẹp nhất đất
                  nước Việt Nam và có những kỉ niệm khó phai bên gia đình người thân.
                </p>
                <div>
                  <button className="btnPhone-white me-2">
                    <NavLink className="nav-link" to="/about">
                      <i className="fa fa-info-circle" /> Thông tin thêm
                    </NavLink>
                  </button>

                  <button className="btnPhone-blue">
                    <NavLink className="nav-link" to="/tracuu">
                      <i className="fa fa-shopping-cart" /> Chọn xe
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 d-md-block d-none">
              <img className="img-fluid" src="./img/xe7-1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
