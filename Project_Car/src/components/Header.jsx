import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header_content">
            <div className="header_logo">
              <a>HAI HÀ</a>
            </div>
            <div className="header_nav">
              <ul>
                <li className="active">
                  <NavLink className="nav-link" to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/tracuu">
                    Tra cứu
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" to="/contact">
                    Liên hệ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/about">
                    Về chúng tôi
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/sign-up">
                    Đăng kí
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/sign-in">
                    Đăng nhập
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
