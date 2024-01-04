import React from "react";
import { NavLink } from "react-router-dom";

export default function In4SV() {
  return (
    <div>
      <div className="text-black text-center bg-secondary-subtle p-1">
        <NavLink className="nav-link" to="/adminCar">
          Nhấn vào để qua trang quản lý xe
        </NavLink>
      </div>

      <h2 className="text-white bg-dark p-4 text-center">
        <i class="fa fa-user"></i>
        Thông tin người dùng
      </h2>
    </div>
  );
}
