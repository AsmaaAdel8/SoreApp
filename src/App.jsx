import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./component";
import NotFound from "./component/NotFound";
import Login from "./component/Registeration/Login";
import Registe from "./component/Registeration/Registe";
import MyCart from "./component/Carts/MyCart";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registe" element={<Registe />} />
          <Route path="mycart" element={<MyCart />} />
          {/* <Route path="profile" element={<Profile} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
