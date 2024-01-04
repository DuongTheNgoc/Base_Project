import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Main from "./components/layout/Main";
import Home from "./components/Home";
import About from "./modules/pages/About/About";
import Contact from "./modules/pages/Contact/Contact";
import ShoeShop from "./modules/pages/Product/ShoeShop";
import Layout from "./components/Admin/components/Users/Layout";
import LayoutCar from "./components/Admin/components/Cars/LayoutCar";
import BusTicket from "./modules/Auth/busTicket/BusTicket";
import Signin from "./components/Home/Signin/Signin";
import Signup from "./components/Home/Signup/Signup";

import Video from "./modules/pages/Product/Video";
import NotFound from "./components/Not Found";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route index element={<Home />}></Route>
        <Route exact path="/sign-in" element={<Signin />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
        <Route exact path="/home" element={<Header />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/tracuu" element={<ShoeShop />}></Route>
        <Route exact path="/adminUser" element={<Layout />}></Route>
        <Route exact path="/adminCar" element={<LayoutCar />}></Route>
        <Route exact path="/busTicket" element={<BusTicket />}></Route>
        <Route exact path="/detail" element={<Video />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
