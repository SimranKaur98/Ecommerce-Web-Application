import React from "react";
import { Fragment } from "react";
import { Link } from "react-router";

import OrderHeader from "./OrderHeader.jsx";
import OrderDetailsGrid from "./OrderDetailsGrid.jsx";

const OrderGrid = ({ orders, loadCart }) => {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetailsGrid order={order} loadCart={loadCart} />
          </div>
        );
      })}
    </div>
  );
};

export default OrderGrid;
