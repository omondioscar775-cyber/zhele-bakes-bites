import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;