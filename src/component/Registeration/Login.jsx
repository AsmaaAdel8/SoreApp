import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/UserStore";
import { useNavigate } from "react-router-dom";
import { PiPersonSimpleCircleBold } from "react-icons/pi";

export default function Login() {
  const [emai, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { user } = useContext(MyContext);
  const navigate = useNavigate();

  const checkData = () => {
    if (user) {
      if (user.email === emai && user.passward === pass) {
        alert("Loged SuccessFully 😎");
        user.loge = true;
        navigate("/");
      } else {
        alert("your Data Not Found 🤨");
        navigate("/registe");
      }
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
