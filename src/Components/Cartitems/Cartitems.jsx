import React, { useState, useEffect } from "react";
import "./Cartitems.css";
import { Data } from "../Data";
import { useLocation } from "react-router-dom";

const Cartitems = () => {
  /* Setting up cartItem Array State Variable */
  const [items, setItems] = useState([]);
  const location = useLocation();

  /* Increment Counter - OnClick Event */
  const incrementCounter = (cartId) => {
    localStorage.setItem("items", JSON.stringify([...items, cartId]));
    let cartItemId = localStorage.getItem("items");
    let cartItemIdArray = JSON.parse(cartItemId);
    setItems(cartItemIdArray);
  };
  /* Decrement Counter - OnClick Event */
  const decrementCounter = (cartId) => {
    const index = items.indexOf(cartId);
    const itemArr = [...items];
    if (index > -1) {
      itemArr.splice(index, 1); // 2nd parameter means remove one item only
      if (!itemArr.length) {
        console.log("Empty");
        localStorage.setItem("items", JSON.stringify([...itemArr]));
        setItems(itemArr);
        localStorage.removeItem("items");
      } else {
        localStorage.setItem("items", JSON.stringify([...itemArr]));
        setItems(itemArr);
      }
    }
  };
  /* Count Function for calculating number of items in state Array */
  const count = (cartArr, cartId) => {
    let cartFilterArr = cartArr.filter((itemId) => {
      if (itemId == cartId) {
        return true;
      } else {
        return false;
      }
    });
    return cartFilterArr.length;
  };

  /* On Page Load */
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
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
        if (items.includes(e.id)) {
          if (typeof e.offerPrice == "string") {
            e.offerPrice = parseInt(e.offerPrice.replace(",", ""));
          }

          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={e.image}
                  alt="cart-item"
                  className="carticon-product-icon"
                  height={60}
                  width={60}
                />
                <p>{e.Name}</p>
                <p> ₹{e.offerPrice}</p>
                <div className="cartitems-quantity">
                  {count(items, e.id) > 0 ? (
                    <button
                      onClick={() => decrementCounter(e.id)}
                      className="dec-butt"
                    >
                      -
                    </button>
                  ) : (
                    ""
                  )}

                  <p className="p-valu">{count(items, e.id)}</p>

                  <button onClick={() => incrementCounter(e.id)}>+</button>
                </div>
                <p>{count(items, e.id) * e.offerPrice}</p>
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
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{0}</h3> {/*total cartitems price */}
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
