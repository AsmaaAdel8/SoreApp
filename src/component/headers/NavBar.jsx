import { SlSocialDropbox } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import MobileNav from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { deleUser } from "../Redux/User-Slice";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.users.items);
  const LogOut = () => {
    dispatch(deleUser());
    navigate("/registe");
  };
  return (
    <div className="bg-yellow-700 h-[10vh] w-full flex flex-row items-center justify-between">
      <div className="flex items-center justify-between w-[8%]">
        <SlSocialDropbox className="text-4xl text-white" />
        <Link to="" className="text-4xl text-amber-700 ">
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
          {items.map((item, index) => (
            <div key={index}>
              {item.loge ? (
                <>
                  <p onClick={() => navigate("/profile")}>{item.name} |</p>
                  <p onClick={() => LogOut()}> LogeOut |</p>
                </>
              ) : (
                <>
                  <p onClick={() => navigate("/login")}>Login |</p>
                  <p onClick={() => navigate("/registe")}> Register |</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <AiOutlineUnorderedList className="" onClick={() => <MobileNav />} />
    </div>
  );
}
