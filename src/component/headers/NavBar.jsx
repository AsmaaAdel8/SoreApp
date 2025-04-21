import React from "react";
import { SlSocialDropbox } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import "../../App.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import MobileNav from "./MobileNav";
import MyCart from "../Carts/MyCart";
export default function NavBar() {
  return (
    <div className="bg-amber-800 h-[10vh] w-full flex flex-row items-center justify-between">
      <div className="flex items-center">
        <SlSocialDropbox className="text-4xl text-white" />
        <Link to="" className="text-2xl text-amber-200 ">
          Daraz
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <TiShoppingCart onClick={()=> <MyCart/>}/>
        <input
          type="search"
          placeholder="Search"
          className="border-0 font-medium bg-amber-200 w-6xl rounded-lg mx-2"
        />
        <button type="search" className="w-3xl border-0 bg-amber-200 rounded-lg">
          Search
        </button>
        <Link to="/login">Login |</Link>
        <Link to="/registe">| Register</Link>
      </div>
      <AiOutlineUnorderedList
        className="hidden md:visible"
        onClick={()=> <MobileNav />}
      />
    </div>
  );
}
