import React from "react";

export default function Cart({
  onCloseCart,

  carts,
  onDeleteProductFromCart,
  onHandleChangeQuantityFromCart,
}) {
  // tổng tiền
  let total = carts.reduce((tongTien, spGioHang, index) => {
    return (tongTien += spGioHang.soLuong * spGioHang.price);
  }, 0);
  return (
    <>
      <div style={{ display: "block" }} className="modal show" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content" style={{ width: "800px" }}>
            <div className="modal-header">
              <h5 className="modal-title">Đơn đặt xe</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseCart}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Tiền cọc</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.length > 0 ? (
                    carts.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img src={item.image} alt={item.name} width="70px" height="70px" />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              onHandleChangeQuantityFromCart(item.id, true);
                            }}
                          >
                            +
                          </button>
                          {item.soLuong}
                          <button
                            onClick={() => {
                              onHandleChangeQuantityFromCart(item.id, false);
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>{item.price.toLocaleString()} VNĐ</td>
                        <td>{(item.price * item.soLuong).toLocaleString()} VNĐ</td>
                        <td>
                          <button
                            onClick={() => onDeleteProductFromCart(item.id)}
                            className="btn btn-danger"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">Không có xe nào trong đơn</td>
                    </tr>
                  )}
                </tbody>

                {total > 0 && ( // Kiểm tra nếu total có giá trị thì mới hiển thị phần tử <td>
                  <tr>
                    <td
                      className="mt-4"
                      colSpan="7"
                      style={{ textAlign: "right", fontWeight: "bold" }}
                    >
                      TỔNG TIỀN : {total.toLocaleString()} $
                    </td>
                  </tr>
                )}
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onCloseCart}
              >
                ĐÓNG
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
