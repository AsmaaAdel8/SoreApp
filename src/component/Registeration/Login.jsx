import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiPersonSimpleCircleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { updateUserLoge } from "../Redux/User-Slice";

export default function Login() {
  const [emai, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const items = useSelector((state) => state.users.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkData = () => {
    if (items) {
      items.map((item) => {
        if (item.email === emai && item.passward === pass) {
          alert("Loged SuccessFully 😎");
          dispatch(updateUserLoge(emai));
          navigate("/");
        } else {
          alert("your Data Not Found 🤨");
          console.log(items);
          navigate("/registe");
        }
      });
    }
  };

  return (
    <div className="p-10">
      <form className="box-shodow border-1 m-auto flex flex-col items-between justify-center">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passward">Passward</label>
        <input
          type="password"
          name="passward"
          id="passward"
          required
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="button" onClick={() => checkData()}>
          {" "}
          Login <PiPersonSimpleCircleBold />
        </button>
      </form>
      <p className="text-center">
        I Don't Have an account !{" "}
        <span
          onClick={() => navigate("/registe")}
          className="text-blue font-medium"
        >
          Registe{" "}
        </span>
      </p>
    </div>
  );
}
