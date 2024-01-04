import React from "react";
import Product from "./Product";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Carousel />
        <Product />
        <Footer />
      </div>
    </div>
  );
}
