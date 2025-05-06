import { PiPersonSimpleCircleBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/User-Slice";
import { useState } from "react";

function Registe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [UserInfo, setUserInfo] = useState({
    name: "",
    email: "",
    passward: "",
    confirmPassward: "",
    phoneNumber: "",
    loge: false,
  });
  const checkpassward = () => {
    if (UserInfo.passward != UserInfo.confirmPassward) {
      alert("your passwards not match 🤔");
      // navigate("/registe")
      return;
    } else {
      alert("your data in correct you can login now to start 😍");
      navigate("/login");
      console.log(UserInfo);
      dispatch(addUser(UserInfo));
    }
  };
  return (
    <div>
      <form className="box-shodow border-1 m-auto flex flex-col items-between justify-center">
        <label htmlFor="name">UserName</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => {
            setUserInfo({ ...UserInfo, name: e.target.value });
          }}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => {
            setUserInfo({ ...UserInfo, email: e.target.value });
          }}
        />
        <label htmlFor="passward">Passward</label>
        <input
          type="password"
          name="passward"
          id="passward"
          required
          onChange={(e) => {
            setUserInfo({ ...UserInfo, passward: e.target.value });
          }}
        />
        <label htmlFor="confirmPassward">Confirm Passward</label>
        <input
          type="password"
          name="confirmPassward"
          id="confirmPassward"
          required
          onChange={(e) => {
            setUserInfo({ ...UserInfo, confirmPassward: e.target.value });
          }}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          name="phone"
          id="phone"
          required
          onChange={(e) => {
            setUserInfo({ ...UserInfo, phoneNumber: e.target.value });
          }}
        />
        <button type="button" onClick={() => checkpassward()}>
          {" "}
          Registe <PiPersonSimpleCircleBold />
        </button>
      </form>
      <p className="text-center">
        I Have an account !{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue font-medium"
        >
          Login{" "}
        </span>
      </p>
    </div>
  );
}

export default Registe;
