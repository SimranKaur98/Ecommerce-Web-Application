import React from "react";
import api from "../../api/client";
import { useState, useEffect } from "react";
import "./CheckOutPage.css";
import CheckoutHeader from "./CheckoutHeader";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";


const CheckOutPage = ({ cart, loadCart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await api.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
    };
    fetchCheckoutData();
  }, []);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await api.get("api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, [cart]);

  // window.axios = axios;

  return (
    <>
      <title>Check Out</title>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
