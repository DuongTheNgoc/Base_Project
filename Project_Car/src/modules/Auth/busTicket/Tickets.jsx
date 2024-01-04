import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat } from "../redux/slice/busTicketSlice";
import { ToastContainer, toast } from "react-toastify";
import { PAY_SEAT } from "../redux/constants/busTicketConstants";
import "react-toastify/dist/ReactToastify.css";

export default function Tickets() {
  const selectedSeats = useSelector((state) => {
    return state.busTicket.selectedSeats;
  });
  const totalPrice = useSelector((state) => {
    return state.busTicket.totalPrice;
  });

  const dispatch = useDispatch(); //lấy hàm dispatch từ Store.
  const handleRemove = (seat) => {
    // dispatch({ type: "busTicket/removeSeat", payload: seat });
    dispatch(removeSeat(seat));
  };

  const handlePay = () => {
    // Gửi action đến Redux store để thực hiện thanh toán vé
    dispatch({ type: PAY_SEAT, payload: selectedSeats });

    // Hiển thị thông báo thành công sử dụng react-toastify
    toast.success("🦄 Mua vé thành công!", {
      position: "top-center", // Vị trí hiển thị thông báo
      autoClose: 500, // Đóng tự động sau 500ms
      hideProgressBar: false, // Hiển thị thanh tiến trình
      closeOnClick: true, // Đóng thông báo khi click vào nó
      pauseOnHover: true, // Tạm dừng tự động đóng khi di chuột qua
      draggable: true, // Cho phép kéo thông báo
      progress: undefined, // Không hiển thị thanh tiến trình
      theme: "light", // Chủ đề của thông báo
    });
  };

  return (
    <div>
      <h3>Danh sách ghế đang chọn</h3>
      <div className="typeSeat">
        <ul>
          <li style={{ listStyle: "none", marginBottom: "10px" }}>
            <button
              className="btn me-3"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#E87C86",
              }}
            ></button>
            Ghế đã đặt
          </li>
          <li style={{ listStyle: "none", marginBottom: "10px" }}>
            <button
              className="btn btn-success me-3"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "15px",
              }}
            ></button>
            Ghế đang chọn
          </li>
          <li style={{ listStyle: "none", marginBottom: "10px" }}>
            <button
              className="btn btn-secondary me-3"
              style={{
                width: "40px",
                height: "40px",
                fontSize: "15px",
              }}
            ></button>
            Ghế chưa đặt
          </li>
        </ul>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th style={{ width: "150px" }}>Số ghế</th>
              <th style={{ width: "200px" }}>Giá</th>
              <th style={{ width: "100px" }}>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {selectedSeats.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price.toLocaleString()} VNĐ</td>
                <td
                  className="btn btn-outline-danger"
                  style={{ width: "40px", height: "40px" }}
                  onClick={() => handleRemove(item)}
                >
                  X
                </td>
              </tr>
            ))}
            <tr className="fw-bold">
              <td>Tổng tiền</td>
              <td>{totalPrice.toLocaleString()} VNĐ</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="text-end">
          <button className="btn btn-primary" onClick={handlePay}>
            Thanh toán
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* {selectedSeats.map((item) => {
        return (
          <p>
            <span>
              Ghế: {item.name} - {item.price}$
            </span>
            <button className="btn btn-danger ms-2" onClick={() => handleRemove(item)}>
              X
            </button>
          </p>
        );
      })} */}
    </div>
  );
}
