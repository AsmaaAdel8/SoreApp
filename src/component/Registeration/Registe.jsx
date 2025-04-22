import { useContext } from "react";
import { PiPersonSimpleCircleBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/UserStore";

function Registe() {
  const navigate = useNavigate();
  const { user, SetUser } = useContext(MyContext);
  const checkpassward = () => {
    if (user.passward != user.confirmPassward) {
      alert("your passwards not match 🤔");
      // navigate("/registe")
      return;
    } else navigate("/login");
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
            SetUser({ ...user, name: e.target.value });
          }}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => {
            SetUser({ ...user, email: e.target.value });
          }}
        />
        <label htmlFor="passward">Passward</label>
        <input
          type="password"
          name="passward"
          id="passward"
          required
          onChange={(e) => {
            SetUser({ ...user, passward: e.target.value });
          }}
        />
        <label htmlFor="confirmPassward">Confirm Passward</label>
        <input
          type="password"
          name="confirmPassward"
          id="confirmPassward"
          required
          onChange={(e) => {
            SetUser({ ...user, confirmPassward: e.target.value });
          }}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          name="phone"
          id="phone"
          required
          onChange={(e) => {
            SetUser({ ...user, phone: e.target.value });
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
