import React from "react";
import Cartitems from "../Cartitems/Cartitems";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart-outer">
      <div className="cart-inner">
        {localStorage.getItem("items") ? (
          <Cartitems />
        ) : (
          <h1>No Items are added to Cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
