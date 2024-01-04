import React from "react";

export default function ProductDetail({ onCloseDetail, product }) {
  return (
    <div style={{ display: "block" }} class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">THÔNG TIN CHI TIẾT SẢN PHẨM</h5>
            <button
              onClick={onCloseDetail}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="text-center">
              <img src={product.image} alt="" height={300} width={300} lt="" />
            </div>
            <h3 className="text-center mb-4">{product.name}</h3>
            <p>Mô tả xe : {product.description}</p>
            <p>Mô tả ngắn : {product.shortDescription}</p>
            <p>Số lượng xe trong bãi : {product.quantity}</p>
            <p>Nhãn hiệu: {product.hieuxe} </p>
          </div>
          <div class="modal-footer">
            <button
              onClick={onCloseDetail}
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
