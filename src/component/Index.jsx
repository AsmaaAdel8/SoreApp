import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./headers/NavBar";
import Footer from "./footer/Footer";

export default function Index() {
  return (
    <div>
      <div className="w-[100%] mx-auto bg-amber-600">
        <NavBar />
      </div>
      <div className="w-[80%] mx-auto select-none">
        <Outlet />
      </div>
      <div className="w-[100%] mx-auto bg-amber-600">
        <Footer />
      </div>
    </div>
  );
}
