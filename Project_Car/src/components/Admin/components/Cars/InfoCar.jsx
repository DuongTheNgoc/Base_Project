import React from "react";
import { NavLink } from "react-router-dom";

export default function InfoCar() {
  return (
    <div>
      <div className="text-black text-center bg-secondary-subtle p-1">
        <NavLink className="nav-link" to="/adminUser">
          Nhấn vào để qua trang quản lý người dùng
        </NavLink>
      </div>
      <h1 className="text-white bg-dark p-4 text-center  ">
        <i class="fa fa-car"></i>Thông tin xe
      </h1>
    </div>
  );
}
