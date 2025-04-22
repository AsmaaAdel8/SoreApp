import React, { useContext } from "react";
import { SlSocialDropbox } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import MobileNav from "./MobileNav";
import { MyContext } from "../../Context/UserStore";
export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useContext(MyContext);
  const LogOut = () => {
    user.loge = false;
    navigate("/registe");
  };
  return (
    <div className="bg-dark h-[10vh] w-full flex flex-row items-center justify-between">
      <div className="flex items-center justify-between w-[8%]">
        <SlSocialDropbox className="text-4xl text-white" />
        <Link to="" className="text-4xl text-amber-200 ">
          Daraz
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <p className="mr-4" onClick={() => navigate("/mycart")}>
          <TiShoppingCart />
        </p>

        <input
          type="search"
          placeholder="Search"
          className="border-0 font-medium bg-amber-200 w-6xl rounded-lg mx-2"
        />
        <button
          type="search"
          className="w-3xl border-0 bg-amber-200 rounded-lg"
        >
          Search
        </button>
        <div className="flex flex-row items-center justify-between">
          {user.loge ? (
            <>
              <p onClick={() => navigate("/profile")}>{user.name} |</p>
              <p onClick={() => LogOut()}> LogeOut |</p>
            </>
          ) : (
            <>
              <p onClick={() => navigate("/login")}>Login |</p>
              <p onClick={() => navigate("/registe")}> Register |</p>
            </>
          )}
        </div>
      </div>
      <AiOutlineUnorderedList
        className="hidden md:visible"
        onClick={() => <MobileNav />}
      />
    </div>
  );
}
