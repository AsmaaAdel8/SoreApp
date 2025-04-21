import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./headers/NavBar";
import Footer from "./footer/Footer";

export default function Index() {
  return (
    <div className="w-[80%] mx-auto">
      <NavBar/>
      <Outlet />
      <Footer />
    </div>
  );
}
