import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

export default function ProductItem({ product, onAddToCart, onSetIsOpenDetail, onGetProduct }) {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [cccdImage, setCccdImage] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [bookingInfo, setBookingInfo] = useState([]);

  const handleOpenAndShow = (product) => {
    onSetIsOpenDetail();
    onGetProduct(product);
  };

  const handleBook = () => {
    // Kiểm tra và xử lý thông tin ở đây
    // Ví dụ: Gửi thông tin đến máy chủ, xác thực, lưu trữ, v.v.

    // Tạo một đối tượng booking mới
    const newBooking = {
      fullName: fullName,
      cccdImage: cccdImage,
      address: address,
      phoneNumber: phoneNumber,
      departureDate: departureDate,
      returnDate: returnDate,
    };
    console.log(newBooking);
    // Thêm đối tượng booking vào danh sách bookingInfo
    setBookingInfo([...bookingInfo, newBooking]);

    // Hiển thị thông báo sau khi đặt thành công
    // alert("Booking successful!\n\nFull Name: " + fullName + "\nPhone Number: " + phoneNumber);

    toast.success("Booking successfull");

    // Đóng modal
    setShowModal(false);
  };

  return (
    <div className="card mb-5">
      <img className="card-img width={100%}" alt="" src={product.image}></img>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">Tiền cọc: {product.price} VNĐ</p>
        <button
          className="btn btn-warning ms-1"
          onClick={() => {
            onAddToCart(product);
          }}
        >
          ĐẶT XE
        </button>
        <button
          className="btn btn-info ms-1"
          onClick={() => {
            handleOpenAndShow(product);
          }}
        >
          XEM NHANH
        </button>
        {/* <button className="btn btn-dark mt-2 ms-1">Giới thiệu xe</button> */}
        <button className="btn btn-danger ms-1" onClick={() => setShowModal(true)}>
          Book
        </button>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Booking Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="fullName">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập họ và tên"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="cccdImage">
                <Form.Label>Hình Căn cước công dân (CCCD)</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCccdImage(e.target.files[0])}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập địa chỉ"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập số điện thoại"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="departureDate">
                <Form.Label>Ngày đi</Form.Label>
                <br />
                <DatePicker
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </Form.Group>
              <Form.Group controlId="returnDate">
                <Form.Label>Ngày về</Form.Label>
                <br />
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBook}>
              Book
            </Button>
          </Modal.Footer>
        </Modal>
        <Toaster position="top-center" />
      </div>
    </div>
  );
}
