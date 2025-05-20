import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleUser } from "../Redux/User-Slice";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileNav({ showSidebar, setShowSidebar }) {
  console.log(showSidebar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.users.items);
  const LogOut = () => {
    dispatch(deleUser());
    navigate("/registe");
  };
  const CartUser = () => {
    alert("You Must Login To Your Account First 😴");
    navigate("/login");
  };
  const getUserData = () => {
    if (!items || items.length === 0) {
      return (
        <div className="flex flex-col items-center justify-between text-amber-50">
          <p className="mr-4 text-3xl text-amber-50" onClick={() => CartUser()}>
            <TiShoppingCart />
          </p>
          <p onClick={() => navigate("/login")} className="cursor-pointer">
            Login |
          </p>
          <p onClick={() => navigate("/registe")} className="cursor-pointer">
            Register |
          </p>
        </div>
      );
    }
  };
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-blue-600 p-5 text-white transition-transform transform ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      } ease-in-out duration-300`}
    >
      <div className="m-auto bg-amber-700 w-full">
        {items.map((item) => {
          return item.loge ? (
            <div className="flex flex-col items-center justify-between text-amber-50">
              <p
                className="mr-4 text-3xl text-amber-800 xl:visible hidden"
                onClick={() => navigate("/mycart")}
              >
                <TiShoppingCart />
              </p>
              <p onClick={() => navigate("/profile")}>{items.name} |</p>
              <p onClick={() => LogOut()}> LogeOut |</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between text-amber-50">
              <p onClick={() => navigate("/login")}>Login |</p>
              <p onClick={() => navigate("/registe")}> Register |</p>
            </div>
          );
        })}
        {getUserData()}
        <p
          className="absolute top-3 right-3 bg-amber-500 text-amber-100 rounded-2xl text-center cursor-pointer hover:animate-spin"
          onClick={() => setShowSidebar(false)}
        >
          <AiOutlineClose />
        </p>
      </div>
    </div>
  );
}
