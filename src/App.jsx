import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage.jsx";
import "./App.css";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import CheckOutPage from "./pages/checkout/CheckOutPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { useEffect, useState } from "react";
import api from "./api/client";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    let response = await api.get("/api/cart-items?expand=product");
    setCart(response.data);
    response = await api.get("/api/products");
console.log(response.data);

  }; 
  useEffect(() => {    
    (async () => {
      await loadCart();
    })();   
  }, []);
  console.log(cart);
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckOutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<PageNotFound cart={cart}/>} />
    </Routes>
  );
}

export default App;
