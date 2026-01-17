import React from "react";
import DeliveryOptions from "./DeliveryOptions";
import CardItemDetails from "./CardItemDetails";
import DeliveryDate from "./DeliveryDate";

const OrderSummary = ({ cart, deliveryOptions, loadCart }) => {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <CardItemDetails
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
                loadCart={loadCart}
              />
            </div>
          );
        })}
    </div>
  );
};

export default OrderSummary;
