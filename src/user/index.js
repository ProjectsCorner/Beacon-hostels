import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookingooking from "../Components/booking";
import HostelCards from "../Components/cards";
import Home from "../Components/home";
import Login from "./Routes/account/login";
import Register from "./Routes/account/Register";

function Client() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/booking" element={<Bookingooking />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cards" element={<HostelCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Client;
