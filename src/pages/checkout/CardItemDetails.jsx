import React from "react";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";
import api from "../../api/client";

const CardItemDetails = ({ cartItem, deliveryOptions, loadCart }) => {
  const deleteCartItem = async () => {
    await api.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = async () => {
    if (isUpdatingQuantity) {
      await api.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: quantity,
      });
      await loadCart();
      setIsUpdatingQuantity(false);
      
    } else {
      setIsUpdatingQuantity(true);
    }
  };
  const updateQuantityInput = (event) => {
    const value = Number(event.target.value);
    console.log(value);
    setQuantity(value);
  };
  const handleQuantityKeyDown = async (event) => {
    const keyPressed = event.key;
    if(keyPressed === 'Enter' && quantity > 0){
      updateQuantity();
    }else if(keyPressed === 'Escape'){
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
      
    }
  }

  return (
    <>
      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
          </div>
          <div className="product-quantity">
            <span>
              Quantity:{" "}
              {isUpdatingQuantity ? 
                <input
                  type="text"
                  style={{ width: 50 }}
                  className="quantity-textbox"
                  value={quantity}
                  onChange={updateQuantityInput}
                  onKeyDown={handleQuantityKeyDown}
                />
               : 
                <span className="quantity-label">{cartItem.quantity}</span>
              }
            </span>
            <span
              className="update-quantity-link link-primary"
              onClick={updateQuantity}
            >
              Update
            </span>
            <span
              className="delete-quantity-link link-primary"
              onClick={deleteCartItem}
            >
              Delete
            </span>
          </div>
        </div>

        <DeliveryOptions
          deliveryOptions={deliveryOptions}
          cartItem={cartItem}
          loadCart={loadCart}
        />
      </div>
    </>
  );
};

export default CardItemDetails;
