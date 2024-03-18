import React, { useState, useEffect } from "react";
import "./Cartitems.css";
import { Data } from "../Data";
// import { useState } from 'react';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import Single from '../../Pages/Products/Single';

const Cartitems = (cartItems, removefromcart) => {
  // const {cartItems,removefromcart}= useContext(Single)
  // Create Empty cart
  // const getDefaultCart = () => {
  //     let cart = {};
  //     for (let index = 0; index < Data.length + 1; index++) {
  //         cart[index] = 0;
  //     }
  //     return cart;
  // };

  // const [cartitems, setcartitems] = useState(getDefaultCart());

  // const removefromcart = (itemid) => {
  //     setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  // };
  // console.log(cartItems.cartItems);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />
      {console.log("From CartItem Page", items)}
      {Data.map((e) => {
        // if (cartItems.cartItems[e.id] > 0) {
        if (items.includes(e.id)) {
          return (
            <div>
              {e.offerPrice}
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt=""
                  className="carticon-product-icon"
                  height={200}
                  width={200}
                />
                <p>{e.Name}</p>
                <p> ₹{e.offerPrice}</p>
                <button className="cartitems-quantity">{e.id}</button>
                {/* <p>{e.offerPrice * cartItems.cartItems[e.id]}</p> */}
                <img
                  src={HighlightOffIcon}
                  // onClick={() => {
                  //   removefromcart(e.id);
                  // }}
                  alt=""
                  height={70}
                  width={70}
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cartitems;

// import React from 'react'

// const Cartitems = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Cartitems
