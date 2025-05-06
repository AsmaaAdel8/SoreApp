import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleUser } from "../Redux/User-Slice";

export default function MobileNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.users.items);
  const LogOut = () => {
    dispatch(deleUser());
    navigate("/registe");
  };
  return (
    <div className="transiation-all left-[20%] duration-[5s] bg-pink-800 float-right">
      <div className="flex flex-cols items-between justify-center ">
        {items.map((item) => {
          return item.loge ? (
            <>
              <p onClick={() => navigate("/profile")}>{items.name} |</p>
              <p onClick={() => LogOut()}> LogeOut |</p>
            </>
          ) : (
            <>
              <p onClick={() => navigate("/login")}>Login |</p>
              <p onClick={() => navigate("/registe")}> Register |</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
