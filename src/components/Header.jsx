import React from "react";
import { NavLink } from "react-router";
import "./Header.css";
import LogoWhite from "../assets/images/logo-white.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";

const Header = ({ cart = [] }) => {
  //search state and handlers
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");
  const [search, setSearch] = useState(searchText || "");

  const updateSearchInput = (event) => {
    console.log("Search text:", event.target.value);
    setSearch(event.target.value);
  };

  const navigate = useNavigate();
  const searchProducts = () => {
    navigate(`/?search=${search}`);
  };

  //Calculate total quantity of items in cart
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={LogoWhite} />
            <img className="mobile-logo" src={LogoWhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={search}
            onChange={updateSearchInput}
          />

          <button className="search-button" onClick={searchProducts}>
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
