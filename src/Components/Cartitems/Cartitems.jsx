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
  // const [val, setVal] = useState(0);
  const inc = () => {
    // setVal(val + 1);
  };
  const dec=() =>{
    // setVal(val -1);
  };

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
        
      </div>

      <hr />
      {console.log("From CartItem Page", items)}
      {Data.map((e) => {
        // if (cartItems.cartItems[e.id] > 0) {
        if (items.includes(e.id)) {
          return (
            <div>
              
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={e.image}
                  alt=""
                  className="carticon-product-icon"
                  height={60}
                  width={60}
                />
                <p>{e.Name}</p>
                <p> ₹{e.offerPrice}</p>
                <div className="cartitems-quantity">
                  
                   <button onClick={dec} className="dec-butt">-</button>
                  
                  <p className="p-valu">1</p>
                  
                     <button onClick={inc}>+</button>
                  

                </div>
                {/* <p>{e.offerPrice * [e.id]}</p> */}
                
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
              <h3>Total</h3>
             <h3>{0}</h3>   {/*total cartitems price */}
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code,Enter It here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>submit</button>

            </div>
        </div>
          
        
      </div>
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
