import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./component";
import NotFound from "./component/NotFound";
import Login from "./component/Registeration/Login";
import Registe from "./component/Registeration/Registe";
import MyCart from "./component/Carts/MyCart";
import Profile from "./component/Checkout/Profile";
import MobileNav from "./component/headers/MobileNav";
import ProductCart from "./component/Carts/ProductCart";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registe" element={<Registe />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="mobile" element={<MobileNav/>} />
          <Route path="productCard" element={<ProductCart/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
