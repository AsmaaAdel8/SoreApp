import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleUser } from "../Redux/User-Slice";
import { SlSocialDropbox } from "react-icons/sl";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const items = useSelector((state) => state.users.items);
  const LogOut = () => {
    dispatch(deleUser());
    navigate("/registe");
  };
  const SideBar = () => {
    setShowSidebar(true);
    console.log(showSidebar);
    <MobileNav showSidebar={showSidebar} setShowSidebar={setShowSidebar} />;
  };
  const getUserData = () => {
    if (!items || items.length === 0) {
      return (
        <div className="hidden xl:visible">
          <div className="flex flex-row items-center justify-between text-amber-50">
            <p onClick={() => navigate("/login")} className="cursor-pointer">
              Login |
            </p>
            <p onClick={() => navigate("/registe")} className="cursor-pointer">
              Register |
            </p>
          </div>
        </div>
      );
    }
    {
      return items.map((item, index) => (
        <div key={index}>
          {item.loge ? (
            <div className="flex flex-row items-center justify-between text-amber-50">
              <p onClick={() => navigate("/profile")}>{item.name} | </p>
              <p onClick={() => LogOut()}> LogeOut |</p>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-between text-amber-50">
              <p onClick={() => navigate("/login")}>Login |</p>
              <p onClick={() => navigate("/registe")}> Register |</p>
            </div>
          )}
        </div>
      ));
    }
  };
  const ShoppingCart=()=>{
    if(!items || items.length===0){
      alert("you Can't Open this You should login first 😉");
      navigate("/login");
    }else{
      alert("Welcome Back in Your Shopping List 😘");
      navigate('/mycart');
    }
  };
  return (
    <div className="h-[10vh] w-[80%] mx-auto grid grid-cols-3 gap-6">
      <div className="flex items-center justify-between w-[8%]">
        <span className="text-2xl mr-4 text-amber-800 xl:text-3xl">
          <SlSocialDropbox />
        </span>
        <p
          className="text-xl text-amber-700 decoration-none cursor-pointer xl:text-3xl"
          onClick={() => navigate("")}
        >
          Daraz
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <p
          className="mr-4 text-3xl text-amber-800 visible col-span-1 mt-2"
          onClick={() => ShoppingCart()}
        >
          <TiShoppingCart />
        </p>
        <div className="col-span-2 flex flex-row h-15 items-center">
          <input
            type="search"
            placeholder="Search"
            className="border-0 font-medium bg-amber-200 rounded-lg mx-4 outline-none p-1"
          />
          <button
            type="search"
            className="w-[40%] border-0 bg-amber-200 rounded-lg p-0.5"
          >
            Search
          </button>
        </div>
      </div>
      <div className=" mr-2">{getUserData()}</div>
      <div
        className="md:cursor-pointer visible xl:hidden"
        onClick={() => SideBar()}
      >
        <AiOutlineUnorderedList />
      </div>
    </div>
  );
}
