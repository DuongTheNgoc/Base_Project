import React, { useEffect, useRef } from "react";
import ProductList from "./ProductList";
import { useState } from "react";
import toast from "react-hot-toast";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";

export default function ShoeShop() {
  // state quản lý giá trị sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setselectedProduct] = useState(null);

  //modal - state quản lý trạng thái ẩn hiện của modal giỏ hàng
  const [isOpen, setIsOpen] = useState(false);

  //modal - state quản lý trạng thái ẩn hiện của Detail
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  // state quản lý sản phẩm trong giỏ hàng
  const [carts, setCarts] = useState([]);

  // tổng số hàng
  const totalProduct = carts.reduce((result, item) => {
    return result + item.soLuong;
  }, 0);

  // hàm thêm sản phẩm vào Cart
  const handleAddToCart = (products) => {
    // kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const found = carts.find((item) => item.id === products.id);
    if (found) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const newCarts = carts.map((item) => {
        if (item.id === products.id) {
          return { ...item, soLuong: item.soLuong + 1 };
        }
        return item;
      });

      setCarts(newCarts);
    } else {
      // sản phẩm chưa tồn tại trong giỏ hàng
      const productWithQuantiTy = { ...products, soLuong: 1 };
      setCarts([...carts, productWithQuantiTy]);
    }
    setCarts((newCarts) => {
      console.log(newCarts);
      return newCarts;
    });
  };

  // hàm xóa sản phẩm
  const handleDeleteProductFromCart = (productID) => {
    const newCarts = carts.filter((item) => item.id !== productID);
    setCarts(newCarts);
  };

  // hàm thay đổi số lượng của sản phẩm
  const handleChangeQuantityFromCart = (productID, tangGiam) => {
    var gioHangCapNhat = [...carts];
    let index = gioHangCapNhat.findIndex((sp) => sp.id === productID);

    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    setCarts(gioHangCapNhat);
  };

  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  // đóng giỏ hàng
  const handleCloseCart = () => {
    setIsOpen(false);
  };

  // hàm đóng chi tiết
  const handleCloseDetail = () => {
    setIsOpenDetail(false);
  };

  // hàm mở chi tiết
  const handleOpenDetail = () => {
    setIsOpenDetail(true);
  };

  // hàm lựa sản phẩm để xem chi tiết
  const handleGetProduct = (product) => {
    setselectedProduct(product);
  };

  useEffect(() => {
    axios
      .get("https://65743d90f941bda3f2af8183.mockapi.io/api/qlxe/cars")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (searchValue && posts) {
      const filteredPosts = posts.filter((post) =>
        post.hieuxe.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPosts(filteredPosts);
      console.log(filteredPosts);
    } else {
      setFilteredPosts([]);
    }
  }, [searchValue, posts]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="container ">
        <div>
          <div className="row mb-3">
            <div className="col">
              <div className="input-group">
                <input
                  className="form-control mt-5 ps-5"
                  type="text"
                  placeholder="Search by hieuxe"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <div className="input-group-prepend">
                  <span className="input-group-text mt-5 pt-3">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-search" />
            </span>
          </div> */}
          {/* <i class="fa fa-search"></i>
          {/* Hiển thị danh sách bài viết đã lọc */}

          {filteredPosts.map((filteredPost) => (
            <div key={filteredPost.id}>
              <h3>{filteredPost.name}</h3>
              <p>Prepay: {filteredPost.price} VNĐ</p>
              <p>Description: {filteredPost.description}</p>
              <p>Short Description: {filteredPost.shortDescription}</p>
              <p>Quantity: {filteredPost.quantity}</p>
              <img src={filteredPost.image} alt={filteredPost.name} />
              <p>Hieuxe: {filteredPost.hieuxe}</p>
            </div>
          ))}
        </div>
        <h1 className="text-center text-primary pt-5">LUXURY CAR</h1>
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger mb-4 " onClick={() => setIsOpen(true)}>
            <i class="fa fa-paper-plane"></i> Lịch đặt xe ({totalProduct})
          </button>
        </div>
        <ProductList
          onGetProduct={handleGetProduct}
          products={posts}
          onAddToCart={handleAddToCart}
          onSetIsOpenDetail={handleOpenDetail}
        />
        {isOpen && (
          <Cart
            onHandleChangeQuantityFromCart={handleChangeQuantityFromCart}
            carts={carts}
            onCloseCart={handleCloseCart}
            onDeleteProductFromCart={handleDeleteProductFromCart}
          />
        )}
        {isOpenDetail && (
          <ProductDetail product={selectedProduct} onCloseDetail={handleCloseDetail} />
        )}
      </div>
      <Footer />
    </>
  );
}
